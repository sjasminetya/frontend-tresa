import React, { useEffect } from 'react';
import Title from 'components/elements/DetailPage/Title';
import Header from 'components/layouts/Header';
import Image from 'components/elements/DetailPage/Image';
import Description from 'components/elements/DetailPage/Description';
import InputBooking from 'components/elements/DetailPage/InputBooking';
import Testimony from 'components/elements/Testimony';
import Footer from 'components/layouts/Footer';
import { checkoutBooking } from '../../store/action/checkout';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchPage } from 'store/action/page';
import TreasureChoose from 'components/elements/DetailPage/TreasureChoose';
import Loading from 'components/elements/Loading';

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
    detail.finishFetch ? (
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
    ) : <Loading />
  )
};

export default DetailPage;
