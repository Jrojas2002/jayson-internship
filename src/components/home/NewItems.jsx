import React, { useEffect } from "react";
import Post from "../UI/Post";
import AOS from "aos";
import "aos/dist/aos.css";

const NewItems = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="section-items" className="no-bottom">
      <div data-aos="fade">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <Post />
        </div>
      </div>
      </div>
    </section>
  );
};

export default NewItems;
