import { useContext } from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.scss';
import Item from '../components/Item';

import { ProductsContext } from '../contexts/ProductsContexts';

export default function Home() {

  const { products } = useContext(ProductsContext);
  
  return (
      <div>
        <Head>
          <title>Mercado Livre</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.container}>
          {
            products && products.map((item, index) => <Item item={item} key={index} />)
          }
        </div>
      </div>
  )
}