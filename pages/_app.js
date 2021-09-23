import 'tailwindcss/tailwind.css';
import './index.css';
import { ArticleProvider } from './articles/ArticleContext';

function MyApp({ Component, pageProps }) {
  return (
    <ArticleProvider>
      <Component {...pageProps} />
    </ArticleProvider>
  );
}

export default MyApp;
