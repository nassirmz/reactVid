import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from 'search_bar';

const API_KEY = 'AIzaSyChawuvZnh4Ts-eY0P-q_rJ2_vmwAYHeO8';

YTSearch({key: API_KEY, term: 'yusuf'}, function (data) {
  console.log(data);
});

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));
