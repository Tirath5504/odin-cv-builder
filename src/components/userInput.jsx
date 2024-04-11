/* eslint-disable react/prop-types */
import '../styles/userInput.css';
import { useState } from 'react';

const DropdownMenu = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <h2>
          {title}
          {isOpen ? '▲' : '▼'}
        </h2>
      </div>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default function UserInput({
  experiences,
  setExperiences,
  education,
  setEducation,
  userInformation,
  setUserInformation,
  socialMedia,
  setSocialMedia,
}) {
  const handleAddExperience = () => {
    if (experiences.length < 3) {
      setExperiences([
        ...experiences,
        { company: '', position: '', responsibilities: '' },
      ]);
    } else {
      alert('You can create maximum of 3 experiences!');
    }
  };

  const handleDeleteExperience = (index) => {
    if (experiences.length > 1) {
      setExperiences(experiences.filter((_, i) => i !== index));
    } else {
      alert('Cannot delete the last experience!');
    }
  };

  const handleAddEducation = () => {
    if (education.length < 3) {
      setEducation([...education, { school: '', study: '', date: '' }]);
    } else {
      alert('You can create maximum of 3 educations!');
    }
  };

  const handleDeleteEducation = (index) => {
    if (education.length > 1) {
      setEducation(education.filter((_, i) => i !== index));
    } else {
      alert('Cannot delete the last experience!');
    }
  };

  const handleSchoolChange = (index, newValue) => {
    const updatedEducation = [...education];
    updatedEducation[index].school = newValue;
    setEducation(updatedEducation);
  };

  const handleStudyChange = (index, newValue) => {
    const updatedEducation = [...education];
    updatedEducation[index].study = newValue;
    setEducation(updatedEducation);
  };

  const handleDateChange = (index, newValue) => {
    const updatedEducation = [...education];
    updatedEducation[index].date = newValue;
    setEducation(updatedEducation);
  };

  const handlePositionChange = (index, newValue) => {
    const updatedExperience = [...experiences];
    updatedExperience[index].position = newValue;
    setExperiences(updatedExperience);
  };

  const handleCompanyChange = (index, newValue) => {
    const updatedExperience = [...experiences];
    updatedExperience[index].company = newValue;
    setExperiences(updatedExperience);
  };

  const handleResponsibilityChange = (index, newValue) => {
    const updatedExperience = [...experiences];
    updatedExperience[index].responsibilities = newValue;
    setExperiences(updatedExperience);
  };

  const handleNameChange = (newValue) => {
    setUserInformation({ ...userInformation, name: newValue });
  };

  const handleEmailChange = (newValue) => {
    setUserInformation({ ...userInformation, email: newValue });
  };

  const handlePhoneChange = (newValue) => {
    setUserInformation({ ...userInformation, phone: newValue });
  };

  const handleLinkedInChange = (newValue) => {
    setSocialMedia({ ...socialMedia, linkedin: newValue });
  };

  const handleTwitterChange = (newValue) => {
    setSocialMedia({ ...socialMedia, twitter: newValue });
  };

  const handleGitHubChange = (newValue) => {
    setSocialMedia({ ...socialMedia, github: newValue });
  };

  return (
    <div className="app">
      <DropdownMenu title="User Information">
        <input
          type="text"
          placeholder="Name"
          value={userInformation.name}
          onChange={(e) => handleNameChange(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={userInformation.email}
          onChange={(e) => handleEmailChange(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={userInformation.phone}
          onChange={(e) => handlePhoneChange(e.target.value)}
        />
      </DropdownMenu>

      <DropdownMenu title="Experience">
        {experiences.map((exp, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Company"
              value={exp.company}
              onChange={(e) => handleCompanyChange(index, e.target.value)}
            />
            <input
              type="text"
              placeholder="Position"
              value={exp.position}
              onChange={(e) => handlePositionChange(index, e.target.value)}
            />
            <textarea
              placeholder="Responsibility"
              value={exp.responsibilities}
              onChange={(e) =>
                handleResponsibilityChange(index, e.target.value)
              }
            />
            <div className="subsection">
              <button
                className="button-17"
                role="button"
                onClick={() => handleDeleteExperience(index)}
              >
                Delete
              </button>
              <button
                className="button-17"
                role="button"
                onClick={handleAddExperience}
              >
                Add Experience
              </button>
            </div>
          </div>
        ))}
      </DropdownMenu>

      <DropdownMenu title="Education">
        {education.map((info, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="School"
              value={education.school}
              onChange={(e) => handleSchoolChange(index, e.target.value)}
            />
            <input
              type="text"
              placeholder="Study"
              value={education.study}
              onChange={(e) => handleStudyChange(index, e.target.value)}
            />
            <input
              type="date"
              placeholder="Date"
              value={education.date}
              onChange={(e) => handleDateChange(index, e.target.value)}
            />
            <div className="subsection">
              <button
                className="button-17"
                role="button"
                onClick={() => handleDeleteEducation(index)}
              >
                Delete
              </button>
              <button
                className="button-17"
                role="button"
                onClick={handleAddEducation}
              >
                Add Education
              </button>
            </div>
          </div>
        ))}
      </DropdownMenu>

      <DropdownMenu title="Social Media">
        <input
          type="text"
          placeholder="LinkedIn"
          value={socialMedia.linkedin}
          onChange={(e) => handleLinkedInChange(e.target.value)}
        />
        <input
          type="text"
          placeholder="Twitter"
          value={socialMedia.twitter}
          onChange={(e) => handleTwitterChange(e.target.value)}
        />
        <input
          type="text"
          placeholder="GitHub"
          value={socialMedia.github}
          onChange={(e) => handleGitHubChange(e.target.value)}
        />
      </DropdownMenu>
    </div>
  );
}
