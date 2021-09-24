import React, { useState } from 'react';
import { SearchIcon, MenuIcon } from '@heroicons/react/solid';
import NextLink from 'next/link';

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
        <div className="ml-24 mx-auto">
          {search ? (
            <div className="flex border-2  shadow-sm md:flex items-center rounded-full md:shadow-sm ">
              <input
                value={searchInput}
                className="md:flex-grow pl-2 md:pl-5 
                bg-transparent outline-none text-xs md:text-sm 
                text-gray-900 placeholder-gray-600"
                type="text"
                placeholder="e.g science"
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <SearchIcon
                className="inline-flex h-6 md:h-8 bg-purple-600 text-white rounded-full p-2 cursor-pointer -mx-2 md:-mx-3 hover:bg-purple-400
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
      </div>
    </>
  );
};

export default Header;
