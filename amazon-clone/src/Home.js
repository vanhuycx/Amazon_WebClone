import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w1500._CB406837584_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="iPhone XR 128GB Yellow"
            price={649}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-yellow-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226036826"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="
            BH #BOHP700B • MFR #794297-0100
            700 reviews
            7 Questions, 12 Answers
            "
            price={379}
            image="https://static.bhphoto.com/images/images500x500/bose_794297_0100_headphones_700_noise_cancelling_1559119825_1475153.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="'24' SR24R Flat Monitor"
            price={135.5}
            image="https://image-us.samsung.com/SamsungUS/home/computing/monitors/flat-monitors/pd/ls24r350fhnxza_sr24r_flatmonitor/gallery/updated_101519/S24R350_001_Front_Black_Gallery001.jpg?$product-details-jpg$"
            rating={4}
          />
          <Product
            id="5"
            title="Magic Bullet Blender"
            price={49.99}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4428/4428200_rd.jpg;maxHeight=640;maxWidth=550"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="AUTOSEAL® Chill Stainless Steel Water Bottle"
            price={19.99}
            image="https://www.gocontigo.com/media/catalog/product/cache/19/image/425x/040ec09b1e35df139433887a97daa66f/7/1/71113_contigo_fit_20oz_dazzlingblue_4.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
