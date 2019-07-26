import del from 'del';
import util from 'gulp-util';
import config from '../config';

export const clean = () =>
  del([config.dest.root]).then(paths => {
    util.log('Deleted:', util.colors.magenta(paths.join('\n')));
  });
