import { useEffect, useState } from 'react';
import { Product } from '../Components/Commom/product';
import Discover from '../Components/Discover';
import DiscoverProductsList from '../Components/DiscoverProductsList';
import Featured from '../Components/Featured';
import FeaturedProductsList from '../Components/FeaturedProductsList';
import Header from '../Components/Header';
import api from '../services/api';

export interface CategoryProps {
  category: string;
}
export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);  
  
  useEffect( () => {
    async function fetchProducts(): Promise<void> {
      const response = await api.get('/products?limit=5');
      setProducts(response.data)
    } 
    fetchProducts()
  }, []);

  return (
    <>
      <Header>        
        <button type="button">
          Home
        </button>
        <button type="button">
          MEN CLOTHING
        </button>
        <button type="button">
          WOMEN CLOTHING
        </button>
        <button type="button">
          ELETRONICS
        </button>
        <button type="button">
          JEWELERY
        </button>
        
      </Header>
      <Discover/>
      <DiscoverProductsList  products={products} />
      <Featured/>
      <FeaturedProductsList products={products} />
    </>
  )
}