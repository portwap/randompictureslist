import { createContext, useContext, useState, useEffect, useReducer } from 'react';
import { DELETE_ITEM, DISPLAY_LIST, LOADING, LOADING_ERROR, CHANGE_PICLIMIT, OPEN_MODAL, CLOSE_MODAL } from './actions';
import { reducer } from './reducer';

const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

const defaultState = {
  isLoading: false,
  isError: false,
  data: [],
  isModalOpen: false,
  modalId: null,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  /* Fetching data */
  const fetchData = async (url) => {
    try {
      dispatch({ type: LOADING });
      const response = await fetch(url); // console.log(response.headers.get('link')); // доступ к предыдущей и следующей странице
      const data = await response.json();
      dispatch({ type: DISPLAY_LIST, payload: { data } });
    } catch (error) {
      dispatch({ type: LOADING_ERROR });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  /* Remove picture */
  const removePicture = (id) => {
    dispatch({ type: DELETE_ITEM, payload: { id } });
  };

  /* Pictures limit selection */
  const [picLimit, setPicLimit] = useState(10); // подумать как это использовать с reducer, возможно, после использования axios

  const picLimitHandleSubmit = (event) => {
    event.preventDefault();
    fetchData(url);
  };

  const picLimitHandleChange = (event) => {
    event.preventDefault();
    setPicLimit(event.target.value);
  };

  const url = `https://picsum.photos/v2/list?page=2&limit=${picLimit}`;

  /* Modal */
  const openModal = (id) => {
    dispatch({ type: OPEN_MODAL, payload: { id } });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        removePicture,
        picLimitHandleSubmit,
        picLimit,
        picLimitHandleChange,
        url,
        openModal,
        closeModal,
        fetchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
