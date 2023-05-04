import { memo } from 'react';

const Title = ({title}) => {
  return (
    <div className='title'>
      <h2>{title}</h2>
      <div className='title-underline'></div>
    </div>
  );
};

export default memo(Title); 

/* memo делает так, что title каждый 
раз не перерендеривается при других изменениях, 
это просто вариант, на момент создания это работает */
