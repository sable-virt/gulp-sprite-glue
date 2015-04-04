// through2はnodeのtransform streamをラップするもの
var through = require('through2');
var gutil = require('gulp-util');
var exec = require('child_process').exec;
var generator = require('./generator');

/**
 * プラグイン関数
 * @param dest
 * @param options
 * @returns {*}
 */
function glue(dest,options) {
    // 入力ファイルを受け取って処理するstreamオブジェクトを生成

    if (typeof dest === 'object') {
        options = dest;
        dest = null;
    }

    var commandOptions = generator.createCommand(options);

    var stream = through.obj(function (file, enc, callback) {
        if (!dest && (!options.img && !options.css)) {
            this.emit('error', new gutil.PluginError('gulp-sprite-glue', 'Required dest path or both options.img and options.css'));
            callback();
        }
        if (file.isDirectory()) {
            var command = util.createCommand(file.path,dest,commandOptions);
            if (!options.quiet) {
                gutil.log('Execute: ' + command);
            }
            exec(command, function (err, stdout, stderr) {
                if (!options.quiet) {
                    gutil.log(stdout);
                }
                callback();
            });
            this.push(file);
        } else {
            this.push(file);
        }
    });
    return stream;
}

// プラグイン関数をエクスポート
module.exports = glue;