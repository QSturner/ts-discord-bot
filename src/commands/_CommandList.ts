import { CommandInt } from '../interfaces/CommandInt';
import { ping } from './ping';
import { server } from './server';
import { user } from './user';

export const CommandList: CommandInt[] = [ping, server, user];