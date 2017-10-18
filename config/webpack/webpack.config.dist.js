'use strict';
process.env.NODE_ENV = 'production';
var compose = require('ramda').compose;

var babel = require('./partials/babel');
var styles = require('./partials/styles.js');
var defineEnv = require('./partials/defineEnv');
var entryProd = require('./partials/entryProd')
var outputProd = require('./partials/outputProd');
var optimizeProd = require('./partials/optimizeProd');
var baseConfig = require('./webpack.config');

module.exports = compose(
    styles,
    babel,
    defineEnv,
    entryProd,
    outputProd,
    optimizeProd
)(baseConfig);
