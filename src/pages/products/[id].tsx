import Header from '../../Components/Header'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import api from '../../services/api';
import { useEffect, useState } from 'react';

import ProductDetail from '../../Components/ProductDetail';
import DiscoverProductsList from '../../Components/DiscoverProductsList';
import ProductDetailCard from '../../Components/ProductDetailCard';
import Detalhes from '../../Components/Detalhes';

export default function Products() {
  function event() {
    window.location.href='/' 
  }

  const router = useRouter()
  const { id } = router.query
  const [productsId, setProductsId] = useState([]);


  useEffect( () => {
    async function fetchProduct(): Promise<void> {
      const response = await api.get(`/products/${id}`);
      setProductsId(response.data)
      console.log(response)
    } 
    fetchProduct()
  }, [id]);

  return (
    <>
      <Header>        
        <button type="button" onClick={event}>
          <AiOutlineArrowLeft/>&nbsp;&nbsp;Voltar
        </button>
      </Header>
      <Detalhes/>
      {productsId.length > 0 ? productsId.map((product) => (
        <ProductDetailCard key={product.id} image={product.image} title={product.title} description={product.description} /> 
      )) : (
      <span>
        Produto indisponível
      </span>
      )}
    </>
  )
}
