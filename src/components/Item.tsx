
import { useContext } from 'react';

import { useRouter } from 'next/router';

import styles from '../styles/components/Item.module.scss'
import { ProductsContext } from '../contexts/ProductsContexts';


export default function Item( { item } ) {

  const router = useRouter();

  const { setProduct } = useContext(ProductsContext);

  const hanldeItem = (id) => {
    setProduct(id);
    router.push(`/product/${id}`);
  }

  return (
    <div  
      onClick={() => hanldeItem(item.id)}
    >
      <div className={styles.item}>
        <img src={item.thumbnail} alt={item.title}/>
        
        <div className={styles.item_info}>
          <div>
            <div className={styles.price}>
              <span>$ { item.price } </span>
              {
                item.shipping.free_shipping && 
                  <img src="assets/ic_shipping.png" alt="Produto 1"/>
              }
            </div>
            <span className={styles.city}> { item.address.city_name } </span>
          </div>
          <span> { item.title } </span>
        </div>
      </div>
    </div>
  )
}
