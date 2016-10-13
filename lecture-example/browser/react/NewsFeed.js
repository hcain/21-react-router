'use strict';

import React from 'react';

export default (props) => {
  const { like, likes, newsFeed, addStory, children } = props;
  return (
    <div> 
      <ul>
        { newsFeed.map(story => (
            <li key={story.id}>{ story.title }</li>
          ))}
      </ul>
      <h4>Number of likes: { likes }</h4>
      <button className="btn btn-default" onClick={like}>Like</button>
      { likes > 10 ? <p>That's a lot of likes!</p> : null }
      <button className="btn btn-default" onClick={addStory}>Get More Stories</button>
      { children }
    </div>

  )
};