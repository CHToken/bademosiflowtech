import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Areas from './components/Areas'
import Booking from './components/Booking'
import Footer from './components/Footer'
import StickyCta from './components/StickyCta'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Stats />
        <Gallery />
        <Reviews />
        <Areas />
        <Booking />
      </main>
      <Footer />
      <StickyCta />
    </>
  )
}
