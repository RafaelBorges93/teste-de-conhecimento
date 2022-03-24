import { Container, Content } from "./styles";
import ProductDetailCard from "../ProductDetailCard";
import { Product } from "../Commom/product";
import { useEffect, useState } from "react";

interface DiscoverProductsListProps {
  products: Product[];
  limit?: number;
}

export default function DiscoverProductsList(props: DiscoverProductsListProps) {
  const { products, limit=2 } = props;
  const [list, setList] = useState<Product[]>([]);

  useEffect(() => {
    const slicedList = products.slice(0, limit);
    setList(slicedList)
  }, [products, limit])

  return (
    <Container>
      <Content>
      {list.length > 0 ? list.map((product) => (
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


