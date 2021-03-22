import '../styles/globals.scss'

import Header from '../components/Header';
import Categorie from '../components/Categorie';
import { ProductProvider } from '../contexts/ProductsContexts';

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Header />
      <Categorie />
      <Component {...pageProps} />
    </ProductProvider>
  )
}

export default MyApp
