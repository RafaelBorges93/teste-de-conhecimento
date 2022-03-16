import Cards from '../Components/Cards'
import Discover from '../Components/Discover'
import Featured from '../Components/Featured'
import Header from '../Components/Header'
import Promotion from '../Components/Promotion'

export default function Home() {
  

  return (
    <>
      <Header>        
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
      </Header>
      <Discover/>
      <Promotion />
      <Featured/>
      <Cards/>
    </>
  )
}