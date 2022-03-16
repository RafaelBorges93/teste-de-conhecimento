import { Container, Content, Menu } from "./styles";
import logoImg from "../../../public/images/icon.svg"
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  children: React.ReactNode
}

export default function Header(props: HeaderProps) {
  const { children } = props
  return (
    <Container>      
      <Content>  
        <div>
          <Image src={logoImg} alt="cuponeria"/>        
        </div>      
        <Link href="/">
          <a>CUPONERIA STORE</a>
        </Link>
      </Content>

      <Menu> 
        {children}        
      </Menu>
    </Container>
  )
}