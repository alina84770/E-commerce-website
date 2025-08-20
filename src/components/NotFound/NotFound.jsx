import React from 'react';
import "./NotFound.css";
import { useRouteError } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function NotFound() {
  const error = useRouteError();
  let navigate = useNavigate();
  console.log(error)
  return (
    <div className='invalid-page'>
      <h2>{error.status} Error</h2>
      <p>{error.data}</p>
      <button className='go-back-btn' onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default NotFound;
