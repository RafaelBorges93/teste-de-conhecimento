import ProductCard from "../ProductSummaryCard";
import { Container, Content } from "./styles";
import { Product } from "../Commom/product";
import { useEffect, useState } from "react";

interface FeaturedProductsListProps {
  products: Product[];
  limit?: number;
}

export default function FeaturedProductsList(props: FeaturedProductsListProps) {
  const { products, limit=5 } = props;
  const [list, setList] = useState<Product[]>([]);

  useEffect(() => {
    const slicedList = products.slice(0, limit);
    setList(slicedList)
  }, [products, limit])

  return (
    <Container>
      <Content>
      {list.length > 0 ? list.map(product => (
        <ProductCard key={product.title} image={product.image} title={product.title} price={product.price} id={product.id} />
      )) : (
      <span>
        Produtos indisponíveis
      </span>
      )}
      </Content>
    </Container>
 )
}  