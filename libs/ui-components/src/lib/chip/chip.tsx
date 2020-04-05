import React from 'react';

/* eslint-disable-next-line */
export interface ChipProps {
  color?: string
}

export const Chip : React.FunctionComponent<ChipProps> = props => {
  const className = `chip ${props.color}`;

  return (
    <>
      <div className={className}>
        {props.children}
      </div>

      <style jsx>{`
          .chip {
            background: #F7F7F7;
            border-radius: 4px;
            display: inline-block;
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            padding: 4px 6px;
            color: #fff;
          }

          .danger {
            background: var(--color-danger);
          }

          .success {
            background: var(--color-success);
          }

          .warn {
            background: var(--color-warn);
          }
      `}</style>
    </>
  );
};

export default Chip;
