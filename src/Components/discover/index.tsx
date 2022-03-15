import Image from "next/image";
import { Container, Content } from "./styles";
import api from "../../services/api"
import { useEffect, useState } from "react";

export default function Discover() {
  return (
    <Container>
      <text>DISCOVER</text>
      <Content>
             
      </Content>
    </Container>
  )
}

function setUser(data: any): any {
  throw new Error("Function not implemented.");
}
