var VideoDetails = (props) => (

    <div className="video-details">
      <h3>{props.video.snippet.title}</h3>
      <div>{props.video.snippet.description}</div>
    </div>

);

window.VideoDetails = VideoDetails;
