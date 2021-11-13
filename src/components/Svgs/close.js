import React from 'react';

type Props = {
    width: string,
    height: string
};

const CloseIcon = ({ width = 14, height = 14 }: Props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      stroke="#000"
      strokeLinecap="round"
      strokeWidth="10"
      overflow="visible"
      viewBox={`0 0 ${width} ${height}`}
    >
      <path d="M0 0L14 14"></path>
      <path d="M14 0L0 14"></path>
    </svg>
);

export default CloseIcon;
