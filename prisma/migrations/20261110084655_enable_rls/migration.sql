-- Block direct access to these tables through Supabase's public Data API.
-- No policies are added: the anon/authenticated roles get no access.
-- The app reads the tables server-side through Prisma (postgres role), which bypasses RLS.
ALTER TABLE "products" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "ingredients" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "product_ingredients" ENABLE ROW LEVEL SECURITY;
-- Prisma's own bookkeeping table (absent in Prisma's temporary shadow database, hence the check).
DO $$
BEGIN
  IF to_regclass('public._prisma_migrations') IS NOT NULL THEN
    ALTER TABLE "_prisma_migrations" ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;
