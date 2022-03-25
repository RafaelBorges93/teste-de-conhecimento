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
      <h2>DISCOVER</h2>
      <Content>
      {list.length > 0 ? list.map((product) => (
        <ProductDetailCard key={product.id} product={product} showPrice={false} showDescription={{onMobile: false, onDesktop:true}}/>
      )) : (
      <span>
        Produtos indisponíveis
      </span>
      )}
      </Content>
    </Container>
 )
}


