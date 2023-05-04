import { useGlobalContext } from './context';

const Pictures = () => {
  const { data, removePicture, openModal } = useGlobalContext();

  return (
    <div className='pictures-container'>
      {data.map((picture) => {
        const { id, author } = picture;
        const image = `https://picsum.photos/id/${id}/300/200`;
        return (
          <article className='single-picture' key={id}>
            <img src={image} alt={author} />
            <div className='pictures-info'>
              <h6>Author: {author}</h6>
            </div>
            <button className='delete-btn' onClick={() => removePicture(id)}>
              delete
            </button>
            <button className='info-btn' onClick={() => openModal(id)}>
              info
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default Pictures;
