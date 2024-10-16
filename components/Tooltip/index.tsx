import { HTMLAttributes } from 'react';

type TOOLTIP_TYPE = {
  position: 'left' | 'center' | 'right';
} & HTMLAttributes<HTMLDivElement>;

import './Tooltip.styles.css';

export default function Tooltip({ children, className, position }: TOOLTIP_TYPE) {
  const positionClass: Record<TOOLTIP_TYPE['position'], string> = {
    left: 'Tooltip Tooltip--left',
    center: 'Tooltip Tooltip--center',
    right: 'Tooltip Tooltip--right',
  };

  return (
    <div className={className ? `${positionClass[position]} ${className}` : positionClass[position]}>{children}</div>
  );
}
