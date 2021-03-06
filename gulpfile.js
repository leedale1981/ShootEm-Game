var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackdevserver = require("webpack-dev-server");

gulp.task("webpack", function(callback) {
    var myConfig = require('./webpack.config.js');

    // run webpack
    webpack(myConfig, function(err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task("webpack-mobile", function(callback) {
    var myConfig = require('./webpack.mobile.config.js');

    // run webpack
    webpack(myConfig, function(err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server

    var myConfig = require('./webpack.config.js');
    var compiler = webpack(myConfig, function(err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });

    new webpackdevserver(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});