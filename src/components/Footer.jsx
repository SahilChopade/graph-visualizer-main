import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Footer() {
  return (
    <div className='footer'>
      <p>©Sahil Chopade</p>
      <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/sahil-chopade-7504bb227/')} />
      <GitHubIcon onClick={() => window.open('https://github.com/SahilChopade/')} />
    </div>
  );
}
