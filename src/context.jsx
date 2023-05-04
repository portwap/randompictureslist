import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  /* Fetching data */
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      // console.log(response.headers.get('link')); // доступ к предыдущей и следующей странице
      const data = await response.json();
      setData(data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  /* Remove picture */
  const removePicture = (id) => {
    const newDataList = data.filter((item) => item.id !== id);
    setData(newDataList);
  };

  /* Pictures limit selection */
  const [picLimit, setPicLimit] = useState(10);
  const picLimitHandleSubmit = (e) => {
    e.preventDefault();
    fetchData(url);
  };
  const picLimitHandleChange = (e) => {
    setPicLimit(e.target.value);
  };

  const url = `https://picsum.photos/v2/list?page=2&limit=${picLimit}`;

  /* Modal */

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState(null);
  console.log('modalId', modalId)

  const openModal = (id) => {
    setIsModalOpen(true);
    setModalId(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalId(null);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        isError,
        data,
        fetchData,
        removePicture,
        picLimitHandleChange,
        picLimitHandleSubmit,
        picLimit,
        url,
        isModalOpen,
        openModal,
        closeModal,
        modalId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
