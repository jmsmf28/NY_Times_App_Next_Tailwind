import Header from '../../components/Header';
import { useRouter } from 'next/router';

const article = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <div>
      <Header />
      Hi
    </div>
  );
};

export default article;
