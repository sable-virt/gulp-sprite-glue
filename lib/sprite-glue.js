// through2はnodeのtransform streamをラップするもの
var through = require('through2');
var gutil = require('gulp-util');
var exec = require('child_process').exec;

// コマンド群
var COMMANDS = require('./constant');
var parser = require('./parser');

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

    var commandOptions = [];

    if (options) {
        if (options.cmd) {
            //cmdオプションがある場合はそのまま流し込み
            commandOptions.push(options.cmd);
        } else {
            //プロパティ見てオプションコマンドの追加
            for (var key in options) {
                var v = parser.parseOption(key, options[key]);
                if (v) {
                    commandOptions.push(v);
                }
            }
        }
    }

    var stream = through.obj(function (file, enc, callback) {
        if (!dest && (!options.img && !options.css)) {
            this.emit('error', new gutil.PluginError('gulp-sprite-glue', 'Required dest path or both options.img and options.css'));
            callback();
        }
        if (file.isDirectory()) {
            var command = util.createCommand(file.path,dest,commandOptions);
            gutil.log('Execute: ' + command.join(' '));
            exec(command.join(' '), function (err, stdout, stderr) {
                console.log(stdout);
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