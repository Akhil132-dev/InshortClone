import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Navbar from './Components/Navbar';
import NewsContent from './Components/NewsContent/NewsContent.js';
import { setstate } from "./contextapi";
import api from './api.js'
import Footer from './Components/Footer/Footer';

function App() {
  const [category, setcategory] = useState("general");
  const [news, setnews] = useState([]);
  const [newResult, setnewResult] = useState();
  const [loadmore, setloadmore] = useState(20);
  const newsApi = async () => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";

    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${api}&pageSize=${loadmore}`)
      setnews(news.data.articles);
      setnewResult(news.data.totalResults);

    }
    catch (error) {
      console.log(error);
    }
  }

  //calling newsApi
  useEffect(() => {
    document.title = category
    // eslint-disable-next-line
    newsApi();
    // eslint-disable-next-line
  }, [newResult, category, loadmore])

  return (<div className="app">
    <setstate.Provider value={{ setcategory, news, newResult, setloadmore, loadmore }}>
      <Navbar />
      <NewsContent />
      <Footer />
    </setstate.Provider>

  </div>


  );
}

export default App;
