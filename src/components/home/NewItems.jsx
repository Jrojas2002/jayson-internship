import React from "react";
import Post from "../UI/Post";

const NewItems = () => {

  return (
    <section id="section-items" className="no-bottom">
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
    </section>
  );
};

export default NewItems;
