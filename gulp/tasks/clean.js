import del from 'del';
import config from '../config';

export const clean = () => del([config.dest.root, '.publish']);
