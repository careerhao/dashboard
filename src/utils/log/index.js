import { dateTime } from '@/utils/index.js';

const LOGS_OUTPUT = true;
/**
 * Returns shared formatting of console.log output with additional custom colour
 * @param {string} hex color in format #ffffff
 */
const consoleCss = hex => `color:${hex};font-weight:800`;

/**
 * Treat exactly like a console.log with the first param being the function on `console`
 * @param {string} consoleFunc function name to use - belonging to `console` object.
 * @param {string} template template string eg. can have `%s`, `%c` which is replaced by `format`
 * @param {string} format format for the `%c` eg `'font-weight: bold;'`
 * @param  {...any} params all outputs after the format
 * @example
 * doLog('info', '%c', 'font-weight: bold;', someVar);
 */
const doLog = (consoleFunc, template, format, ...params) => {
    if(LOGS_OUTPUT) {
      console[consoleFunc](template, format, ...params);
    }
  };

/**
 * LOG container
 */
const log = {
    /**
     * Default Log info with blue icon
     * @param  {...any} params
     */
    info: (...params) => {
      doLog('info', '%c🔵 %s', consoleCss('#2B4CEA'), ...params);
    },
  
    /**
     * Log error
     * @param  {...any} params
     */
    error: (...params) => {
      doLog('error', '%c⛔ %s', consoleCss('#A42B15'), ...params);
    },
  
    /**
     * Log warning
     * @param  {...any} params
     */
    warn: (...params) => {
      doLog('warn', '%c⚠️ %s', consoleCss('#ECB100'), ...params);
    },
  
    /**
     * Log info with building icon
     * @param  {...any} params
     */
    requests: (...params) => {
        doLog('info', '%c🏣 %s', consoleCss('#A96D2C'), ...params);
    },
  
    /**
     * Log Send info with map icon
     * @param  {...any} params
     */
    requestSend: (...params) => {
        doLog('info', '%c🗺️ >> %s', consoleCss('#659431'), ...params);
    },
  
    /**
     * Log Recieve info with map icon
     * @param  {...any} params
     */
    requestReceive: (...params) => {
        doLog('info', '%c🗺️ << %s', consoleCss('#288C9D'), ...params);
    },
  };
  
  export default log;