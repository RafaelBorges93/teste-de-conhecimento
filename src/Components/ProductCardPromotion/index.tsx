import Image from "next/image";
import Link from "next/link";
import { Container, Content, Div1, Div2, Div3, Img } from "./styles";

interface ProductCardProps {
  id?: number;
  image: string;
  title: string;
  description: string;
  price?: number;
}

export default function ProductDetailCard(props: ProductCardProps) {
  const { image, title, description, id } = props
    
  return (
    <Container>
      <Content>
        <Img>
          <Image src={image} alt="product" height="164px" width="164px" />
        </Img>
        <Div1>
          <Div2>
            <h2>{title}</h2>
            <Link href={`/products/${id}`}>
            <a>Shop</a>
            </Link>
          </Div2>
          <Div3>
            <p>{description}</p>
          </Div3>
        </Div1>
    </Content>
   </Container>
  )
}