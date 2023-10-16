import React, { useState } from "react";
import YouTube from "react-youtube";
import "./Youtub.scss";

function Youtub() {
  const [videoId, setVideoId] = useState("XUouUNjb8_g");

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // Opções de reprodução do YouTube, se necessário
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    // Você pode fazer alguma ação quando o vídeo estiver pronto, se necessário.
  };

  return (
    <div className="container-Youtub">
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
        className="custom-youtube-class" // Adicione a classe personalizada aqui
      />
    </div>
  );
}

export default Youtub;
