import Image from "next/image";
import Link from "next/link";
import {  Container, Content } from "./styles";

export interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description?: string;
  price?: number;
}

export default function ProductSummaryCard(props: ProductCardProps) {
  const { image, title, price, id } = props

  return (
      <Container>
      <Content>
        <Link href={`/products/${id}`}>
          <a>
            <Image src={image} alt="product" height="258px" width="200px"/>       
            <div>
              <p>R$ {price}</p>
            </div>
          </a>
        </Link>                 
        </Content> 
      <title>{title}</title>
      
      </Container> 
  )
}