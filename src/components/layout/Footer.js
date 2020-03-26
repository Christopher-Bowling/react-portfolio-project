import React from 'react';

const Footer = () => {
  return (
    <footer>
    <div className="bg-dark p-4">
      <div className="row text-light justify-content-center">
        <h1 className="text-primary">Follow Me on</h1>
      </div>
      <div className="row justify-content-center pt-3" id="socialMediaIconsWrapper">
        <a href="https://www.instagram.com/official_chrisbowling/?hl=en" target="_blank" rel='noreferrer noopener'>
          <i className="fab fa-instagram" alt='instagram'></i>
        </a>

        <a href="https://twitter.com/chrisbowling?lang=en" target="_blank" rel='noreferrer noopener'>
          <i className="fab fa-twitter" alt='twitter '></i>
        </a>

        <a href="https://www.facebook.com/Chris2fer1990" target="_blank" rel='noreferrer noopener'>
          <i className="fab fa-facebook-f" alt='facebook'></i>
        </a>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
