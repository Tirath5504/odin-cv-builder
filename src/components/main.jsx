import { useState } from 'react';
import UserInput from './userInput';
import Resume from './resume';
import '../styles/main.css';

function Main() {

  const [experiences, setExperiences] = useState([
    { company: '', position: '', responsibilities: '' },
  ]);
  const [education, setEducation] = useState([
    { school: '', study: '', date: '' },
  ]);
  const [userInformation, setUserInformation] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [socialMedia, setSocialMedia] = useState({
    linkedin: '',
    twitter: '',
    github: '',
  });

  return (
    <div className="main">
      <div className="userInput">
        <UserInput
          experiences={experiences}
          setExperiences={setExperiences}
          education={education}
          setEducation={setEducation}
          userInformation={userInformation}
          setUserInformation={setUserInformation}
          socialMedia={socialMedia}
          setSocialMedia={setSocialMedia}
        />
      </div>
      <div className="resume">
        <Resume
          experiences={experiences}
          education={education}
          userInformation={userInformation}
          socialMedia={socialMedia}
        />
      </div>
    </div>
  );
}

export default Main;
