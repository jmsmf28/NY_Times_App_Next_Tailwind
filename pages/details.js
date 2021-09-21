import React from 'react';
import ArticleDetails from '../components/ArticleDetails';
import Header from '../components/Header';
import { ArticleProvider } from './articles/ArticleContext';

const Details = () => {
  return (
    <ArticleProvider>
      <div>
        <Header search={false} />
        Hi from details
      </div>
      <ArticleDetails />
    </ArticleProvider>
  );
};

export default Details;
