// lib/queries/products.ts
export async function getProducts(businessId: string) {
  const supabase = await createClient()
  return supabase.from('products').select('*').eq('business_id', businessId)
}