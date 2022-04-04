export interface AlertConfig {
  message?: string;
  duration?: number;
  title?: string;
  color?: 'default' | 'primary' | 'accent' | 'warn' | 'success';
  next?: () => void;
}
