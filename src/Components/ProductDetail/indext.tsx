import Image from "next/image";
import { Container, Content } from "./styles";

interface ProductCardProps {
  id?: number;
  image: string;
  title: string;
  description: string;
  price?: number;
}

export default function ProductDetailPage(props: ProductCardProps) {
  const { image, title, description, price } = props

  return (
    <Container>
      <Content>
        <div>
          <Image src={image} alt="product" height="300px" width="434px" />
        </div>
        <tr> 
          <td>
            <h2>{title}</h2>
            <button>R$ {price}</button>
          </td>
          <td>
            <text>{description}</text>
          </td>
        </tr>
    </Content>
   </Container>
  )
}