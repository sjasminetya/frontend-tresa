import React, { useEffect } from 'react';
import Title from 'elements/DetailPage/Title';
import Header from 'elements/Header';
import Image from 'elements/DetailPage/Image';
import Description from '../elements/DetailPage/Description';
import InputBooking from 'elements/DetailPage/InputBooking';
import Testimony from 'elements/Testimony';
import Footer from 'elements/Footer';
import { checkoutBooking } from '../store/action/checkout';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchPage } from 'store/action/page';
import TreasureChoose from 'elements/DetailPage/TreasureChoose';

const DetailPage = (props) => {
  const { detail } = useSelector(state => state.page);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    window.Title = "Tresa | Details Page"
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    dispatch(fetchPage(`detail-page/${id}`, 'detail'))
  }, [dispatch, id]);

  return (
    <>
      <Header {...props} />
      <Title data={detail} />
      <Image image={detail.imageId} />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <Description data={detail} />
          </div>
          <div className="col-5">
            <InputBooking data={detail} startBooking={checkoutBooking} />
          </div>
        </div>
      </div>
      <TreasureChoose data={detail.activityId} />
      <Testimony data={detail.testimonial} />
      <Footer />
    </>
  )
};

export default DetailPage;
