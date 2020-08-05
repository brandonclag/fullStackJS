/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';
import ContestList from './contestList';

const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
};

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };


  componentDidMount() {

  }

  componentWillUnmount() {

  }
  fetchContest = (contestID) => {
    pushState(
      {},
      `/contest/${contestID}`
    );
  }

  render() {
    return (
      <div className='App'>
        <Header message={this.state.pageHeader} />
        {/* <div> */}
        <ContestList onContestClick={this.fetchContest}
          contests={this.state.contests} />

      </div>
      // </div>


    );

  }
}

export default App;