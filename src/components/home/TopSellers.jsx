import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "../UI/Skeleton"
import axios from "axios";

const TopSellers = () => {
  const [topSellers, setTopSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTopSellers() {
      const { data } = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers");
      setTopSellers(data);
      setLoading(false);
    }
    getTopSellers();
  })


  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {loading ? (new Array(12).fill(0).map((_, index) => (
                <li key={index}>
                  <div className="author_list_pp">
                    <Link to="/author">
                      <Skeleton width= "50px" height= "50px" borderRadius= "50%" />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="author_list_info">
                    <Link to="/author"><Skeleton width= "100px" height= "20px" /></Link>
                    <span><Skeleton width= "40px" height= "20px" /></span>
                  </div>
                </li>
              ))) : (
                topSellers.map((item, index) => (
                  <li key={index}>
                    <div className="author_list_pp">
                      <Link to={`/author/${item.authorId}`}>
                        <img
                          className="lazy pp-author"
                          src={item.authorImage}
                          alt=""
                        />
                        <i className="fa fa-check"></i>
                      </Link>
                    </div>
                    <div className="author_list_info">
                      <Link to={`/author/${item.authorId}`}>{item.authorName}</Link>
                      <span>{item.price} ETH</span>
                    </div>
                  </li>
              )))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
