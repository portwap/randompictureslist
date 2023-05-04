import Copyright from './Copyright';
import { useGlobalContext } from './context';
import PicLimitForm from './PicLimitForm';
import Loading from './Loading';
import Error from './Error';
import Title from './Title';
import Pictures from './Pictures';
import Modal from './Modal';

function App() {
  const { isLoading, isError, data, fetchData, url, isModalOpen } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  if (data.length === 0) {
    return (
      <main>
        <section>
          <div className='title'>
            <h2>no pictures left</h2>
            <div className='title-underline'></div>
            <button className='btn' onClick={() => fetchData(url)}>
              refresh
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section>
        <Title title='pictures list' />
        <PicLimitForm />
        <Pictures />
        {isModalOpen && <Modal />}
      </section>
      <Copyright />
    </main>
  );
}

export default App;

/*
- подумать как разделить всё на компоненты отдельные
- может, сделать suspense, lazy на что-то или всё?
- как сделать отдельно выбор кол-ва картинок, чтобы не переререндерилась страница?
- сделать кнопку сброса к значениям по умолчнаию, вернуться к тому что при первой загрузке
*/

/*
Надо создать на гитхабе репо и подсоеденить сюда!!!!!!!!!!!!!!!!!!!!!! Здесь просто пока что закомичено, не синхронизировано
*/

/*
! Важно. Добавлен к git. При изменения git commit -m 'text', потом git push просто. Плюс доавлено к netlify continuous deploiment, 
т.е. всё автоматом будет праться с актуальной версии гит.
*/