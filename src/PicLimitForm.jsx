import { useGlobalContext } from './context';

const PicLimitForm = () => {
  const { picLimit, picLimitHandleSubmit, picLimitHandleChange } = useGlobalContext();

  return (
    <form className='form' onSubmit={picLimitHandleSubmit}>
      <label className='form-label' htmlFor='picLimitCount'>
        Pictures per page:
      </label>
      <select
        className='form-select'
        id='picLimitCount'
        name='picLimitCount'
        value={picLimit}
        onChange={picLimitHandleChange}
      >
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='15'>15</option>
        <option value='20'>20</option>
        <option value='25'>25</option>
        <option value='30'>30</option>
        <option value='35'>35</option>
      </select>

      <button className='btn' type='submit'>
        apply
      </button>
    </form>
  );
};

export default PicLimitForm;
