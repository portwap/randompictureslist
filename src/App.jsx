import Copyright from './Copyright';
import { useGlobalContext } from './context';
import PicLimitForm from './PicLimitForm';
import Loading from './Loading';
import Error from './Error';
import Title from './Title';
import Pictures from './Pictures';
import Modal from './Modal';
import Refresh from './Refresh';
import ScrollToTop from 'react-scroll-to-top';
import { FaArrowAltCircleUp } from 'react-icons/fa';

function App() {
  const { isLoading, isError, data, isModalOpen } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <main>
      <section>
        {!data.length ? (
          <Refresh />
        ) : (
          <>
            <Title title='pictures list' />
            <PicLimitForm />
            <Pictures />
            {isModalOpen && <Modal />}
          </>
        )}
        <ScrollToTop smooth top={500} className='btn-up' component={<FaArrowAltCircleUp />} />
      </section>
      <Copyright />
    </main>
  );
}

export default App;

/*
- может, сделать suspense, lazy на что-то или всё?
- как сделать отдельно выбор кол-ва картинок, чтобы не переререндерилась страница?
- сделать кнопку сброса к значениям по умолчнаию, вернуться к тому что при первой загрузке
- может, сделать кнопку clear all?
*/

/*
! Важно. Добавлен к git. При изменения git commit -m 'text', потом git push просто. Плюс доавлено к netlify continuous deploiment, 
т.е. всё автоматом будет браться с актуальной версии гит.
*/
