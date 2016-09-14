import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

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
    this.videoSearch('rice')
  }

  //fetch videos and set the state
  videoSearch(term) {
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    )
  }
}

//render to DOM
ReactDOM.render(<App />, document.getElementById('app'));
