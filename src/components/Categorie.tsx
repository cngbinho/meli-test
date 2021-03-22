import { useContext } from 'react';

import styles from '../styles/components/Categorie.module.scss'

import { ProductsContext } from '../contexts/ProductsContexts';

export default function Categorie() {

  const { categories } = useContext(ProductsContext);

  let pahtCategorie: string = "";

  categories && categories.map((categorie, index) => {
    if(categories.length - 1 == index) {
      pahtCategorie = pahtCategorie + categorie.name
    } else {
      pahtCategorie = pahtCategorie + categorie.name + ' > '
    }
  })

  return (
    <div className={styles.container}>
      {
        categories && (<span> { pahtCategorie } </span>)
      }
    </div>
  )
}
