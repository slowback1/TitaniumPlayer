import React, { ReactNode } from 'react';
import { TitaniumColors } from '../types';
import './Button.scss';

export interface TitaniumButtonProps {
  onClick?: (event: React.MouseEvent) => void;
  variant?: 'text' | 'filled';
  color?: TitaniumColors;
  children?: ReactNode;
}

function normalizeProps(props: TitaniumButtonProps): TitaniumButtonProps {
  const normalized = JSON.parse(JSON.stringify(props));
  if (!normalized.variant) normalized.variant = 'text';
  if (!normalized.color) normalized.color = 'primary';

  return normalized;
}

const classModifiers = {
  variant: {
    filled: 'titanium-button__filled',
    text: 'titanium-button__text',
  },
  color: {
    primary: 'titanium-button__color-primary',
    secondary: 'titanium-button__color-secondary',
    error: 'titanium-button__color-error',
    light: 'titanium-button__color-light',
  },
};

export const TitaniumButton: React.FC<TitaniumButtonProps> = (props) => {
  const normalizedProps = normalizeProps(props);

  const classList = ['titanium-button'];
  classList.push(classModifiers.variant[normalizedProps.variant]);
  classList.push(classModifiers.color[normalizedProps.color]);

  const handleClick = (e: React.MouseEvent) => {
    if (props.onClick) props.onClick(e);
  };

  return (
    <button onClick={handleClick} className={classList.join(' ')}>
      {props.children}
    </button>
  );
};
