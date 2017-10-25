'use strict';
/*
 * Karma Configuration: 'full' version.
 *
 * This configuration runs a temporary `webpack-dev-server` and builds
 * the test files one-off for just a single run. This is appropriate for a
 * CI environment or if you're not otherwise running `npm run dev|hot`.
 */
var path = require('path');
var webpackCfg = require('../webpack/webpack.config.test');

var MAIN_PATH = path.join(process.cwd(), 'test/main.js');
var PREPROCESSORS = {};
PREPROCESSORS[MAIN_PATH] = ['webpack', 'sourcemap'];

module.exports = function (config) {
    config.set({
        autoWatch: true,
        basePath: '.', // repository root.
        browsers: ['PhantomJS'],
        client: {
            mocha: {
                ui: 'bdd'
            }
        },
        files: [
            // Sinon has issues with webpack. Do global include.
            require('dash-components-archetype-dev/require').resolve('sinon/pkg/sinon'),
            '../../node_modules/phantomjs-polyfill-find/find-polyfill.js',

            // Test bundle (created via local webpack-dev-server in this config).
            MAIN_PATH
        ],
        frameworks: ['mocha', 'phantomjs-shim'],
        port: 9999,
        reporters: ['spec'],
        singleRun: true,
        preprocessors: PREPROCESSORS,
        webpack: webpackCfg,
        webpackServer: {
            port: 3002, // Choose a non-conflicting port (3000 app, 3001 test dev)
            quiet: false,
            noInfo: true,
            stats: {
                assets: false,
                colors: true,
                version: false,
                hash: false,
                timings: false,
                chunks: false,
                chunkModules: false
            }
        }
    });
};
