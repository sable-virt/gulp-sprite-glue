// through2はnodeのtransform streamをラップするもの
var through = require('through2');
var gutil = require('gulp-util');
var exec = require('child_process').exec;

// コマンド群
var COMMANDS = {
    algorithm: '--algorithm=%val%',
    crop: '--crop',
    caat: '--caat%val%',
    cachebuster: '--cachebuster',
    cachebusterFilename: '--cachebuster-filename',
    cachebusterFilenameOnlySprites: '--cachebuster-filename-only-sprites',
    cocos2d: '--cocos2d%val%',
    css: '--css=%val%',
    img: '--img=%val%',
    cssTemplate: '--css-template=%val%',
    force: '--force',
    followLinks: '--follow-links',
    html: '--html%val%',
    json: '--json%val%',
    jsonFormat: '--json-format=%val%',
    less: '--less%val%',
    lessTemplate: '--less-template=%val%',
    margin: '--margin=%val%',
    namespace: '--namespace=%val%',
    noImg: '--no-img',
    noCss: '--no-css',
    ordering: '--ordering=%val%',
    padding: '--padding=%val%',
    png8: '--png8',
    project: '--project',
    pseudoClassSeparator: '--pseudo-class-separator=%val%',
    quiet: '--quiet',
    recursive: '--recursive',
    ratios: '--ratios=%val%',
    retina: '--retina',
    source: '--source=%val%',
    output: '--output=%val%',
    scss: '--scss%val%',
    scssTemplate: '--scss-template=%val%',
    separator: '--separator=%val%',
    spriteNamespace: '--sprite-namespace=%val%',
    url: '--url=%val%',
    watch: '--watch'
};

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
                var v = parseOption(key, options[key]);
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
            var command = ['glue'];
            command.push('"'+file.path+'"');
            if (dest) {
                command.push('"'+dest+'"');
            }
            command = command.concat(commandOptions);

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

/**
 * オプションパース関数
 * @param key
 * @param value
 * @returns {*|XML|string|void}
 */
function parseOption(key,value) {
    var val = COMMANDS[key];
    if (!val) {
        gutil.log('Not found command ' + key + '(' + value + ')');
        return;
    }
    if (!value || value === false) {
        return;
    }
    if (/^(caat|html|json|less|scss|cocos2d)$/.test(key)) {
        value = value === true ? '' : '=' + value;
    }
    return val.replace('%val%',value);
}

// プラグイン関数をエクスポート
module.exports = glue;
