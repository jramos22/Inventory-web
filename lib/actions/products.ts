// lib/actions/products.ts
'use server'
export async function createProduct(data: ProductForm) {
  const supabase = await createClient()
  return supabase.from('products').insert(data)
}