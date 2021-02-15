import Head from "next/head";
import styled from "styled-components";
import Banner from "../components/Banner";
import MoreArticles from "../components/MoreArticles";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Home() {
  const currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

  const classes = useStyles();
  const [Articles, setArticles] = useState([
    {
      title: "SA Government calls for Electric Vehicle road user charge in 2020-21 Budget",
      date: currentDate,
      tag: ["economy", "budgets"],
      readtime: 2,
      src: "images/articles/1.webp",
    },
    {
      title: "Tasmanian and NT Governments hand down 2020-21 Budgets",
      date: currentDate,
      tag: ["water"],
      readtime: 2,
      src: "images/articles/2.webp",
    },
    {
      title: "Victorian Government alters procurement approach for North East Link",
      date: currentDate,
      tag: ["tax", "budgets"],
      readtime: 2,
      src: "images/articles/3.webp",
    },
    {
      title: "ARTC progresses two major Inland Rail works packages",
      date: currentDate,
      tag: ["economy"],
      readtime: 2,
      src: "images/articles/4.webp",
    },
  ]);
  return (
    <div>
      <Head>
        <title>Infrastructure Partnerships Australia</title>
        <meta name="keywords" content="australia, energy, shaping future, thinktank "></meta>
      </Head>
      <Banner />
      <Search>
        <div className="search-input-container">
          <input type="text" placeholder="Search Articles" size="45" />
          <button>
            <img src="images/banner/search.png" alt="search-button" />
          </button>
        </div>
        <div className="filter-container">
          <p>Sort By</p>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select labelId="demo-simple-select-label" value={"Sydney"}>
              <MenuItem value={"Sydney"}>Sydney</MenuItem>
              <MenuItem value={"Melbourne"}>Melbourne</MenuItem>
              <MenuItem value={"Adelaide"}>Adelaide</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Subject</InputLabel>
            <Select labelId="demo-simple-select-label" value={"Transport"}>
              <MenuItem value={"Transport"}>Transport</MenuItem>
              <MenuItem value={"Energy"}>Energy</MenuItem>
              <MenuItem value={"Recycling"}>Recycling</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Issue Month</InputLabel>
            <Select labelId="demo-simple-select-label" value={"January"}>
              <MenuItem value={"January"}>January</MenuItem>
              <MenuItem value={"February"}>February</MenuItem>
              <MenuItem value={"March"}>March</MenuItem>
              <MenuItem value={"April"}>April</MenuItem>
              <MenuItem value={"June"}>June</MenuItem>
              <MenuItem value={"July"}>July</MenuItem>
              <MenuItem value={"August"}>August</MenuItem>
              <MenuItem value={"September"}>September</MenuItem>
              <MenuItem value={"October"}>October</MenuItem>
              <MenuItem value={"November"}>November</MenuItem>
              <MenuItem value={"December"}>December</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Search>
      <FilteredArticles>
        <h1>
          Latest Edition <span>{currentDate}</span>
        </h1>

        {Articles.map((item, index) => {
          return (
            <div key={index} className="article-card">
              <div className="card-image">
                <img src={item.src} alt="" />
              </div>
              <div>
                <div className="article-details-container">
                  <span>
                    <img src="images/articles/clock.svg" alt="clock" />
                    {item.readtime} Min Read
                  </span>
                  <span>
                    <img src="images/articles/calendar.svg" alt="calendar" />
                    {item.date}
                  </span>
                  <span className="article-detail-tags">
                    {item.tag.map((tag, index) => {
                      return (
                        <span key={index} className="inner-tag">
                          {tag}
                        </span>
                      );
                    })}
                  </span>
                </div>
                <h2 className="article-title">{item.title}</h2>
              </div>
            </div>
          );
        })}
      </FilteredArticles>
      <MoreArticles />
    </div>
  );
}

const FilteredArticles = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  flex-direction: column;
  gap: 1rem;
  h1 {
    color: #163f67;
    span {
      font-weight: 100;
    }
  }
  .article-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    gap: 2rem;
    padding: 2rem 0;
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  .article-details-container {
    display: flex;
    gap: 1rem;
    span {
      display: flex;
      align-items: center;
      color: #51b4b2;
      font-weight: 500;
    }
    img {
      height: 30px;
      width: 30px;
      margin-right: 0.5rem;
    }
  }
  .article-title {
    width: 60%;
  }
  .article-detail-tags {
    margin-left: auto;
    text-transform: uppercase;
  }
  .inner-tag {
    border: 1px solid #51b4b2;
    margin: 0 5px;
    padding: 0.25rem 1rem;
  }
`;

const Search = styled.div`
  background: #f3f3f3;
  display: flex;
  align-items: center;
  width: 80%;
  margin: 2rem auto;
  padding: 2rem;
  .search-input-container {
    display: flex;
    gap: 0.5rem;
    input {
      padding: 0.5rem;
      border-radius: 0.5rem;
    }
    button {
      background: #163f67;
      border-radius: 0.5rem;
      padding: 0.5rem;
      outline-color: #163f67;
      border-color: #163f67;
    }
  }
  .filter-container {
    margin-left: auto;
    display: flex;
    gap: 1.75rem;
    align-items: center;
    color: #163f67;
  }
`;
