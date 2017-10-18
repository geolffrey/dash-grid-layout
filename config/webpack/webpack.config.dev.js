'use strict';

var compose = require('ramda').compose;

var babel = require('./partials/babel');
var styles = require('./partials/styles.js');
var defineEnv = require('./partials/defineEnv');
var entryDev = require('./partials/entryDev')
var outputDev = require('./partials/outputDev');
var sourceMapDev = require('./partials/sourceMapDev');
var baseConfig = require('./webpack.config');

module.exports = compose(
    styles,
    babel,
    defineEnv,
    entryDev,
    outputDev,
    sourceMapDev
)(baseConfig);
