import { useEffect, useState } from 'react';
import { Product } from '../Components/Commom/product';
import DiscoverProductsList from '../Components/DiscoverProductsList';
import FeaturedProductsList from '../Components/FeaturedProductsList';
import Header from '../Components/Header';
import api from '../services/api';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>('');   
  
  useEffect( () => {
    async function fetchProducts(): Promise<void> {
      const url = category ? `/products/category/${category}` : "/products";
      const response = await api.get(url);
      setProducts(response.data)
    } 
    fetchProducts()
  }, [category]);

  return (
    <>
      <Header>        
        <button type="button" onClick={() => setCategory('')}>
          Home
        </button>
        <button type="button" onClick={() => setCategory("men's clothing")}>
          MEN CLOTHING
        </button>
        <button type="button"   onClick={() => setCategory("women's clothing")}>
          WOMEN CLOTHING
        </button>
        <button type="button"  onClick={() => setCategory("electronics")}>
          ELETRONICS
        </button>
        <button type="button" onClick={() => setCategory("jewelery")}>
          JEWELERY
        </button>
        
      </Header>
      <DiscoverProductsList  products={products} />
      <FeaturedProductsList products={products} />
    </>
  )
}