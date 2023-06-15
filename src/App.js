import './App.css';
import SignUpPage from './Pages/SignUp'
import LoginPage from './Pages/LoginPage';
import ProductUs from './Pages/ProductUs';
import AboutPage from './Pages/AboutPage';
import PageContactUs from './Pages/PageContactUs';
import Routing from './Componnat/Check/Routing';
import Navbar from './Componnat/Navbar';
import Header from './Componnat/Header';
import Why from './Componnat/Why';
import Cards from './Componnat/Cards';
import Product from './Componnat/Product';
import Contact from './Componnat/Contact';
import Footer from './Componnat/Footer';




function App() {
  const bgMain = '#FFA500';



  return (
    <div className="App">

      <Routing path='/' >
        <Navbar bgGG={bgMain} />
        <Header bgGG={bgMain} />
        <Cards bgGG={bgMain} />
        <Why bgGG={bgMain} />
        <Product bgGG={bgMain} />
        <Contact />
        <Footer />

      </Routing>


      <Routing path='/about'>
        <Navbar bgGG={bgMain} />
        <AboutPage />
      </Routing>

      <Routing path='/product'>
        <Navbar bgGG={bgMain} />
        <ProductUs />
      </Routing>

      <Routing path='/subscribe'>
        <Navbar bgGG={bgMain} />
        <PageContactUs />
      </Routing>

      <Routing path='/contact' >
        <Navbar bgGG={bgMain} />
        <PageContactUs />
      </Routing>
        
      <Routing path='/login'>
        <Navbar />
        <LoginPage bgGG={bgMain} />
      </Routing>

      <Routing path='/SignUp'>
        <Navbar />
        <SignUpPage bgGG={bgMain} />
      </Routing>

    </div>
  );
}

export default App;




