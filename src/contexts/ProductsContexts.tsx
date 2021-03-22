import { createContext, useState } from "react";

export const ProductsContext = createContext({} as ProductContextData);

export function ProductProvider({ children }) {

  const [product, setProduct] = useState({} as Product);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(null);

  
  return (
    <ProductsContext.Provider 
      value={{
        product,
        setProduct,
        products,
        setProducts,
        categories,
        setCategories
      }}
    >
      { children }
    </ProductsContext.Provider>
  );
};

interface ProductContextData {
  product: Product,
  setProduct: (product: Product) => void,
  products: Product[],
  setProducts: (product: Product[]) => void,
  categories: Categorie[],
  setCategories: (categorie: Categorie[]) => void
}

interface Categorie {
  id: string,
  name: string
}

interface Product {
  id: string,
  site_id: string,
  title: string,
  subtitle: string,
  seller_id: number,
  category_id: string,
  official_store_id: number,
  price: number,
  base_price: number,
  original_price: number,
  currency_id: string,
  initial_quantity: number,
  available_quantity: number,
  sold_quantity: number,
  sale_terms: [],
  buying_mode: string,
  listing_type_id: string,
  start_time: string,
  stop_time: string,
  condition: string,
  permalink: string,
  thumbnail_id: string,
  thumbnail: string,
  secure_thumbnail: string,
  pictures: [],
  video_id: number,
  descriptions: [],
  accepts_mercadopago: boolean,
  non_mercado_pago_payment_methods: [],
  shipping: {},
  international_delivery_mode: string,
  seller_address: {},
  seller_contact: string,
  location: {},
  coverage_areas: [],
  attributes: [],
  warnings: [],
  listing_source: string,
  variations: [],
  status: string,
  sub_status: [],
  tags: [],
  warranty: string,
  catalog_product_id: string,
  domain_id: string,
  parent_item_id: string,
  differential_pricing: string,
  deal_ids: [],
  automatic_relist: boolean,
  date_created: string,
  last_updated: string,
  health: number,
  catalog_listing: boolean,
  channels: []
}