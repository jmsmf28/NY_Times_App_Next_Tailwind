import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { ArticleContext } from '../pages/articles/ArticleContext';
import ReactPaginate from 'react-paginate';
import Header from '../components/Header';

const ListArticles = () => {
  const [
    articles,
    setArticles,
    isLoading,
    setLoading,
    pageNumber,
    setPageNumber,
    query,
    setQuery,
  ] = useContext(ArticleContext);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header
        search={true}
        query={query}
        searchText={(text) => setQuery(text)}
      />
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
                  <Link href={`/details/?id=${article}`}>
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
    </>
  );
};

export default ListArticles;
