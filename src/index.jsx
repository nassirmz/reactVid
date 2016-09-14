import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from 'search_bar';
import VideoList from 'video_list';
import VideoListItem from 'video_list_item'

const API_KEY = 'AIzaSyChawuvZnh4Ts-eY0P-q_rJ2_vmwAYHeO8';

//class based Component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    //fetch videos and set the state
    YTSearch({key: API_KEY, term: 'yusuf'}, (videos) => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

//render to DOM
ReactDOM.render(<App />, document.getElementById('app'));
