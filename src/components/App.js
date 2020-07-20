/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';
import axios from 'axios';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: []
  };

  componentDidMount() {
    axios.get('/api/contests')
      .then(resp => {
        console.log(resp);
        this.setState({
          contests: resp.data.contests
        });
      })
      .catch(console.error);

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className='App'>
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id}{...contest} />
          )}

        </div>
      </div>


    );

  }
}

export default App;