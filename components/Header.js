import React, { useState } from 'react';
import { SearchIcon, MenuIcon } from '@heroicons/react/solid';
import NextLink from 'next/link';
import { ArticleContext } from '../pages/articles/ArticleContext';

const Header = ({ search, query, searchText }) => {
  const [searchInput, setSearchInput] = useState('');

  const searchNews = () => {
    searchText(searchInput);
  };

  return (
    <>
      <div className="navbar sticky top-0 z-50 grid grid-cols-3 items-center">
        <NextLink href="/" passHref className="cursor-pointer">
          <a className="text_shadow font-bold text-2xl md:text-5xl ml-10 ">
            News Today
          </a>
        </NextLink>
        <div className="mx-auto">
          {search ? (
            <div className="hidden md:flex items-center md:border-2 rounded-full md:shadow-sm ">
              <input
                value={searchInput}
                className="flex-grow pl-5 
                bg-transparent outline-none text-sm 
                text-gray-900 placeholder-gray-600"
                type="text"
                placeholder="e.g science"
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <SearchIcon
                className="hidden md:inline-flex h-8 bg-purple-600 text-white rounded-full p-2 cursor-pointer md:-mx-3 hover:bg-purple-400
              transform transition duration-200 ease-out"
                onClick={searchNews}
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="hidden md:flex justify-end mr-10">
          <button
            className="bg-purple-600 rounded-full py-1 px-4 font-bold text-white text-base hover:bg-purple-400 hover:scale-105
          transform transition duration-200 ease-out"
          >
            Subscribe
          </button>
        </div>
        <div className="flex justify-end mr-10 md:hidden">
          <MenuIcon
            className="rounded-full py-1 px-2 w-10 cursor-pointer hover:bg-purple-400 hover:scale-105
          transform transition duration-200 ease-out"
          />
        </div>
      </div>
      <div className="query bg-gray-600 px-5 shadow-md">
        <span className="text-white ">{query}</span>
      </div>
    </>
  );
};

export default Header;
