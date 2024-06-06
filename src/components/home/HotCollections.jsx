import React, { useEffect } from "react";
import HotPosts from "../UI/HotPosts";
import AOS from "aos";
import "aos/dist/aos.css";

const HotCollections = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="section-collections" className="no-bottom">
      <div data-aos="fade">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>Hot Collections</h2>
                <div className="small-border bg-color-2"></div>
              </div>
            </div>
            <HotPosts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
