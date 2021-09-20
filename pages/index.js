import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('everything');
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('The New York Times');
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=${filter}&page=${pageNumber}&api-key=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
        );
        const news = await res.json();
        console.log(news.response.docs);
        setArticles(news.response.docs);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [query, filter, pageNumber]);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Head>
        <title>News Today</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header query={query} searchText={(text) => setQuery(text)} />

      <div className="-mb-50">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <section className="grid grid-cols-3 gap-10 px-5 pt-8 pb-12 lg:w-9/12 lg:mx-auto">
            {articles.map((article) => {
              const {
                abstract,
                headline: { main },
                byline: { original },
                lead_paragraph,
                news_desk,
                section_name,
                web_url,
                _id,
                word_count,
              } = article;
              return (
                <article className="bg-white py-5 px-4 rounded" key={_id}>
                  <h1 className="font-bold text-sm text-gray-900 mb-5 md:text-lg">
                    {main}
                  </h1>
                  <p className="overflow-ellipsis overflow-hidden">
                    {abstract}
                  </p>
                  <p>{/*lead_paragraph*/}</p>
                  <ul className="my-4">
                    <li className="mb-2 italic">{original}</li>
                    <li>
                      <span className="font-bold text-gray-900 text-sm">
                        News Desk:{' '}
                      </span>
                      {news_desk}
                    </li>
                    <li>
                      <span className="font-bold text-gray-900 text-sm">
                        Section Name:{' '}
                      </span>
                      {section_name}
                    </li>
                  </ul>
                  <Link href={`/articles/?id=${_id}`}>
                    <a>Read More</a>
                  </Link>
                </article>
              );
            })}
          </section>
        )}
      </div>

      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={10}
        onPageChange={changePage}
        containerClassName={'paginationBtns'}
        previousLinkClassName={'previousBtn'}
        nextLinkClassName={'nextBtn'}
        disabledClassName={'paginatioDisabled'}
        activeClassName={'paginationActive'}
      />

      <Footer />
    </div>
  );
}
