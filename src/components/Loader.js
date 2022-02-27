import './Loader.scss';

export const Loader = () => {
  const loader = (e) => {
    e.preventDefault();
    alert(
      'this would load in next sext of video JSON, and could be replaced with a "lazy loader" that pre loads the next results as the User scrolls down'
    );
  };

  return (
    <div className='loader'>
      <button onClick={loader}>Show more</button>
    </div>
  );
};
