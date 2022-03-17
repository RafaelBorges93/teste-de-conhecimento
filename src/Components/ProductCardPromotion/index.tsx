import Image from "next/image";
import Link from "next/link";
import { Container, Content } from "./styles";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  price?: number;
}

export default function ProductCardPromotion(props: ProductCardProps) {
  const { image, title, description, id } = props
    // function event() {
    //   window.location.href=`/product/${product.id}`
    // }
  // const router = useRouter( )

  // const handleClick = (e) => {
  //   e.preventDefault()
  //   router.push(`/product/${product.id}`)
  // }
      
  return (
    <Container>
      <Content>
        <div>
          <Image src={image} alt="product" height="164px" width="164px" />
        </div>
        <tr>
          <td>
            <h2>{title}</h2>
            <Link href={`/products/${id}`}>
            <a>Shop</a>
            </Link>
            {/* <button >SHOP</button> */}
          </td>
          <td>
            <text>{description}</text>
          </td>
        </tr>
    </Content>
   </Container>
  )
}