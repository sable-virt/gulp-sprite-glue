/*
 * grunt-sprite-glue
 * https://github.com/frontainer/grunt-sprite-glue
 *
 * Copyright (c) 2014 frontainer
 * Licensed under the MIT license.
 */

'use strict';

var generator = require('./generator');
var exec = require('child_process').exec;

function glue(src,dest,options,callback) {
    // コマンドリスト作成
    var commandList = generator.createCommandList(options);

    // コマンドの生成
    var command = generator.createCommand(src, dest, commandList);

    //コマンド実行
    exec(command, callback);
    return command;
}
module.exports = glue;