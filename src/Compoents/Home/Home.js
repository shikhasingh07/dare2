import React from 'react';
import NavBar from '../NavBar/NavBar';
import "./home.css"
const Home = () => {
  return (
    <>
      <NavBar />
      <div>
        <div>
          <div className="bannerImage d-flex">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/6157007005aa1_listing_new_left_right.jpg?d=1920x1920" alt="home" width="1280" height="731" />

          </div>
          <div className="bannerImgItm d-flex">
            <img className="clock__" src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/d2c-registration-deadline-icon.svg" alt="clock" height="18" width="18" />
            <div className="d-block">
              <p className="m-0 p-0 mb-1"> Application Deadline: </p>
              <p className="m-0 p-0"> 18 Sep'21 08:00 AM IST </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
