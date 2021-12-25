import React, { useEffect, useRef } from 'react';
import Header from 'elements/Header';
import Hero from 'elements/Hero';
import MostPicked from 'elements/MostPicked';
import Categories from 'elements/Categories';
import Testimony from 'elements/Testimony';
import Footer from 'elements/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPage } from 'store/action/page';

const LandingPage = (props) => {
  const refMostPicked = useRef();
  const dispatch = useDispatch();
  const { landingPage } = useSelector(state => state.page);

  useEffect(() => {
    dispatch(fetchPage("/landing-page", 'landingPage'))
  }, [dispatch]);

  return (
    <>
      <Header {...props} />
      <Hero refMostPicked={refMostPicked} data={landingPage.hero} />
      <MostPicked refMostPicked={refMostPicked} data={landingPage.mostPicked} />
      <Categories data={landingPage.category} />
      <Testimony data={landingPage.testimonial} />
      <Footer />
    </>
  )
};

export default LandingPage;
