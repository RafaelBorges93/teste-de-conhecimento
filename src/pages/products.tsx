import Header from '../Components/Header'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Details from '../Components/Details';

export default function Products() {
  function event() {
    window.location.href='/' 
  }
  return (
    <>
      <Header>        
        <button type="button" onClick={event}>
          <AiOutlineArrowLeft/>&nbsp;&nbsp;Voltar
        </button>
      </Header>
      <Details/>
      
    </>
  )
}