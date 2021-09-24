import React, { useContext } from 'react';
import Link from 'next/link';
import { ArticleContext } from '../pages/articles/ArticleContext';
import ReactPaginate from 'react-paginate';
import Header from '../components/Header';

const ListArticles = () => {
  const [
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
  ] = useContext(ArticleContext);

  const filterNewsDesk = [
    'World',
    'U.S.',
    'Politics',
    'N.Y.',
    'Business',
    'Opinion',
    'Tech',
    'Science',
    'Health',
    'Sports',
    'Arts',
    'Books',
    'Style',
    'Food',
    'Travel',
    'Magazine',
    'T Magazine',
    'Real Estate',
  ];

  const changeArticles = () => {
    setArticles(articles);
  };

  const changeFilter = (event) => {
    setFilter(event.target.value);
  };

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
      <div className="query bg-gray-600 px-2 md:px-5 shadow-md">
        <div className="flex">
          {filterNewsDesk.map((val, key) => {
            return (
              <button
                className="ml-2 md:ml-4 text-white text-xs md:text-sm hover:scale-105 cursor-pointer"
                value={val}
                key={key}
                onClick={changeFilter}
              >
                {val}
              </button>
            );
          })}
        </div>
      </div>
      <div className="-mb-50">
        {isLoading ? (
          <div className="loading">
            <h1>Loading...</h1>
          </div>
        ) : (
          <section className="grid grid-cols-2 md:grid-cols-3 gap-10 px-5 pt-8 pb-12 lg:w-9/12 lg:mx-auto">
            {articles.map((article) => {
              const {
                abstract,
                headline: { main },
                byline: { original },
                news_desk,
                section_name,
                _id,
              } = article;
              return (
                <article className="bg-white py-5 px-4 rounded" key={_id}>
                  <h1 className="font-bold text-sm text-gray-900 mb-5 md:text-lg">
                    {main}
                  </h1>
                  <p className="overflow-ellipsis overflow-hidden">
                    {abstract}
                  </p>
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
                  <Link href={`/details/?id=${_id}`}>
                    <a
                      onClick={changeArticles}
                      className="text-purple-600 hover:bg-gray-100 hover:text-lg
                    hover:rounded transform transition duration-200 ease-out"
                    >
                      Read More
                    </a>
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
