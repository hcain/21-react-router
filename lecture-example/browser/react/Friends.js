'use strict';

import React from 'react';
export default class Friends extends React.Component {

  componentDidMount () {
    console.log('friends is mounting')
  }
  componentWillUnmount () {
    console.log('friends is unmounting')
  }
  render () {
    const { friends, addFriend } = this.props;
    return (
      <div>
        <h4>Friends</h4>
        <p>You have { friends } friends</p>
        <button className="btn btn-default" onClick={addFriend}>Add Friend</button>
      </div>
    )

  }
}