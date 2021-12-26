/* eslint-disable import/no-anonymous-default-export */
import Loading from 'components/elements/Loading';
import React, { lazy, Suspense } from 'react';

const Suspend = (Element) => function suspense(props) {
  return (
    <Suspense fallback={<Loading />}>
      <Element {...props} />
    </Suspense>
  )
};

export default {
  Checkout: Suspend(lazy(() => import('./Checkout'))),
  DetailPage: Suspend(lazy(() => import('./DetailPage'))),
  LandingPage: Suspend(lazy(() => import('./LandingPage'))),
  PageNotFound: Suspend(lazy(() => import('./PageNotFound'))),
}
