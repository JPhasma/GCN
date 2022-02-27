import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import { Link } from 'react-router-dom';

import { Loader } from '../components/Loader';

import './VideoList.scss';

export const VideoList = () => {
  const { videoData } = useContext(DataContext);
  const dateFormat = (date) => {
    // use Regular expression to get basic Date Format
    return date.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3-$2-$1');
    // TODO format further with month
    // and date appended with 'st', 'nd', 'rd', 'th'
    // depending on date
    // or use Moment.js
  };

  return (
    <div id='video_list' className='container'>
      <h2>Latest Videos</h2>
      <ul>
        {videoData.map((result) => (
          <li key={result._id} className='video_container'>
            <Link to={`/video/${result.urlTitle}`}>
              <img
                src={`https://img.youtube.com/vi/${result._id}/mqdefault.jpg`}
                alt={result.title}
              />
              <h6>{dateFormat(result.publishDate)}</h6>
              <h4>{result.title}</h4>
            </Link>
          </li>
        ))}
      </ul>
      <Loader />
    </div>
  );
};
