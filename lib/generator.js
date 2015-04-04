var gutil = require('gulp-util');
// コマンド群
var OPTIONS = require('./options');
var Generator = {
    createOption: function(options) {
        var commandOptions = [];
        if (options) {
            if (options.cmd) {
                //cmdオプションがある場合はそのまま流し込み
                commandOptions.push(options.cmd);
            } else {
                //プロパティ見てオプションコマンドの追加
                for (var key in options) {
                    var v = Generator.parseOption(key, options[key]);
                    if (v) {
                        commandOptions.push(v);
                    }
                }
            }
        }
        return commandOptions;
    },
    /**
     * オプションパース関数
     * @param key
     * @param value
     * @returns {*|XML|string|void}
     */
    parseOption: function(key,value) {
        var val = OPTIONS[key];
        if (!val) {
            gutil.log('Not found command ' + key + '(' + value + ')');
            return;
        }
        if (value === false) {
            return;
        }
        return val.replace('%val%',value);
    },

    createCommand: function(path,dest,options) {
        var command = ['glue'];
        command.push(path);
        if (dest) {
            command.push(dest);
        }
        if (options) {
            command = command.concat(options);
        }
        return command.join(' ');
    }
};

module.exports = Generator;