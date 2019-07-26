import gulp from 'gulp';
import nunjucksRender from 'gulp-nunjucks-render';
import plumber from 'gulp-plumber';
import gulpif from 'gulp-if';
import changed from 'gulp-changed';
import prettify from 'gulp-prettify';
import frontMatter from 'gulp-front-matter';
import config from '../config';

const renderHtml = onlyChanged => {
  nunjucksRender.nunjucks.configure({
    watch: false,
    trimBlocks: true,
    lstripBlocks: false,
  });
  return gulp
    .src([`${config.src.templates}/**/[^_]*.html`])
    .pipe(plumber({ errorHandler: config.errorHandler }))
    .pipe(gulpif(onlyChanged, changed(config.dest.html)))
    .pipe(frontMatter({ property: 'data' }))
    .pipe(
      nunjucksRender({
        PRODUCTION: config.production,
        path: [config.src.templates],
      }),
    )
    .pipe(
      prettify({
        indent_size: 2,
        wrap_attributes: 'auto', // 'force'
        preserve_newlines: false,
        // unformatted: [],
        end_with_newline: true,
      }),
    )
    .pipe(gulp.dest(config.dest.html));
};

export const nunjucks = () => renderHtml();
export const nunjucksChanged = () => renderHtml(true);
export const nunjucksWatch = () => {
  gulp.watch(`${config.src.templates}/**/[^_]*.html`, nunjucksChanged);
  gulp.watch(`${config.src.templates}/**/_*.html`, nunjucks);
};
