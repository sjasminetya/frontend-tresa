import Button from 'components/elements/Button';
import React from 'react';

const PageNotFound = () => {
  return (
    <div className='lazy-fallback d-flex flex-column justify-content-center align-items-center'>
      <h3>Oooopss... Something went wrong</h3>
      <span>The page you are looking for doesn't exist or an other occured.</span>
      <Button
        className="btn d-flex justify-content-center mt-3"
        type="link"
        isBlock
        isPrimary
        hasShadow
        href=""
      >Back to Home</Button>
    </div>
  )
}

export default PageNotFound
