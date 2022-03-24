
import Image from "next/image";
import Link from "next/link";
import { Product } from "../Commom/product";
import { Container, Content, Div1, Div2, Div3, Img, Price } from "./styles";

interface ProductCardProps {
  product: Product;
  showPrice: boolean;
}

export default function Detalhes(props: ProductCardProps) {
  const { 
    product: {image, title, description, id, price }, 
    showPrice,
  } = props;

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price); 
  
    
  return (
    <Container>
      <h2>DETALHES</h2>
      <Content>
        <Img>
          <Image src={image} alt="product" height="164px" width="164px" />
        </Img>
        <Div1>
          <Div2>
            <h2>{title}</h2>
            {showPrice ? (
              <Price>{formatter}</Price>
              ) : (
                <Link href={`/products/${id}`}>
                <a>Shop</a>
              </Link>
            )}
          </Div2>
          <Div3>
            <p>{description}</p>
          </Div3>
        </Div1>
      </Content>
    </Container>
  )
}