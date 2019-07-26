// Require all tasks in gulp/tasks, including subfolders
// require('require-dir')('./gulp/tasks', {recurse: true});
// import gulp from 'gulp';
import { dev, prod, deploy } from './gulp/tasks/default';

exports.dev = dev;
exports.build = prod;
exports.deploy = deploy;
