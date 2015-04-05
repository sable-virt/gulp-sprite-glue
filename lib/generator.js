// コマンド群
var OPTIONS = require('./options');
var MULTIPLE_OPTIONS = [
    'caat',
    'html',
    'json',
    'less',
    'scss',
    'cocos2d'
];
var Generator = {
    /**
     * オプションからコマンドリストを作成する
     * @param options
     * @returns {Array}
     */
    createCommandList: function(options) {
        var commandList = [];
        if (options) {
            if (options.cmd) {
                //cmdオプションがある場合はそのまま流し込み
                commandList.push(options.cmd);
            } else {
                //プロパティ見てオプションコマンドの追加
                for (var key in options) {
                    var v = Generator.parseOption(key, options[key]);
                    if (v) {
                        commandList.push(v);
                    }
                }
            }
        }
        return commandList;
    },
    /**
     * オプションパース関数
     * @param key
     * @param value
     * @returns {*|XML|string|void}
     */
    parseOption: function(key,value) {
        var val = OPTIONS[key];
        if (!val || !value) return;
        if (MULTIPLE_OPTIONS.indexOf(key) !== -1) {
            value = value === true ? '' : '=' + value;
        }
        return val.replace('%val%',value);
    },
    /**
     * コマンドリストからコマンドを作成する
     * @param path
     * @param dest
     * @param commandList
     * @returns {string}
     */
    createCommand: function(path,dest,commandList) {
        var command = ['glue'];
        command.push(path);
        if (dest) {
            command.push(dest);
        }
        if (commandList) {
            command = command.concat(commandList);
        }
        return command.join(' ');
    }
};

module.exports = Generator;