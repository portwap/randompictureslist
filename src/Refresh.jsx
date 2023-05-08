import Title from './Title';
import { useGlobalContext } from './context';

const Refresh = () => {
  const { fetchData, url } = useGlobalContext();
  
  return (
    <>
      <Title title='no pictures left' />
      <button className='btn' onClick={() => fetchData(url)}>
        refresh
      </button>
    </>
  );
};

export default Refresh;
