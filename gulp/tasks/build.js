import gulp from 'gulp';
import config from '../config';
import { clean } from './clean';
import { sass } from './sass';
import { nunjucks } from './nunjucks';
import { webpack } from './webpack';
import { copy } from './copy';
import { listPages } from './index/index-page';

const production = resolve => {
  config.setEnv('production');
  config.logEnv();
  resolve();
};

const development = resolve => {
  config.setEnv('development');
  config.logEnv();
  resolve();
};

export const build = gulp.series(
  production,
  clean,
  sass,
  nunjucks,
  webpack,
  copy,
  listPages,
);

export const buildDev = gulp.series(
  development,
  clean,
  sass,
  nunjucks,
  webpack,
  copy,
  listPages,
);
