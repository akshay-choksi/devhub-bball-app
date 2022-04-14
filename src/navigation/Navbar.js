import React from 'react';

export default function () {
	return (
		<div className="navbar">
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          <div id="open">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Teams</a>
          </li>
          <li>
            <a href="#">Games</a>
          </li>
          <li>
            <a href="#">Stats</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
	);
}
