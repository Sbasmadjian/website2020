import React from 'react';

import profilePic from './profile-pic.jpg';
import { rhythm } from '../utils/typography';
import { colors } from '../utils/theme';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Scott Basmadjian`}
          style={{
            borderRadius: '50%',
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p style={{ color: colors.green }}>
          By <strong>Scott Basmadjian</strong> who person who sometimes writes well.{' '}
          <a
            style={{ color: colors.green }}
            href="https://twitter.com/scottbasmadjian"
            target="_blank"
          >
            
          </a>
        </p>
      </div>
    );
  }
}

export default Bio;
