import { Container, Content } from "./styles";
import logoImg from "../../../public/images/icon.svg"
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <Container>
        <div>
          <Image src={logoImg} alt="cuponeria"/>
        </div>
        <Link href="/">
          <a>CUPONERIA STORE</a>
        </Link>
      <Content> 
        <button type="button" >
          HOME
        </button>
        <button type="button" >
          MEN CLOTHING
        </button>
        <button type="button" >
          WOMEN CLOTHING
        </button>
        <button type="button" >
          ELETRONICS
        </button>
        <button type="button" >
          JEWELERY
        </button>        
      </Content>
    </Container>
  )
}