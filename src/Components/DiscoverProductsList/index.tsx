import { Container, Content } from "./styles";
import api from "../../services/api"
import { useEffect, useState } from "react";
import ProductDetailCard from "../ProductDetailCard";



export default function DiscoverProductsList() {
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
      {products.length > 0 ? products.map((product) => (
        <ProductDetailCard key={product.title} image={product.image} title={product.title} description={product.description} id={product.id}/>
      )) : (
      <span>
        Produtos indisponíveis
      </span>
      )}
      </Content>
    </Container>
 )
}


