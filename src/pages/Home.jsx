import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";

import Helmet from "../components/helmet/Helmet";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";
import Clock from "../components/UI/Clock";

import "../styles/Home.css";
import heroImg from "../assets/images/hero-img.png";
import counterImg from "../assets/images/counter-timer-img.png"

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts,  setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);

  const year = new Date().getFullYear();

  useState(() => {
    const filteredTrendingProducts = products.filter(item => item.category === "chair");
    
    const filteredBestSalesProducts = products.filter(item => item.category === "sofa");

    const filteredMobileProducts = products.filter(item => item.category === "mobile");

    const filteredWirelessProducts = products.filter(item => item.category === "wireless");
    
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
  },[]);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="5" md="5">
              <div className="hero__content">
                <p className="hero__subtitle">Trending Products in {year} </p>
                <h2>Make Your Interior More Minimalist & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  voluptates quo quibusdam perferendis quidem nam ratione nemo
                  sint vel iste.
                </p>
                <motion.button whileTap={{scale: 1.2}} className="shop__btn"><Link to="/shop">SHOP NOW</Link></motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="decoration img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts}/>
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
        <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts}/>
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock__top-content">
                <h4 ClassName="fs-6 mb-2">Limited Offers</h4>
                <h3 ClassName="fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button whileTap={{scale: 1.1}} className="shop__btn store__btn">
                <Link to="/Shop">Visit Store</Link>
                </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end">
            <img src={counterImg} alt="CounterImg" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
          <Col lg="12" className="text-center">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts}/>
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
