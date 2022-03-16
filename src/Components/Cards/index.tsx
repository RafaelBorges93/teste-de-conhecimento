import { Container, Content } from "./styles";
import api from "../../services/api"
import { useEffect, useState } from "react";
import ProductCard from "../ProductsCards";

export interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
}


export default function Cards() {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect( () => {
    async function fetchProducts(): Promise<void> {
      const response = await api.get('/products?limit=5');
      setProducts(response.data)
    } 
    fetchProducts()
  }, []);

  return (
    <Container>
      <Content>
      {products.length > 0 ? products.map(product => (
        <ProductCard key={product.title} image={product.image} title={product.title} price={product.price} />
      )) : (
      <span>
        Produtos indisponíveis
      </span>
      )}
      </Content>
    </Container>
 )
}  