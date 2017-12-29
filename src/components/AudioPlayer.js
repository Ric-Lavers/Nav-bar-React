import React from 'react';
import Player from './Player';

export default class AudioPlayer extends React.Component {
  state={

  }

  render() {

    return(
      <div className="audio-player">

        <div className="artist-image"></div>
        <div className="artist-details"></div>
        <Player />

      </div>
    )

  }
}
