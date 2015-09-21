var requireDir = require('require-dir');
global.gulp = {
    buildDir:'./develop/',
    lang:[]
};
requireDir('./gulp/tasks', { recurse: true });