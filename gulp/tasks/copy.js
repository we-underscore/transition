import gulp from 'gulp';
import config from '../config';

export const copyFonts = () =>
  gulp
    .src(`${config.src.fonts}/*.{ttf,eot,woff,woff2}`)
    .pipe(gulp.dest(config.dest.fonts));

export const copyData = () =>
  gulp.src(`${config.src.data}/**/*`).pipe(gulp.dest(config.dest.data));

export const copyLib = () =>
  gulp.src(`${config.src.lib}/**/*`).pipe(gulp.dest(config.dest.lib));

export const copyRootfiles = () =>
  gulp.src(`${config.src.root}/*`).pipe(gulp.dest(config.dest.root));

export const copyImg = () =>
  gulp
    .src([
      `${config.src.img}/**/*.{jpg,png,jpeg,svg,gif}`,
      `!${config.src.img}/svgo/**/*`,
    ])
    .pipe(gulp.dest(config.dest.img));

export const copy = gulp.parallel([copyImg, copyFonts]);
export const copyWatch = () => gulp.watch(`${config.src.img}/*`, copy);
