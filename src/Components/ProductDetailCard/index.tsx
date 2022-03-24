import Image from "next/image";
import Link from "next/link";
import { Product } from "../Commom/product";
import { Container, Content, Div1, Div2, Div3, Img } from "./styles";

interface ProductCardProps {
  product: Product;
  showPrice: boolean;
}

export default function ProductDetailCard(props: ProductCardProps) {
  const { 
    product: {image, title, description, id, price }, 
    showPrice,
  } = props;
    
  return (
    <Container>
      <Content>
        <Img>
          <Image src={image} alt="product" height="164px" width="164px" />
        </Img>
        <Div1>
          <Div2>
            <h2>{title}</h2>
            {showPrice ? (
              <div>{price}</div>
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