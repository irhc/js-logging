'use strict';

import { logToConsole as console } from './nodejs/console';
import { logToColorConsole as colorConsole } from './nodejs/colorConsole';
import { logToDailyFile as dailyFile } from './nodejs/dailyFile';
import { Logging } from './nodejs/logging';

Logging.console = console;
Logging.colorConsole = colorConsole;
Logging.dailyFile = dailyFile;

export default Logging;