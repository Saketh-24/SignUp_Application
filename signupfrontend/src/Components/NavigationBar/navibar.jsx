import React from 'react'
import "./navibar.css"

function navibar()
{
  return (
    <div>
        <div className="navigation-bar">
            <span className='title'>Blog</span>
            <span className="links">Home</span>
            <span className="links">Posts</span>
            <span className="links">Messenger</span>
            <span className="links">Comments</span>
        </div>
    </div>
  );
}

export default navibar;
