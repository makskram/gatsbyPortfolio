import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/makskram/gatsbyPortfolio/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork makskram/gatsbyPortfolio on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/makskram/gatsbyPortfolio"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star makskram/gatsbyPortfolio on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
