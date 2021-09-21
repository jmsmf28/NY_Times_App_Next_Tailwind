import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { ArticleProvider } from './articles/ArticleContext';
import ListArticles from '../components/ListArticles';

export default function Home() {
  return (
    <ArticleProvider>
      <div>
        <Head>
          <title>News Today</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ListArticles />
        <Footer />
      </div>
    </ArticleProvider>
  );
}
