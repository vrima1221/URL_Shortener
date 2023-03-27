import React from 'react';
import './URLForm.scss';
import { ErrorNotification } from '../ErrorNotification/ErrorNotification';

type Props = {
  isError: boolean
  errorMessage: string
  onChange: (value: string) => void
  currentUrl: string
  onSubmit: (event: React.FormEvent) => void
};

export const URLForm: React.FC<Props> = ({
  isError,
  errorMessage,
  onChange,
  currentUrl,
  onSubmit,
}) => {
  return (
    <>
      <form
        className="form"
        action=""
        onSubmit={onSubmit}
      >
        <input
          className="form__input"
          type="url"
          placeholder="Input URL to shrink"
          value={currentUrl}
          onChange={e => onChange(e.target.value)}
        />
        <button
          className="form__button"
          type="submit"
        >
          Shrink
        </button>
      </form>

      <ErrorNotification isError={isError} message={errorMessage} />
    </>
  );
};
