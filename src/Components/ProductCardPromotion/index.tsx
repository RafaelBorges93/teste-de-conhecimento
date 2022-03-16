import Image from "next/image";
import { Container, Content } from "./styles";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price?: number;
}

export default function ProductCardPromotion(props: ProductCardProps) {
  const { image, title, description } = props
    function event() {
      window.location.href='/products' 
    }

  return (
    <Container>
      <Content>
        <div>
          <Image src={image} alt="product" height="164px" width="164px" />
        </div>
        <tr>
          <td>
            <h2>{title}</h2>
            <button onClick={event}>SHOP</button>
          </td>
          <td>
            <text>{description}</text>
          </td>
        </tr>
    </Content>
   </Container>
  )
}