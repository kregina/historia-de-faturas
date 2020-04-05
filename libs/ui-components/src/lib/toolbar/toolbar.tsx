import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

/* eslint-disable-next-line */
export interface ToolbarProps {}

export const Toolbar = (props: ToolbarProps) => {
  return (
    <>
      <div className="toolbar">
        <FontAwesomeIcon icon={faBars} />
      </div>

      <style jsx>{`
        .toolbar {
          background: var(--color-primary);
          padding: 2.0625rem 2.25rem;
        }

        svg {
          font-size: 1.3125rem;
        }
      `}</style>
    </>
  );
};

export default Toolbar;
