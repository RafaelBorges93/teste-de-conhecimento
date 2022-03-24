import Header from '../../Components/Header'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import api from '../../services/api';
import { useEffect, useState } from 'react';

import ProductDetail from '../../Components/ProductDetail';
import DiscoverProductsList from '../../Components/DiscoverProductsList';
import ProductDetailCard from '../../Components/ProductDetailCard';
import Detalhes from '../../Components/Detalhes';
import { Product } from '../../Components/Commom/product';
import Link from 'next/link';

export default function Products() {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState<Product>(null);

  useEffect( () => {
    async function fetchProduct(): Promise<void> {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data)
      console.log(response)
    } 
    fetchProduct()
  }, [id]);

  return (
    <>
      <Header>        
        <Link href="/">
          <a>
            <AiOutlineArrowLeft/>&nbsp;&nbsp;Voltar
          </a>
        </Link>
      </Header>
      <Detalhes/>
      {product ? (
        <ProductDetailCard product={product} showPrice={true} /> 
      ) : (
      <span>
        Produto indisponível
      </span>
      )}
    </>
  )
}
