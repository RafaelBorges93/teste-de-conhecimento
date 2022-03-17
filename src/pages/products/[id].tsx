import Header from '../../Components/Header'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import ProductDetail from '../../Components/ProductDetail/indext';
import ProductDetailPage from '../../Components/ProductDetail/indext';

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
      {productsId.length ? productsId.map(product => (
        <ProductDetailPage key={product.title} image={product.image} title={product.title} description={product.description} id={product.id} />
      )) : (
      <span>
        Produto indisponível
      </span>
      )}
    </>
  )
}
