import { useState, useContext } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';

import styles from '../styles/components/Header.module.scss'
import { ProductsContext } from '../contexts/ProductsContexts';

export default function Home() {

  const router = useRouter();

  const [search, setSearch] = useState("");
  const { setProducts, setCategories } = useContext(ProductsContext);

  const onKeyUp = value => {
    setSearch(value.target.value);

    if(search.length > 0 && value.keyCode === 13) {
      handleSearch();
    }
  }

  const handleSearch = () => {
    axios
      .get(`https://api.mercadolibre.com/sites/MLA/search?offset=0&limit=4&q=${search}`)
      .then(res => {
          const {results, filters} = res.data
            setProducts(results)
            setCategories(filters.filter(filter => filter.name === "Categories")[0]?.values[0].path_from_root)
          }
        );

    router.push('/')

  };

  return (
    <header className={styles.header}>
      <div>
        <img src="assets/Logo_ML.png" alt="Logo Mercado Livre"/>
        <input placeholder="Nunca dejes de buscar" type="text" onKeyUp={onKeyUp} />
        <button onClick={handleSearch} >
          <img src="/assets/ic_Search.png" alt="Pesquisar"/>
        </button>
      </div>
    </header>
  )
}
