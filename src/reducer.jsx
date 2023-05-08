import { DELETE_ITEM, DISPLAY_LIST, LOADING, LOADING_ERROR, CHANGE_PICLIMIT, OPEN_MODAL, CLOSE_MODAL } from './actions';

export const reducer = (state, action) => {
  if (action.type === LOADING_ERROR) {
    return { ...state, isLoading: false, isError: true }; // пока что с ошибками работы нет
  }
  if (action.type === LOADING) {
    return { ...state, isLoading: true };
  }
  if (action.type === DISPLAY_LIST) {
    const newPicturesList = action.payload.data;
    return { ...state, isLoading: false, data: newPicturesList };
  }
  if (action.type === DELETE_ITEM) {
    const picturesList = state.data;
    const newPicturesList = picturesList.filter((item) => item.id !== action.payload.id);
    return { ...state, data: newPicturesList };
  }
  if (action.type === OPEN_MODAL) {
    return { ...state, isModalOpen: true, modalId: action.payload.id };
  }
  if (action.type === CLOSE_MODAL) {
    return { ...state, isModalOpen: false, modalId: null };
  }

  throw new Error(`no matching action type: ${action.type}`);
};
