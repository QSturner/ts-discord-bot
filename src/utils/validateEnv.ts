import { logHandler } from './logHandler';

export const validateEnv = (): void => {
    if (!process.env.TOKEN) {
        logHandler.log('warn', 'Missing Discord Bot Token');
        process.exit(1);
    }
};