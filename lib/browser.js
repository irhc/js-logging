'use strict';

import { logToConsole as console } from './browser/console';
import { logToColorConsole as colorConsole } from './browser/colorConsole';
import { Logging } from './browser/logging.browser';

Logging.console = console;
Logging.colorConsole = colorConsole;

export default Logging;