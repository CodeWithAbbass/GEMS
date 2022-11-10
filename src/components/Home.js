import React from 'react';
import MainSlider from './MainSlider';
import '../Css/Home.css';
import Productitem from './Productitem';
import OverlayBgProduct from './OverlayBgProduct';
import MbSwiper from './MbSwiper';
import earbud1 from "../images/Air3-pro-556-556x.png";
import earbud2 from "../images/free2_classic.png";
import earbud3 from "../images/Earbud3.png";
import earbud4 from "../images/T3-400_400x.png";
import earbud5 from "../images/Earbud5.png";
import earbud6 from "../images/Earbud6.png";
import earbud7 from "../images/Earbud7.png";
import HeadPhone from "../images/HeadPhone.png";
import MBearbud5 from "../images/MBEarbud5.png";
import MBearbud6 from "../images/MBEarbud6.png";
import MBearbud7 from "../images/MBEarbud7.png";
import MBHeadPhone from "../images/MBHeadPhone.png";
import FeatureReviewSlider from './FeatureReviewSlider';
import MBFeatureReviewSlider from './MBFeatureReviewSlider';
import SliderUnboxing from './SliderUnboxing';
const Home = (props) => {
  window.onscroll = ()=>{
    props.myFunc();
  }
  return (
    <>
      <div className='home'>
        <MainSlider />
        <a href="#home__container  " className="btn scrollDown bg-white border-5 border-white"><i className="fa fa-angle-down" /></a>
        <div id="home__container">
        <div className="MbSwiper"><MbSwiper/></div>
        <div className="desktop_Products px-4">
          <Productitem
            id={44644454}
            title={"Best AirPods Alternative"}
            subtitle={"Air3 Pro"}
            ProductImage={earbud1}
            btntxt={"DISCOVER"}
          />
          <Productitem
            id={44644444}
            title={"STYLISH ALL-DAY COMPANION"}
            subtitle={"Free2 classic"}
            ProductImage={earbud2}
            btntxt={"DISCOVER"}
          />
          <div className="d-flex flex-wrap justify-content-between align-item-center mt-4">
            <div className="twoProduct">
              <Productitem
                id={65613134}
                title={"NEXT LEVEL ANC EXPERIENCE"}
                subtitle={"Mini Pro"}
                ProductImage={earbud3}
                btntxt={"DISCOVER"}
              />
            </div>
            <div className="twoProduct">
              <Productitem
                id={44644444}
                title={"BEST BUDGET ANC"}
                subtitle={"T3"}
                ProductImage={earbud4}
                btntxt={"DISCOVER"}
              />
            </div>
          </div>
          </div>
          <div className="peopleLoved mt-4 pb-0 px-4">
            <a href="https://us.soundpeats.com/collections/all-products">
              <video autoPlay={true} muted={true} loop={true}>
                <source src="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/soundpeats_H1.mp4?v=1632388357" type='video/mp4' />
              </video>
            </a>
            <h2 className='background_media_text m-0'>
              <a href="https://us.soundpeats.com/collections/all-products" className=''>
                INCREDIBLE SOUND <br /> LOVED BY OVER 20 MILLION PEOPLE
              </a>
            </h2>
          </div>
          <h2 className="overlayBgProductTitle mb-3">SHOP BY CATEGORY</h2>
          <div className="d-flex flex-wrap justify-content-between overlayBgProduct mb-4 px-4" style={{marginTop:"-2rem"}}>
            <div className="twoOverlayProduct mt-2">
              <OverlayBgProduct 
              id={4561378}
              title={"TRUE WIRELESS"}
              AnotherProductImg={earbud5}
              MBAnotherProductImg={MBearbud5}
              btntxt={"MORE"}
            /></div>
            <div className="twoOverlayProduct mt-2">
              <OverlayBgProduct 
              id={4561378}
              title={"AUDIOPHILE"}
              AnotherProductImg={earbud6}
              MBAnotherProductImg={MBearbud6}
              btntxt={"MORE"}
            /></div>
          </div>
          <div className="d-flex flex-wrap justify-content-between overlayBgProduct px-4">
            <div className="twoOverlayProduct mt-2">
              <OverlayBgProduct 
              id={4561377}
              title={"NOISE CANCELLING"}
              AnotherProductImg={earbud7}
              MBAnotherProductImg={MBearbud7}
              btntxt={"MORE"}
            /></div>
            <div className="twoOverlayProduct mt-2">
              <OverlayBgProduct 
              id={456136}
              title={"OTHERS"}
              AnotherProductImg={HeadPhone}
              MBAnotherProductImg={MBHeadPhone}
              btntxt={"MORE"}
            /></div>
          </div>
          <div className="FeatureReviewSlider"><FeatureReviewSlider/></div>
          <div className="MBFeatureReviewSlider"><MBFeatureReviewSlider/></div>
          <div className="SliderUnboxing"><SliderUnboxing/></div>
        </div>
      </div>
    </>
  );
}

export default Home;
