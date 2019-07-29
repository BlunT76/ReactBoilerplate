import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import { } from '../store/Actions';

const mapStateToProps = (state) => {
  const {  } = state;
  return {  };
};

class AppContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.MsgTimeOut = null;
  }

  render() {
    return (
      <HashRouter>
        <div className="container-fluid p-0 bg-transparent">
          {/* AppBar here */}
        </div>
        <div className="container mt-3">
          <h1 className="text-center text-primary">React Boilerplate</h1>
          <Route exact path="/" component={null} />
          <Route path="/other" component={null} />
        </div>
        <div className="container-fluid p-0">
          {/* Footer here */}
        </div>
      </HashRouter>
    );
  }
}

export default connect(mapStateToProps)(AppContainer);
