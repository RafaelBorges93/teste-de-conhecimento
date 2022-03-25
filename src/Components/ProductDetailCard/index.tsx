import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Product } from "../Commom/product";
import { Content, Div1, Div2, Img, Price } from "./styles";

interface ProductCardProps {
  product: Product;
  showPrice: boolean;
  showDescription: {
    onMobile: boolean;
    onDesktop: boolean;
  }
}

export default function ProductDetailCard(props: ProductCardProps) {
  const { 
    product: {image, title, description, id, price }, 
    showPrice,
    showDescription,
  } = props;

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
  
  const Div3 = styled.div `
  text-align: justify;
  color: var(--text-body);
  margin-right: 14px;   
  display: ${showDescription.onDesktop ? 'block' : 'none'};

  @media (max-width: 720px) {
    display: ${showDescription.onMobile ? 'block' : 'none'};      
  } 
` 
    
  return ( 
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
  )
}