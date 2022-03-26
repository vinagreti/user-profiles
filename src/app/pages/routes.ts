import { default as privateOnly } from './private-only-pages/routes';
import { default as publicOnly } from './public-only-pages/routes';

export const APP_ROUTES = {
  publicOnly,
  privateOnly,
};
