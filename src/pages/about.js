import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faLightbulb, faMugHot, faPalette } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/layout';
import SEO from '../components/seo';

import './about.scss';

const AboutPage = () => (
  <Layout>
    <SEO title="About Ally" />
    <div className="about-container">
      <h1 className="title has-text-centered">About Me</h1>
      <div className="section">
        <p>
          I did not start my career as a Software Engineer. When I was young, I didn't think I was
          interested in, or good at, math and science. I earned an undergraduate degree in Political
          Science (a topic I'm still interested in) and a graduate degree in Public Administration.
          I worked in a few different industries while I waited for a job in my field and while deciding
          if I wanted to go back to school to earn a PhD, so I could be a professor.
        </p>
        <p>
          That's when I was introduced to code.
        </p>
      </div>
      <div className="section">
        <h2 className="subtitle about-subtitle is-2">
          <FontAwesomeIcon icon={ faLightbulb } />
          Passionately Curious
        </h2>
        <p>
          A friend encouraged me to learn how to code, because I wasn't finding job opportunities
          I was excited about in my field. I wasn't sure if I would like it, but I didn't have anything
          to lose! That first day, I spent over 8 hours working through online resources on HTML and CSS.
          A whole new world opened up for me.
        </p>
        <p>
          That's when I realized that I earned a graduate degree because I love to learn. Working in tech
          gives me the opportunity to continue learning all the time. With endless things to learn and
          constant growth, I have found a way to be passionately curious in a career I love.
        </p>
        <p>
          Check out what I've been working on lately:
        </p>
        <div className="link-container">
          <a className="links" rel="noopener noreferrer" target="_blank" href="https://www.github.com/lysautumn">
            <FontAwesomeIcon className="icons" icon={ faCaretRight } />
            GitHub
          </a>
        </div>
      </div>
      <div className="section">
        <h2 className="subtitle about-subtitle is-2">
        <FontAwesomeIcon icon={ faPalette } />
          Creative
        </h2>
        <p>
          In my free time, I like to do many things to fuel my creativity. Whether it's cooking,
          embroidery, painting, writing, or learning visual design, I enjoy finding new things
          to try.
        </p>
        <p>
          One thing I love about tech is that I can blend together the challenges of logic and
          creativity. Blending these two things together allows me to create products I can be proud of.
        </p>
        <p>
          When I want to practice visual design, I work on challenges from&nbsp;
          <a className="links" rel="noopener noreferrer" target="_blank" href="https://www.dailyui.co/">
            Daily UI
          </a>
          .
        </p>
        <p>
          Here's some of my past work:
        </p>
        <div className="link-container">
          <a className="links" rel="noopener noreferrer" target="_blank" href="https://www.dribbble.com/allyboyd">
            <FontAwesomeIcon className="icons" icon={ faCaretRight } />
            Dribbble
          </a>
        </div>
      </div>
      <div className="section">
        <h2 className="subtitle about-subtitle is-2">
        <FontAwesomeIcon icon={ faMugHot } />
          Quirky and Caffeinated
        </h2>
        <p>
          More often than not, you will find me with a coffee or tea in hand. I worked as a barista
          for many years and I love to find new coffee shops to visit. Know of any good ones? Let me know!
        </p>
        <p>
          The things I enjoy doing in my free time are wide-ranging. I enjoy playing board games
          and some video games (lately, I've been playing Animal Crossing: New Horizons on the Switch).
          I really love to read, even though I don't always have a lot of time to spend on it. I also
          like to watch documentaries and listen to podcasts. When the MN weather allows, I love to explore
          walking paths, find cool local businesses to support, and attend fun events like Art-A-Whirl, TC Pride Festival,
          and (of course) the MN State Fair.
        </p>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
