import React from 'react';
import ArticleDetails from './articles/[id]';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Details = () => {
  return (
    <div>
      <div>
        <Header search={false} />
      </div>
      <ArticleDetails />
      <Footer />
    </div>
  );
};

export default Details;
