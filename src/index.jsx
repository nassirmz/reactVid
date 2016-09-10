import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from 'search_bar';

const API_KEY = 'AIzaSyChawuvZnh4Ts-eY0P-q_rJ2_vmwAYHeO8';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));
