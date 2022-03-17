import { useEffect, useState } from 'react'
import Cards from '../Components/Cards'
import Discover from '../Components/Discover'
import Featured from '../Components/Featured'
import Header from '../Components/Header'
import Promotion from '../Components/Promotion'
import api from '../services/api'

export interface CategoryProps {
  category: string;
}

export default function Home() {
  
  // const [categoryProducts, setCategoryProducts] = useState<any[]>([]);
  
  // useEffect( () => {
  //   async function fetchProducts(): Promise<any> {
  //     const response = await api.get('/products/category/jewelery');
  //     setCategoryProducts(response.data)
  //   } 
  //   fetchProducts()
  // }, []);

  const [discoverProducts, setDiscoverProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categorysProducts, setCategorysProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');

  /**
  * Chamando a API para uso nos botões de filtro
  */
  useEffect(() => {
      api.get('/categories').then(response => {
          setCategorysProducts(response.data);
      })
  }, []);

    useEffect(() => {
      api.get('?limit=2').then(response => {
          setDiscoverProducts(response.data);
      })
  }, []);

    useEffect(() => {
      if (filterCategory !== '') {
          api.get(`/category/${filterCategory}`).then(response => {
              setFeaturedProducts(response.data);
          })
      } else {
          api.get('/').then(response => {
              setFeaturedProducts(response.data);
          })
      }
  }, [filterCategory]);

  return (
    <>
      <Header>        
        <button type="button">
          Home
        </button>
        {categorysProducts.map((category) => (
        <button key={category} onClick={() => setFilterCategory(category)}>{category}</button> ))}
      </Header>
      <Discover/>
      <Promotion />
      <Featured/>
      <Cards/>
    </>
  )
}