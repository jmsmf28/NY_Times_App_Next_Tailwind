import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { ArticleContext, ArticleProvider } from './ArticleContext';
import Link from 'next/link';

const ArticleDetails = () => {
  const [articles] = useContext(ArticleContext);
  console.log(articles);
  const router = useRouter();
  const { id } = router.query;

  const article = articles.find((article) => article._id === id);

  if (!article) {
    return (
      <div className="loading">
        <h1 className="capitalize">Loading...</h1>
      </div>
    );
  }

  return (
    <ArticleProvider>
      <div className="-mb-50 h-screen">
        <section className="flex px-5 pt-8 pb-12 lg:w-9/12 lg:mx-auto">
          <article className="bg-white py-5 px-4 rounded">
            <h1 className="font-bold text-sm text-gray-900 mb-5 md:text-lg">
              {article.headline.main}
            </h1>
            <p className="overflow-ellipsis overflow-hidden">
              {article.abstract}
            </p>
            <p>{article.lead_paragraph}</p>
            <ul className="my-4">
              <li className="mb-2 italic">{article.byline.original}</li>
              <li>
                <span className="font-bold text-gray-900 text-sm">
                  News Desk:{' '}
                </span>
                {article.news_desk}
              </li>
              <li>
                <span className="font-bold text-gray-900 text-sm">
                  Section Name:{' '}
                </span>
                {article.section_name}
              </li>
              <li>
                <span className="font-bold text-gray-900 text-sm">
                  Publish on :{' '}
                </span>
                {article.pub_date.slice(0, 10)}
              </li>
            </ul>
            <Link href={'/'}>
              <a className="text-purple-600">Go Back</a>
            </Link>
          </article>
        </section>
      </div>
    </ArticleProvider>
  );
};

export default ArticleDetails;
