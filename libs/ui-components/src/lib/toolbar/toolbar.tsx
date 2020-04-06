import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

/* eslint-disable-next-line */
export interface ToolbarProps {}

export const Toolbar = (props: ToolbarProps) => {
  return (
    <>
      <div className="toolbar">
        <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
      </div>

      <style jsx>{`
        .toolbar {
          background: var(--color-primary);
          padding: 2.0625rem 2.25rem;
        }

        .icon {
          width: 16px;
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default Toolbar;
