import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

import './VideoList.scss';

export const VideoList = () => {
  const { videoData } = useContext(DataContext);
  console.log('videoData', videoData);

  return (
    <div id='video_list'>
      <h2>Video List</h2>
      <ul>
        {videoData.map((result) => (
          <li key={result._id} className='video_container'>
            <a href={`/video/${result.urlTitle}`}>
              <h4>{result.title}</h4>
              <img
                src={`https://img.youtube.com/vi/${result._id}/mqdefault.jpg`}
                alt={result.title}
              />
              <p>{result.urlTitle}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
