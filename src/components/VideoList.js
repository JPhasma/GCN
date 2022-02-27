import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import { Link } from 'react-router-dom';

import { Loader } from '../components/Loader';

import './VideoList.scss';

export const VideoList = () => {
  const { videoData } = useContext(DataContext);

  return (
    <div id='video_list' className='container'>
      <h2>Video List</h2>
      <ul>
        {videoData.map((result) => (
          <li key={result._id} className='video_container'>
            <Link to={`/video/${result.urlTitle}`}>
              <h4>{result.title}</h4>
              <img
                src={`https://img.youtube.com/vi/${result._id}/mqdefault.jpg`}
                alt={result.title}
              />
              <p>{result.urlTitle}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Loader />
    </div>
  );
};
