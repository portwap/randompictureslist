import { useGlobalContext } from './context';

const PicLimitForm = () => {
  const { picLimit, picLimitHandleSubmit, picLimitHandleChange } = useGlobalContext();
  
  return (
    <form className='form' onSubmit={picLimitHandleSubmit}>
      <label className='form-label' htmlFor='picLimit'>Pictures per page: </label>
      <input className='form-input'
        type='number'
        id='picLimit'
        name='picLimit'
        min='5'
        max='35'
        step='5'
        value={picLimit}
        onChange={picLimitHandleChange}
      />
      <button className='btn' type='submit'>apply</button>
    </form>
  );
};

export default PicLimitForm;
