import React from 'react';

const VideoItem = (props) => {
    const{video, onVideoSelect} = props;

    return (
        <div className="item" onClick={() => onVideoSelect(video)}>
            <img className="image" src={video.snippet.thumbnails.default.url} alt={video.snippet.title}/>
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
                <div className="extra">{Date(video.snippet.publishedAt)}</div>
            </div>
        </div>
    );
}

export default VideoItem;