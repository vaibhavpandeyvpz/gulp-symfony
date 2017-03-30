var _       = require('lodash');
var extend  = require('extend');
var fs      = require('fs');
var glob    = require('glob');
var path    = require('path');

module.exports = function (gulp, options) {
    var task = gulp.task;
    if (_.isString(options)) {
        options = {bundles: options};
    }
    options = extend({
        bundles: 'src/*',
        filepath: 'Resources/public/gulptasks.js',
        namespace: function (bundle, task) {
            bundle = _.replace(bundle, /Bundle$/, '');
            return _.kebabCase(bundle) + ':' + task;
        }
    }, options || {});
    var bundles = [];
    if (_.isArray(options.bundles)) {
        bundles = options.bundles;
    } else if (_.isString(options.bundles)) {
        bundles = glob.sync(options.bundles);
    }
    bundles.forEach(function (bundle) {
        var filepath = path.join(bundle, options.filepath);
        if (fs.existsSync(filepath)) {
            if (_.isFunction(options.namespace)) {
                gulp.task = function (name, dependencies, creator) {
                    name = options.namespace.call(options, path.basename(bundle), name);
                    return task.call(this, name, dependencies, creator);
                };
            }
            require('./' + path.relative(__dirname, filepath))(gulp);
        }
    });
    gulp.task = task;
};
