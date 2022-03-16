import Image from "next/image";
import { Container, Content } from "./styles";

export interface ProductCardProps {
  image: string;
  title: string;
  description?: string;
  price?: number;
}

export default function ProductCard(props: ProductCardProps) {
  const { image, title, price } = props

  return (
      <Content>

      <div>
        <button>
          <Image src={image} alt="product" height="258px" width="200px"/>       
          <tr>
            <text>R$ {price}</text>
          </tr>
        </button>        
      </div>
      <p>{title}</p>
      </Content>  
  )
}