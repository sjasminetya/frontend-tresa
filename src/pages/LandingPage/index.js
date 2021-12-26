import React, { useEffect, useRef } from 'react';
import Header from 'components/layouts/Header';
import Hero from 'components/layouts/Hero';
import MostPicked from 'components/elements/LandingPage/MostPicked';
import Categories from 'components/elements/Categories';
import Testimony from 'components/elements/Testimony';
import Footer from 'components/layouts/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPage } from 'store/action/page';
import Loading from 'components/elements/Loading';

const LandingPage = (props) => {
  const refMostPicked = useRef();
  const dispatch = useDispatch();
  const { landingPage } = useSelector(state => state.page);

  useEffect(() => {
    dispatch(fetchPage("/landing-page", 'landingPage'))
  }, [dispatch]);

  return (
    landingPage.finishFetch ? (
      <>
        <Header {...props} />
        <Hero refMostPicked={refMostPicked} data={landingPage.hero} />
        <MostPicked refMostPicked={refMostPicked} data={landingPage.mostPicked} />
        <Categories data={landingPage.category} />
        <Testimony data={landingPage.testimonial} />
        <Footer />
      </>
    ) : (
      <Loading />
    )
  )
};

export default LandingPage;
