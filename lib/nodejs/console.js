'use strict';

import { Logging } from './logging.js';

export function logToConsole(options) {
    return new Logging(options);
}