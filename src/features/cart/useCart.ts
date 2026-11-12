"use client";

import { useSyncExternalStore } from "react";
import { getCartSnapshot, getServerCartSnapshot, subscribeToCart } from "./cartStore";

/** Current cart items; re-renders when the cart changes (also from other tabs). */
export function useCart() {
  return useSyncExternalStore(subscribeToCart, getCartSnapshot, getServerCartSnapshot);
}
