import React, { useState, useEffect, createContext } from 'react';

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  // Initialize state
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('everything');
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('The New York Times');
  const [pageNumber, setPageNumber] = useState(0);
  const [errorMessages, setErrorMessages] = useState('');

  const axios = require('axios');

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=${filter}&page=${pageNumber}&api-key=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
        );
        const news = res.data.response.docs;
        setArticles(news);
        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
        setErrorMessages(error.message);
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
    </ArticleContext.Provider>
  );
};
