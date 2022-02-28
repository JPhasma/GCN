import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import Moment from 'react-moment';

import './VideoPage.scss';

export const VideoPage = () => {
  const { videoData } = useContext(DataContext);
  const { slug } = useParams();

  let videoDetails = videoData.filter((video) => {
    return video.urlTitle === slug;
  });

  // check for any duplications
  if (videoDetails.length > 1) {
    // only used first returned
    let trim = videoDetails[0];
    videoDetails = [trim];
  }

  // TODOs
  // format description;
  // add links to the URLS in description

  return (
    <div className='container'>
      {videoDetails.map((result) => (
        <div key={result._id} className='video_page'>
          <img
            src={`https://img.youtube.com/vi/${result._id}/mqdefault.jpg`}
            alt={result.title}
          />
          <h2>{result.title}</h2>
          <h6>
            Published on{' '}
            <Moment format='MMMM Do YYYY'>{result.publishDate}</Moment>
          </h6>
          <h4 className='todo'>
            TODO: the formatting for the description (and a lot more) needs
            work!
          </h4>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
};
