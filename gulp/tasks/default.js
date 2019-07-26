import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';
import { build, buildDev } from './build';
import { watch } from './watch';
import { server } from './server';
import config from '../config';

const upload = () => gulp.src(`${config.dest.root}/**/*`).pipe(ghPages());

export const dev = gulp.series(buildDev, server, watch);
export const prod = gulp.series(build);
export const deploy = gulp.series(build, upload);
