import React, { useEffect } from "react";
import BrowseByCategory from "../components/home/BrowseByCategory";
import HotCollections from "../components/home/HotCollections";
import Landing from "../components/home/Landing";
import LandingIntro from "../components/home/LandingIntro";
import NewItems from "../components/home/NewItems";
import TopSellers from "../components/home/TopSellers";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <Landing />
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <LandingIntro />
        </div>
        <div data-aos="fade">
          <HotCollections />
        </div>
        <div data-aos="fade">
          <NewItems />
        </div>
        <div data-aos="fade">
          <TopSellers />
        </div>
        <div data-aos="fade-right">
          <BrowseByCategory />
        </div>
      </div>
    </div>
  );
};

export default Home;
