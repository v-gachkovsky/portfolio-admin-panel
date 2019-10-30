/**
 * The saga will be started on component mount and
 * cancelled with `task.cancel()` on component un-mount for improved performance.
 */
export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';

/**
 * Starts the saga on component mount and never cancels it or starts again
 */
export const DAEMON = '@@saga-injector/daemon';

/**
 * Behaves like 'RESTART_ON_REMOUNT' but never runs it again
 */
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';
