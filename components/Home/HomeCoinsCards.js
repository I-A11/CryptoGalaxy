import { useState } from "react";
import CoinCard from "./CoinCard";
import useAxios from "@/hooks/useAxios";
import styles from "./HomeCoinsCards.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeCoinsCards = () => {
  const { response, loading } = useAxios(
    "coins/markets?vs_currency=aud&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
  );

  // Slick-Slider setting
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  if (loading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div className="section">
      <section className={styles.coinsContainer}>
        <h2>
          <span className="text-gradient">Cryptocurrency</span> Live Pricing
        </h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some look even slightly
          believable. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Saepe accusantium voluptatum inventore consequuntur nobis fugit sequi
          a quo atque, cum explicabo laborum minus omnis! Quisquam autem quo non
          dolor soluta.
        </p>
        <div className={styles.cardSlider}>
          <Slider {...settings}>
            {response.map((coin) => {
              const { id } = coin;
              return <CoinCard key={id} {...coin} />;
            })}
          </Slider>
        </div>
      </section>
      <div className="underline underline-center"></div>
    </div>
  );
};

export default HomeCoinsCards;
