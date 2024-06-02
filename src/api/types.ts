import { z } from "zod";

const ProductColorSchema = z.object({
  hex_value: z.string(),
  colour_name: z.string(),
});

export const ProductSchema = z.object({
  id: z.number(),
  brand: z.string(),
  name: z.string(),
  price: z.string(),
  price_sign: z.string().nullable(),
  currency: z.string().nullable(),
  image_link: z.string().url(),
  product_link: z.string().url(),
  website_link: z.string().url(),
  description: z.string(),
  rating: z.number(),
  category: z.string().nullable(),
  product_type: z.string(),
  tag_list: z.array(z.string()),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  product_api_url: z.string().url(),
  api_featured_image: z.string(),
  product_colors: z.array(ProductColorSchema),
});

export type Product = z.infer<typeof ProductSchema>;
