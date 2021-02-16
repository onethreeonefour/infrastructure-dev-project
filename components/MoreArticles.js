import React from "react";
import { useState } from "react";
import styled from "styled-components";

function MoreArticles() {
  const currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  const [Articles, setArticles] = useState([
    {
      id: 4,
      title: "Auckland City Hospital project commences",
      src: "/images/more-articles/1.png",
      readtime: 2,
      date: currentDate,
    },
    {
      id: 5,
      title: "Procurement for Coomera Connector Stage One begins ",
      src: "/images/more-articles/2.png",
      readtime: 2,
      date: currentDate,
    },
    {
      id: 6,
      title: "NSW Government releases plan for supporting the transition to renewables",
      src: "/images/more-articles/3.png",
      readtime: 2,
      date: currentDate,
    },
    {
      id: 7,
      title: "Infrastructure Victoria releases updated infrastructure strategy",
      src: "/images/more-articles/4.png",
      readtime: 2,
      date: currentDate,
    },
    {
      id: 8,
      title: "Procurement commences for Greater Sydney Bus Region Nine",
      src: "/images/more-articles/5.png",
      readtime: 2,
      date: currentDate,
    },
    {
      id: 9,
      title: "2020-2021 West Australian Budget",
      src: "/images/more-articles/6.png",
      readtime: 2,
      date: currentDate,
    },
  ]);
  return (
    <MoreArticlesContainer>
      <h1>More Articles</h1>
      <div className="articles-container">
        {Articles.map((item, index) => {
          return (
            <div key={index} className="article-card">
              <div>
                <img src={item.src} alt="article" />
              </div>
              <div className="article-card-inner-info">
                <div>
                  <h3>{item.title}</h3>
                </div>
                <div>
                  <span>
                    <img src="/images/articles/clock.svg" alt="clock" />
                    {item.readtime} Min Read
                  </span>
                  <span>
                    <img src="/images/articles/calendar.svg" alt="calendar" />
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </MoreArticlesContainer>
  );
}

const MoreArticlesContainer = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  flex-direction: column;
  padding-bottom: 2rem;
  h1 {
    color: #163f67;
    span {
      font-weight: 100;
    }
  }
  .articles-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .article-card {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.05);
    border-top: 3px solid rgba(22, 63, 103, 1);

    h3 {
      cursor: pointer;
    }
    img {
      border-radius: 0.2rem;
    }
    .article-card-inner-info {
      display: flex;
      flex-direction: column;
    }
    span {
      align-items: center;
      color: #51b4b2;
      font-weight: 100;
      margin-right: 1rem;
      font-size: 0.9rem;
      img {
        width: 12.5px;
        height: 12.5px;
        margin-right: 0.5rem;
      }
    }
  }
  .article-card-inner-info h3:hover {
    color: #2b8cec;
  }
  @media only screen and (max-width: 3840px) {
    width: 50%;
  }
  @media only screen and (max-width: 2560px) {
    width: 60%;
  }
  @media only screen and (max-width: 1920px) {
    width: 80%;
  }

  @media only screen and (max-width: 768px) {
    .articles-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`;

export default MoreArticles;
