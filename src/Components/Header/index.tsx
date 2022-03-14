import { Container, Content } from "./styles";
import logoImg from "../../../public/images/icon.svg"
import Image from "next/image";
import Link from "next/link";
import Buttons from "../Menu/Buttons";

export default function Header() {
  return (
    <Container>
        <Image src={logoImg} alt="cuponeria"/>
      <Content>
        <Link href="/">
          <a>CUPONERIA STORE</a>
        </Link>
        <Buttons/>
      </Content>
    </Container>
  )
}