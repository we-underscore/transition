// import gwebpack from 'webpack';
import gulp from 'gulp';
import gulpWebpack from 'webpack-stream';
import gutil from 'gulp-util';
import notify from 'gulp-notify';
import server from './server';
import config from '../config';
import webpackCfg from '../../webpack.config';

const webpackConfig = webpackCfg.createConfig;

export const webpack = () =>
  gulp
    .src('src/js/app.js')
    .pipe(gulpWebpack(webpackConfig(config.env)))
    .pipe(gulp.dest('build/js'));

export const webpackWatch = () => gulp.watch('src/js/*.js', webpack);
// const handler = (err, stats, cb) => {
//   const errors = stats.compilation.errors;

//   if (err) throw new gutil.PluginError('webpack', err);

//   if (errors.length > 0) {
//     notify
//       .onError({
//         title: 'Webpack Error',
//         message: '<%= error.message %>',
//         sound: 'Submarine',
//       })
//       .call(null, errors[0]);
//   }

//   gutil.log(
//     '[webpack]',
//     stats.toString({
//       colors: true,
//       chunks: false,
//     }),
//   );

//   server.reload();
//   if (typeof cb === 'function') cb();
// };

// export const webpack = cb =>
//   gwebpack(webpackConfig(config.env)).run();

// export const webpackWatch = () =>
//   gwebpack(webpackConfig(config.env)).watch(
//     {
//       aggregateTimeout: 100,
//       poll: false,
//     },
//     handler,
//   );
