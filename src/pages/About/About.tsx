import React, { useEffect, useRef, useState } from 'react';
import './About.scss';
import { Link } from 'react-router-dom';

const defaultAboutValue = 'A URL shortener is a tool that takes a long URL and generates a shorter, more manageable URL that redirects to the original URL when clicked. This is done using an API request with a search for the proper full link from the shortened version. You also can edit this text field.';

export const About: React.FC = () => {
  const aboutTextField = useRef<HTMLInputElement>(null);

  const [aboutValue, setAboutValue] = useState(defaultAboutValue);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (aboutTextField.current) {
      aboutTextField.current.focus();
    }
  }, [isEditing]);

  const handleDoubleClickEditTitle = () => setIsEditing(true);

  const handleSubmitAboutValueChange = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleEscKeyDownCancelEditing = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Escape') {
      setIsEditing(false);
    }
  };

  return (
    <div className="about">
      <h1 className="about__title">Learn more about URL Shortener!</h1>

      <div className="about__text-container">
        {isEditing ? (
          <form onSubmit={handleSubmitAboutValueChange}>
            <input
              type="text"
              ref={aboutTextField}
              className="about__text-field"
              value={aboutValue}
              onChange={e => setAboutValue(e.target.value)}
              onKeyDown={handleEscKeyDownCancelEditing}
              onBlur={() => setIsEditing(false)}
            />
          </form>
        ) : (
          <p
            className="about__text"
            onDoubleClick={handleDoubleClickEditTitle}
          >
            {aboutValue}
          </p>
        )}
      </div>

      <Link to="/">
        <div className="about__link">
          Lets try it!
        </div>
      </Link>
    </div>
  );
};
