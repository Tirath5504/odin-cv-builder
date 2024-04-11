/* eslint-disable react/prop-types */
import '../styles/resume.css';

function Resume({ experiences, education, userInformation, socialMedia }) {
  return (
    <>
      <div className="title">
        <h1>{userInformation.name}</h1>
      </div>

      <div className="info">
        <div>{userInformation.email}</div>
        <div>{userInformation.phone}</div>
      </div>

      <h2>Experience</h2>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index}>
            <h3>{exp.company}</h3>
            <p id="italic">{exp.position}</p>
            <p>{exp.responsibilities}</p>
          </li>
        ))}
      </ul>
      <h2>Education</h2>
      <ul>
        {education.map((info, index) => (
          <li key={index}>
            <h3>{info.school}</h3>
            <p id="italic">{info.study}</p>
            <p>{info.date}</p>
          </li>
        ))}
      </ul>
      <h2>Social Media</h2>
      <ul>
        {socialMedia.linkedin && (
          <li key="linkedin">
            <a
              href={socialMedia.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </li>
        )}
        {socialMedia.twitter && (
          <li key="twitter">
            <a
              href={socialMedia.twitter}
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
          </li>
        )}
        {socialMedia.github && (
          <li key="github">
            <a
              href={socialMedia.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </li>
        )}
      </ul>
    </>
  );
}

export default Resume;
