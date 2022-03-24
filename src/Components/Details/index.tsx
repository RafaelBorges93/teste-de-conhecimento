import { Container, Content } from "./styles";
import api from "../../services/api"
import { useEffect, useState } from "react";
import ProductCardPromotion from "../ProductDetailCard";
import ProductDetail from "../ProductDetail";

export interface Products {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
}


export default function Details() {
  const [products, setProducts] = useState<any[]>([]);
  
  useEffect( () => {
    async function fetchProducts(): Promise<any> {
      const response = await api.get('/products?limit=1');
      setProducts(response.data)
      console.log(response)
    } 
    fetchProducts()
  }, []);

  return (
    <Container>
      <Content>
      {products.length > 0 ? products.map(product => (
        <ProductDetail key={product.title} image={product.image} title={product.title} description={product.description} price={product.price} />
      )) : (
      <span>
        Produtos indisponíveis
      </span>
      )}
      </Content>
    </Container> 
 )
}