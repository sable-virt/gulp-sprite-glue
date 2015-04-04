var gutil = require('gulp-util');
var Util = {
    /**
     * オプションパース関数
     * @param key
     * @param value
     * @returns {*|XML|string|void}
     */
    parseOption: function(key,value) {
        var val = COMMANDS[key];
        if (!val) {
            gutil.log('Not found command ' + key + '(' + value + ')');
            return;
        }
        if (value === false) {
            return;
        }
        if (/^(caat|html|json|less|scss|cocos2d)$/.test(key)) {
            value = value === true ? '' : '=' + value;
        }
        return val.replace('%val%',value);
    }
};
module.exports = Util;