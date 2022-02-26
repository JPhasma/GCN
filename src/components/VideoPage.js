import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

export const VideoPage = () => {
  const { videoData } = useContext(DataContext);
  const { slug } = useParams();
  console.log(slug, videoData);
  const videoDetails = videoData.filter((video) => {
    return video.urlTitle === slug;
  });
  console.log(videoDetails);

  // check for any duplications TODO
  return (
    <div>
      {videoDetails.map((result) => (
        <div key={result._id}>
          <img
            src={`https://img.youtube.com/vi/${result._id}/mqdefault.jpg`}
            alt={result.title}
          />
        </div>
      ))}
    </div>
  );
};
