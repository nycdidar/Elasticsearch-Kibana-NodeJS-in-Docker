/**
 * 
 * Bootloader Handler
 * 
 */
import { routes } from '../routes';

export function boot(app) {
  routes(app);
  return app;
}
