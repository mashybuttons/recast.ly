class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstVideo: exampleVideoData[0],
      videoList: exampleVideoData
    };
  }

  onClickEvent(event) {
    this.setState({
      firstVideo: event.video
    });

  }

  componentDidMount () {
    console.log('got called');
    searchYouTube({key: window.YOUTUBE_API_KEY, query: 'cats', max: 10 }, videos => {
      console.log(videos);
      console.log(this.setState);
      this.setState({

        firstVideo: videos[0],
        videoList: videos
      });
    });

    
  }

  render() {
    return (
      <div>
        <Nav />
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
