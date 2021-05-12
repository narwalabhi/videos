import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {

    const {videos, onVideoSelect} = props;
 
    const renderedVideos = videos.map((video) => {
        return <VideoItem video={video} key={video.id.videoId} onVideoSelect={onVideoSelect}/>
    });

    return (
        <div className="ui items">
            {renderedVideos}
        </div>
    )

} 

export default VideoList;