import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

import Basic from './Basic';
import Controlled from './Controlled';
import CustomComponents from './CustomComponents';
import Carousel from './Carousel';
import Modal from './Modal';
import Scroll from './Scroll';

import Footer from './components/Footer';

import './App.css';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

const ScrollRestoration = withRouter(ScrollToTop);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakpoint: this.getScreenSize(),
    };
  }

  getScreenSize = () => {
    const { innerWidth } = window;
    let breakpoint = 'xs';

    if (innerWidth >= 1024) {
      breakpoint = 'lg'
    }
    else if (innerWidth >= 768) {
      breakpoint = 'md'
    }
    else if (innerWidth >= 400) {
      breakpoint = 'sm'
    }

    return breakpoint;
  };

  render() {
    const { breakpoint } = this.state;

    return (
      <BrowserRouter>
        <ScrollRestoration>
          <Switch>
            <Route exact path="/" render={(props) => (<Basic {...props} breakpoint={breakpoint} />)} />
            <Route path="/controlled" component={Controlled} />
            <Route path="/custom" component={CustomComponents} />
            <Route path="/carousel" component={Carousel} />
            <Route path="/modal" component={Modal} />
            <Route path="/scroll" component={Scroll} />
          </Switch>
          <Footer />
        </ScrollRestoration>
      </BrowserRouter>
    );
  }
}

export default App;
