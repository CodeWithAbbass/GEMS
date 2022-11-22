import './App.css';
import './Css/General.css';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Home from './components/pages/Home';
import AllProducts from './components/pages/AllProducts';
import NewArrivals from './components/pages/NewArrivals';
import HelpCenter from './components/pages/HelpCenter';
import Download from './components/pages/Download';
import Blog from './components/pages/Blog';
import Affiliate from './components/pages/Affiliate';
import WhereToBuy from './components/pages/WhereToBuy';
import Cart from './components/pages/Cart';
import Search from './components/pages/Search';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import User from './components/pages/User';
import About from './components/pages/About';
import NewsRoom from './components/pages/NewsRoom';
import AddProduct from './components/pages/AddProduct';
import Footer from './components/Footer';
import StateContext from './context/StateContext';
import LoadingBar from 'react-top-loading-bar'
import SingleProduct from './components/pages/SingleProduct';
import ErrorPage from './components/pages/ErrorPage';

 
function App(props) {
  const scrollBtn = document.querySelector('.scrollUp');
  const [progress, setProgress] = useState(0);

  return (
    <div id="Back_to_Top">
      <StateContext>
      <BrowserRouter>
        <LoadingBar
            color='#1FBAFF'
            height={3}
            shadow={true}
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
            />
        <Header />
        <Routes>
          <Route path='/' element={<Home scrollBtn={scrollBtn}/>} />
          <Route path="/allproducts" element={<AllProducts setProgress={setProgress}/>} />
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
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/singleproduct/:id" element={<SingleProduct setProgress={setProgress}/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      <Link to="#Back_to_Top" className="btn scrollUp bg-white border-5 border-white"><i className="fa fa-angle-up" /></Link>
      </BrowserRouter>
      </StateContext>
    </div>
  );
}

export default App;


