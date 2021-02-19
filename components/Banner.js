import React from "react";
import styled from "styled-components";
function Banner() {
  return (
    <BannerContainer>
      <div className="banner-text">
        <h1>Infrastructure Report</h1>
      </div>
      <div className="banner-image">
        <div className="triangle-1"></div>
        <div className="triangle-2"></div>
        <img src="/images/banner/banner-image.webp" alt="building" />
      </div>
    </BannerContainer>
  );
}

export default Banner;

const BannerContainer = styled.div`
  background: #163f67;
  color: white;
  display: flex;
  gap: 1rem;
  width: 100%;
  max-height: 300px;
  min-height: 300px;
  .banner-text {
    width: 30vw;
    display: flex;
    text-transform: uppercase;
    padding: 1rem 2rem;
    align-items: center;
    justify-content: center;
    h1 {
      text-decoration: underline;
      text-underline-offset: 5px;
    }
  }
  .banner-image {
    position: relative;
    margin-left: auto;
    width: 70vw;
    img {
      height: 100%;
      display: block;
      width: 100%;
      object-fit: cover;
    }
  }
  .triangle-1 {
    position: absolute;
    height: 300px;
    width: 300px;
    clip-path: polygon(0 0, 0% 100%, 35% 100%);
    background: #163f67;
    left: -1px;
  }
  .triangle-2 {
    position: absolute;
    clip-path: polygon(100% 0, 50% 0, 100% 100%);
    background: #50b2ae;
    right: 0;
    width: 300px;
    height: 300px;
  }
  @media only screen and (max-width: 1024px) {
    .banner-text {
      width: 50vw;
    }
    .banner-image {
      width: 50vw;
    }
  }
  @media only screen and (max-width: 540px) {
    .banner-text {
      width: 100vw;
    }
    .banner-image {
      width: 0;
    }
    .triangle-1,
    .triangle-2 {
      display: none;
    }
  }
`;
