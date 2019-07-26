import gulp from 'gulp';
import { copyWatch } from './copy';
import { nunjucksWatch } from './nunjucks';
import { listPagesWatch } from './index/index-page';
import { webpackWatch } from './webpack';
import { sassWatch } from './sass';

export const watch = gulp.parallel([
  copyWatch,
  nunjucksWatch,
  listPagesWatch,
  webpackWatch,
  sassWatch,
]);
