// Cart kept in the visitor's browser (localStorage). No orders are saved to the database yet.
// Shape: { [productSlug]: quantity }

export type CartItems = Record<string, number>;

const STORAGE_KEY = "tal-savan-cart";
const MAX_QUANTITY = 20;
const EMPTY: CartItems = {};

let cache: CartItems | null = null;
const listeners = new Set<() => void>();

function read(): CartItems {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
    return parsed && typeof parsed === "object" ? (parsed as CartItems) : {};
  } catch {
    return {};
  }
}

function write(items: CartItems) {
  cache = items;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage blocked (private mode): the cart still works for this visit.
  }
  listeners.forEach((listener) => listener());
}

export function getCartSnapshot(): CartItems {
  cache ??= read();
  return cache;
}

export function getServerCartSnapshot(): CartItems {
  return EMPTY;
}

export function subscribeToCart(listener: () => void) {
  listeners.add(listener);
  // Keep tabs in sync.
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      cache = read();
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function addToCart(slug: string, quantity: number) {
  const items = getCartSnapshot();
  const next = Math.min(MAX_QUANTITY, (items[slug] ?? 0) + quantity);
  write({ ...items, [slug]: next });
}

export function setCartQuantity(slug: string, quantity: number) {
  const rest = { ...getCartSnapshot() };
  delete rest[slug];
  write(quantity > 0 ? { ...rest, [slug]: Math.min(MAX_QUANTITY, quantity) } : rest);
}

export function countCartItems(items: CartItems): number {
  return Object.values(items).reduce((total, quantity) => total + quantity, 0);
}

export { MAX_QUANTITY };
