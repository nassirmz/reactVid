import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from 'search_bar';
import VideoList from 'video_list';
import VideoListItem from 'video_list_item'
import VideoDetail from 'video_detail';

const API_KEY = 'AIzaSyChawuvZnh4Ts-eY0P-q_rJ2_vmwAYHeO8';

//class based Component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    //fetch videos and set the state
    YTSearch({key: API_KEY, term: 'fried rice'}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
       });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    )
  }
}

//render to DOM
ReactDOM.render(<App />, document.getElementById('app'));
