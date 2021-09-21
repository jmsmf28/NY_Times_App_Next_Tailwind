import React, { useContext, useState, useEffect, createContext } from 'react';

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  // Initialize state
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('everything');
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('The New York Times');
  const [pageNumber, setPageNumber] = useState(0);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=${filter}&page=${pageNumber}&api-key=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
        );
        const news = await res.json();
        // console.log(news.response.docs);
        setArticles(news.response.docs);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
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
