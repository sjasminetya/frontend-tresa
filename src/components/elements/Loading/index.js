import React from 'react';

const Loading = () => {
  return (
    <div className='lazy-fallback d-flex justify-content-center align-items-center'>
      <div className="spinner-border text-center" style={{ width: "3rem", height: "3rem" }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loading;
