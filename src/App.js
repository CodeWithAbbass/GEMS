
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import NewArrivals from './components/NewArrivals';
import HelpCenter from './components/HelpCenter';
import Download from './components/Download';
import Blog from './components/Blog';
import Affiliate from './components/Affiliate';
import WhereToBuy from './components/WhereToBuy';
import Cart from './components/Cart';
import Search from './components/Search';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
import About from './components/About';
import NewsRoom from './components/NewsRoom';
import Footer from './components/Footer';


function App() {
  //Get the button
  const backToTopBtn = document.querySelector(".scrollUp");

  // When the user scrolls down 20px from the top of the document, show the button
const ScrollUpFunc = async function () {
    if (document.body.scrollTop > 20 || 
        document.documentElement.scrollTop > 20
      )  
    {
      backToTopBtn.style.display = 'block';
      console.log(backToTopBtn);
    } else {
      backToTopBtn.style.display = "none";
    }
    };

  return (
    <div id="Back_to_Top">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home myFunc={ScrollUpFunc}/>} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/newarrivals" element={<NewArrivals />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/download" element={<Download />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/wheretobuy" element={<WhereToBuy />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsroom" element={<NewsRoom />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <a href="#Back_to_Top" className="btn scrollUp bg-white border-5 border-white"><i className="fa fa-angle-up" /></a>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
