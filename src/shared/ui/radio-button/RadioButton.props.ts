import type { InputHTMLAttributes } from 'react';

export type TRadioButtonProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'children'>;
