import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import Landing from './Landing'
import Features from './Features'
import Gallery from './Gallery'
import Stuff from './Stuff'
import Team from './Team'
import Techs from './Techs'
import Pricing from './Pricing'
import OurClients from './OurClients'
import FAQ from './FAQ'
import Footer from './Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Features />
      <Gallery />
      <Stuff />
      <Team />
      <Techs />
      <Pricing />
      <OurClients />
      <FAQ />
      <Footer />

    </div>

  );

}

export default App
