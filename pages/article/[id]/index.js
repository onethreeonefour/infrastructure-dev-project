import Head from "next/head";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

//components
import Banner from "../../../components/Banner";
import MoreArticles from "../../../components/MoreArticles";

import { useRouter } from "next/router";

function article() {
  const currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  const router = useRouter();
  const { id } = router.query;
  //get article
  useEffect(() => {
    const { id } = router.query;
    for (let i in Articles) {
      if (Articles[i].id.toString() === id) {
        //console.log(Articles[i].title);
        setArticle(Articles[i]);
      }
    }
  }, [id]);

  const [Article, setArticle] = useState();
  const [Articles, setArticles] = useState([
    {
      id: 0,
      title: "SA Government calls for Electric Vehicle road user charge in 2020-21 Budget",
      date: currentDate,
      tag: ["economy", "budgets"],
      readtime: 2,
      src: "/images/articles/1.webp",
    },
    {
      id: 1,
      title: "Tasmanian and NT Governments hand down 2020-21 Budgets",
      date: currentDate,
      tag: ["water"],
      readtime: 2,
      src: "/images/articles/2.webp",
    },
    {
      id: 2,
      title: "Victorian Government alters procurement approach for North East Link",
      date: currentDate,
      tag: ["tax", "budgets"],
      readtime: 2,
      src: "/images/articles/3.webp",
    },
    {
      id: 3,
      title: "ARTC progresses two major Inland Rail works packages",
      date: currentDate,
      tag: ["economy"],
      readtime: 2,
      src: "/images/articles/4.webp",
    },
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
    <div>
      <Head>
        <title>{Article ? Article.title : "Infrastructure Partnerships Australia"}</title>
        <meta name="keywords" content="australia, energy, shaping future, thinktank "></meta>
      </Head>
      <Banner />
      <ArticleContainer>
        <Link href={`/`}>
          <h3 className="link uppercase">&#x3c; All Articles</h3>
        </Link>
        {Article ? (
          <div className="article-info">
            <div>
              <img src={Article.src} alt="" />
            </div>
            <div>
              <span className="article-detail-tags">
                {Article.tag.map((tag, index) => {
                  return (
                    <span key={index} className="inner-tag">
                      {tag}
                    </span>
                  );
                })}
              </span>
              <div className="article-details">
                <div>
                  <img src="/images/articles/clock.svg" alt="clock" />
                  {Article.readtime} Min Read
                </div>
                <div>
                  <img src="/images/articles/calendar.svg" alt="calendar" />
                  {Article.date}
                </div>
              </div>
              <h1>{Article.title}</h1>
            </div>
            <div className="article-body">
              <p>
                On Tuesday, the South Australian Treasurer Rob Lucas handed down his government’s 2020-21 Budget. This
                outlines the state’s economic recovery strategy from COVID-19, of which infrastructure forms a major
                component. The Budget allocates approximately $13.5 billion in general government expenditure to
                infrastructure over the next four years, an increase of around $3.7 billion or 38 per cent compared to
                the previous Budget. Reflecting the hit to the SA economy due to COVID-19 and the government’s fiscal
                stimulus, the Budget has recorded a $1.5 billion deficit for FY2019-20 and projects a deficit of $2.6
                billion for FY2020-21. The Budget is expected to return to surplus by FY2023-24. <br />
                <br />
                In a major step, the SA Budget included a commitment to introduce a road user charge for Electric
                Vehicles (EVs). The government plans to put in place a distance-based charge on Plug-in Electric and
                Zero Emissions Vehicles as part of its Electric Vehicle Action Plan, with the new regime set to come
                into effect on 1 July 2021, subject to the completion of ‘required system administration charges’ and
                the passage of legislation through Parliament.
                <br />
                <br />
                Infrastructure Partnerships Australia has been a consistent voice for road reform for over a decade,
                with our most recent work on the subject providing the catalyst for this change. Infrastructure
                Partnerships Australia commends the SA Government on this commitment, and we will continue to work with
                governments across the country to progress this important reform.
              </p>
            </div>
          </div>
        ) : (
          <span></span>
        )}
      </ArticleContainer>
      <ArticleActionContainer>
        {Article ? (
          <>
            <Link href={`/article/${Math.floor(Math.random() * 4)}`}>
              <h5 className="link uppercase">&#x2190; Previous</h5>
            </Link>
            <Link href={`/article/${Math.floor(Math.random() * 4)}`}>
              <h5 className="link uppercase">Next &#x2192;</h5>
            </Link>
          </>
        ) : (
          <span></span>
        )}
      </ArticleActionContainer>
      <MoreArticles />
    </div>
  );
}

const ArticleActionContainer = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  h5 {
    cursor: pointer;
  }
  h5:nth-child(2) {
    margin-left: auto;
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
  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`;

const ArticleContainer = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .article-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    img {
      width: 100%;
      border-radius: 0.5rem;
    }
  }
  .article-details {
    padding: 1rem 0;
    display: flex;
    gap: 1rem;
    color: #51b4b2;
    align-items: center;

    div {
      display: flex;
      align-items: center;
    }
    img {
      height: 25px;
      width: 25px;
      margin-right: 0.5rem;
    }
  }
  .article-info:nth-child(2) {
    align-items: center;
  }
  .inner-tag {
    border: 1px solid #51b4b2;
    margin: 0 5px;
    padding: 0.25rem 1rem;
    color: #51b4b2;
  }
  .article-body {
    grid-column: 1/3;
    p {
      line-height: 1.75rem;
    }
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
  @media only screen and (max-width: 500px) {
    width: 90%;
    .article-info {
      display: block;
      width: 100%;
      img {
        margin-bottom: 1rem;
        width: 100%;
      }
    }
  }
`;
export default article;
