import ProductCard from "../ProductSummaryCard";
import { Container, Content } from "./styles";
import { Product } from "../Commom/product";

interface FeaturedProductsListProps {
  products: Product[];
}

export default function FeaturedProductsList(props: FeaturedProductsListProps) {
  const { products } = props;

  return (
    <Container>
      <Content>
      {products.length > 0 ? products.map(product => (
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