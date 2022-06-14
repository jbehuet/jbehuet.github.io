import React from 'react';
import Highlight from 'react-highlight';
import 'highlight.js/styles/monokai-sublime.css';

const Hero = () => {
  const birth = new Date('1986-01-18');
  const age = Math.floor(
    new Date(new Date() - birth.getTime()).getTime() / 31557600000
  );
  const content =
    '\nconst me = { \n' +
    '   "firstname": "Jérôme",\n' +
    '   "lastname": "BEHUET",\n' +
    '   "age": ' +
    age +
    ',\n' +
    '   "location": "Bordeaux",\n' +
    '   "description": "Tech. leader | Developer | Freelance",\n' +
    '   "skills": ["JavaScript", "TypeScript", "Go"],\n' +
    '   "organizer": ["BDX I/O", "BordeauxJS"]\n' +
    '}';
  return (
    <>
      <div className="hero__terminal">
        <Highlight className="json">{content}</Highlight>
      </div>
    </>
  );
};

export default Hero;
