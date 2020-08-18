import React from 'react';
import { useHistory } from 'react-router-dom';

import json from '../../../../data/watch.json';

import { VideoCardContainer } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;

  // videoId é gerada usando o método .substr()
  // na string com a URL do vídeo, extraindo apenas o ID dele.
  const videoId = videoURL.substr(32, 42);

  // history como função useHistory() para roteamento através do link
  const history = useHistory();

  // função navigateTo() que será invocada quando o card do
  // vídeo for clicado (na propriedade onClick de 'VideoCardContainer')
  const navigateTo = () => {
    json.id = videoId; // 'watch.json' é editado e passa a ter o valor da ID do vídeo selecionado
    history.push('/watch'); // Redirecionamento de rota para o componente Watch através da useHistory();
  };

  return (
    <VideoCardContainer
      url={image}
      onClick={navigateTo}
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    >
      <span style={{ color: categoryColor || 'white' }}>{videoTitle}</span>
    </VideoCardContainer>
  );
}

export default VideoCard;
