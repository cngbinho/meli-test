import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import axios, { AxiosResponse } from 'axios';

import styles from '../../styles/pages/Produto.module.scss';

export default function Product() {

  const { query } = useRouter();
  const [product, setProduct] = useState(null as Product);
  const [productDescription, setProductDescription] = useState({});

  useEffect(()=> {
    getProduct();
    getProductDescription();
  }, []);

  async function getProduct() {
    await axios
      .get(`https://api.mercadolibre.com/items/${query.id}`)
      .then((res: AxiosResponse<Product>) => {
          if(res.status === 200) {
              setProduct(res.data)
            }
          }
        )
      .catch(() => {
        console.log('Produto não encontrado.')});
  }

  async function getProductDescription() {
    await axios
      .get(`https://api.mercadolibre.com/items/${query.id}/description`)
      .then(res => {
            if(res.status === 200) {
              setProductDescription(res.data)
            }
          }
        )
      .catch(() => {
        console.log('Descrição do produto não encontrada.')});
  }
  
  return (
    <div className={styles.container}>
      { product ?
        (
          <>
            <div className={styles.product}>
              <img src={product.pictures[0].url} alt={product['title']}/>

              <div className={styles.product_description}>
                <h1>Descripción del producto</h1>
                <span>
                  {productDescription['plain_text']}
                </span>
              </div>
            </div>
            
            <div className={styles.product_details}>
              <span>
                {product.condition} - {product.sold_quantity} vendidos
              </span>
              <span>
                {product.title}
              </span>
              <span>
                $ {product.price}
              </span>
              <button>Comprar</button>
            </div>
          </>
        ) : (
          <div>
            <h1>Loading...</h1>
          </div>
        )
      }
    </div>
  )
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
  pictures: Array<Pictures>,
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

interface Pictures {
    id: string,
    max_size: string,
    quality: string,
    secure_url: string,
    size: string,
    url: string
}