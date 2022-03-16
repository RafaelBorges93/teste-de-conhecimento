import { Container, Content } from "./styles";
import api from "../../services/api"
import { useEffect, useState } from "react";
import ProductCardPromotion from "../ProductCardPromotion";

export interface Products {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
}


export default function Promotion() {
  const [products, setProducts] = useState<any[]>([]);
  
  useEffect( () => {
    async function fetchProducts(): Promise<any> {
      const response = await api.get('/products?limit=2');
      setProducts(response.data)
    } 
    fetchProducts()
  }, []);

  return (
    <Container>
      <Content>
      {products.length > 0 ? products.map(product => (
        <ProductCardPromotion key={product.title} image={product.image} title={product.title} description={product.description} />
      )) : (
      <span>
        Produtos indisponíveis
      </span>
      )}
      </Content>
    </Container>
 )
}


