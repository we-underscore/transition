import gulp from 'gulp';
import gsass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker';
import csso from 'postcss-csso';
import config from '../config';

gsass.compiler = require('node-sass');

const isMax = mq => /max-width/.test(mq);

const isMin = mq => /min-width/.test(mq);

const sortMediaQueries = (a, b) => {
  const A = a.replace(/\D/g, '');
  const B = b.replace(/\D/g, '');

  if (isMax(a) && isMax(b)) {
    return B - A;
  } else if (isMin(a) && isMin(b)) {
    return A - B;
  } else if (isMax(a) && isMin(b)) {
    return 1;
  } else if (isMin(a) && isMax(b)) {
    return -1;
  }

  return 1;
};

const processors = [
  autoprefixer({
    flexbox: true,
    grid: 'autoplace',
  }),
  require('lost'),
  mqpacker({
    sort: sortMediaQueries,
  }),
  csso,
];

export const sass = () =>
  gulp
    .src(`${config.src.sass}/*{sass.scss}`)
    .pipe(sourcemaps.init())
    .pipe(
      gsass({
        outputStyle: config.production ? 'compact' : 'expanded',
        precision: 5,
      }),
    )
    .on('error', config.errorHandler)
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest.css));

export const sassWatch = () =>
  gulp.watch(`${config.src.sass}/**/*.{sass,scss}`, sass);
