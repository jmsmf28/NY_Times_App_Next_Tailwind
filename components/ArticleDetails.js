import React, { useContext } from 'react';
import { ArticleContext } from '../pages/articles/ArticleContext';

const ArticleDetails = () => {
  const [articles, setArticles] = useContext(ArticleContext);
  console.log(articles);
  return <div></div>;
};

export default ArticleDetails;
