// through2はnodeのtransform streamをラップするもの
var through = require('through2');
var gutil = require('gulp-util');
var glue = require('./lib/glue');

/**
 * プラグイン関数
 * @param dest
 * @param options
 * @returns {*}
 */
function index(dest,options) {
    // 入力ファイルを受け取って処理するstreamオブジェクトを生成
    options = options ? options : {};
    if (typeof dest === 'object') {
        options = dest;
        dest = null;
    }
    return through.obj(function (file, enc, callback) {
        if (!dest && (!options.img && !options.css)) {
            this.emit('error', new gutil.PluginError('gulp-sprite-glue', 'Required dest path or both options.img and options.css'));
            callback();
        }
        if (file.isDirectory()) {
            var command = glue(file.path,dest,options, function(err,stdout,stderr) {
                if (err) throw new Error(err);
                if (!options.quiet) {
                    gutil.log(stdout);
                }
                callback();
            });
            if (!options.quiet) {
                gutil.log('Execute: ' + command);
            }
            this.push(file);
        } else {
            this.push(file);
        }
    });
}

// プラグイン関数をエクスポート
module.exports = index;