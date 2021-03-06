'use strict';

import { Logging } from './logging.js';
import { unionOptions } from '../utils.js';

export function logToColorConsole(options) {
    let opt = {
        filters: {
            debug: 'white',
            info: 'yellow',
            notice: 'green',
            warning: 'blue',
            error: 'red',
            critical: 'red',
            alert: 'cyan',
            emergency: 'magenta'
        }
    };
    options = unionOptions(opt, options)

    return new Logging(options);
}