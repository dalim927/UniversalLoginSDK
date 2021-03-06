import React, {Component} from 'react';
import TextBox from './TextBox';
import PropTypes from 'prop-types';


class Transfer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2> Connected! </h2>
        <button onClick={this.props.onClick.bind(this)}>Klick!</button>
      </div>
    );
  }
}

Transfer.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func
};


export default Transfer;
