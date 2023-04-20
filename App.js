import './App.css';
import Intro from './components/intro/intro';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Header from './header';
import Form from './Form';

function App()
{
  return (
    <div>
    <Header />
     <Intro />
   <About />
   <ProductList />
   <Contact />
   <Form />
   </div>
  )  
}
export default App;
 