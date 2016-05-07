class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstVideo: exampleVideoData[0],
      videoList: exampleVideoData,
    };
  }

  onClickEvent(event) {
    this.setState({
      firstVideo: event.video
    });

  }

  componentDidMount () {
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY}, function(videos) {
      // console.log('test');
      // console.log(videos);
      this.setState({
        firstVideo: videos[0],
        videoList: videos
      });
    }.bind(this));    
  }
  debouncedSearchVideo(query) {
    var timeout;
    var wait = 500;
    var func = this.searchVideo;
    var later = () => {
      timeout = null;
      if (query) {
        func.call(this, query);
      }
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  searchVideo(query) {
    console.log(query);
    this.props.searchYouTube({query: query, max: 10, key: window.YOUTUBE_API_KEY}, function(videos) {
      console.log(videos[0]);
      this.setState({
        firstVideo: videos[0],
        videoList: videos,
      });
    }.bind(this));
  }

  render() {

    return (
      <div>
        <Nav searchFunc={this.debouncedSearchVideo.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.firstVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList clicked={this.onClickEvent.bind(this)} videos={this.state.videoList}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
