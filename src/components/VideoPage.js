import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

export const VideoPage = () => {
  const { videoData } = useContext(DataContext);
  const { slug } = useParams();

  let videoDetails = videoData.filter((video) => {
    return video.urlTitle === slug;
  });

  // TODOs
  // check for any duplications
  if (videoDetails.length > 1) {
    // only used first returned
    let trim = videoDetails[0];
    videoDetails = [trim];
  }

  // format description;

  // add links to the URLS in description

  // format the JS Date
  return (
    <div className='container'>
      {videoDetails.map((result) => (
        <div key={result._id}>
          <img
            src={`https://img.youtube.com/vi/${result._id}/mqdefault.jpg`}
            alt={result.title}
          />
          <h2>{result.title}</h2>
          <h4 className='todo'>
            TODO: the formatting for the description needs work!
          </h4>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
};
