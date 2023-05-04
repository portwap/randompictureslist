import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import { memo } from 'react';

const Modal = () => {
  const { isModalOpen, closeModal, modalId } = useGlobalContext();
  const image = `https://picsum.photos/id/${modalId}/367/245`;

  console.log('image', image)
  return (
    <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className='modal-container'>
        {/* <h3>Modal content</h3> */}
        <img src={image} alt="image" />
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
        <div className='info-modal'>
          <p>some text here</p>
          <p>some text here</p>
          <p>some text here</p>
          <p>some text here</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);
