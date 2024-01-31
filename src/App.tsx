
import './App.css'
import BodyCards from './components/BodyCards'
import BodyCarrouselAndForm from './components/BodyCarrouselAndForm'
import BodyText from './components/BodyText'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <BodyCarrouselAndForm />
      <BodyText />
      <BodyCards />
      <p
        className="
            font-semibold
            max-lg:text-lg
            lg:text-xl
            text-[#b7b7b7]
            w-full
            text-center
            my-3
          "
      >
         Todas las Ofertas y Promociones vigentes hasta 14/02/2024  
      </p>
      <Footer />
    </>
  )
}

export default App
