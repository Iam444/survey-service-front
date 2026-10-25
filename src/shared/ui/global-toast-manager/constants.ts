import { Toast } from '@base-ui/react';
import type { IGlobalToastOptions } from './types';

export const globalToastManager = Toast.createToastManager<IGlobalToastOptions>();
