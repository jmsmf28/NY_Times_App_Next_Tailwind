import React from 'react';
import ArticleDetails from './articles/[id]';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ArticleProvider } from './articles/ArticleContext';

const Details = () => {
  return (
    <ArticleProvider>
      <div>
        <Header search={false} />
      </div>
      <ArticleDetails />
      <Footer />
    </ArticleProvider>
  );
};

export default Details;
