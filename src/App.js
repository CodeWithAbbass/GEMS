
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
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
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
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
