import Image from "next/image";
import Link from "next/link";
import {  Content } from "./styles";

export interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description?: string;
  price?: number;
}

export default function ProductCard(props: ProductCardProps) {
  const { image, title, price, id } = props

  return (
      <Content>

      <div>
        <Link href={`/products/${id}`}>
          <a>
            <Image src={image} alt="product" height="258px" width="200px"/>       
            <tr>
              <text>R$ {price}</text>
            </tr>
          </a>
        </Link>                 
      </div>
      <p>{title}</p>
      </Content>  
  )
}