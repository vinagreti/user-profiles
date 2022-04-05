export type AlertColor = 'default' | 'primary' | 'accent' | 'warn' | 'success';

export interface AlertConfig {
  message?: string;
  duration?: number;
  title?: string;
  color?: AlertColor;
  next?: () => void;
}
