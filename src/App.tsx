import Header from './components/Header'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import EmergencyBand from './components/EmergencyBand'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Gallery from './components/Gallery'
import Craft from './components/Craft'
import Reviews from './components/Reviews'
import Areas from './components/Areas'
import Faq from './components/Faq'
import CtaBand from './components/CtaBand'
import Booking from './components/Booking'
import Footer from './components/Footer'
import StickyCta from './components/StickyCta'
import SplashScreen from './components/SplashScreen'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SplashScreen />
      <TopBar />
      <Header />
      <main id="main">
        <Hero />
        <EmergencyBand />
        <Services />
        <HowItWorks />
        <Gallery />
        <Craft />
        <Reviews />
        <Areas />
        <Faq />
        <CtaBand />
        <Booking />
      </main>
      <Footer />
      <StickyCta />
    </>
  )
}
