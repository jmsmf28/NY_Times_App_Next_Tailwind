import React, { useState, useEffect, createContext } from 'react';
import Details from '../details';

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  // Initialize state
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('everything');
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('The New York Times');
  const [pageNumber, setPageNumber] = useState(0);

  const axios = require('axios');

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('new');
        const res = await axios.get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=${filter}&page=${pageNumber}&api-key=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
        );

        const news = res.data.response.docs;
        setArticles(news);
        console.log('Articles=', articles);
        setIsLoading(false);

        console.log(res.data.response.docs);
        console.log('updated');
        console.log(articles);
        console.log(filter);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [query, filter, pageNumber]);

  return (
    <ArticleContext.Provider
      value={[
        articles,
        setArticles,
        isLoading,
        setIsLoading,
        pageNumber,
        setPageNumber,
        query,
        setQuery,
        filter,
        setFilter,
      ]}
    >
      {children}
      <Details />
    </ArticleContext.Provider>
  );
};
