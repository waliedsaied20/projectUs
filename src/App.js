import './App.css';
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
     
      <Navbar bgGG={bgMain}/>
      <Header bgGG={bgMain}/>
      <Cards bgGG={bgMain}/>
      <Why bgGG={bgMain}/>
      <Product bgGG={bgMain}/> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;




