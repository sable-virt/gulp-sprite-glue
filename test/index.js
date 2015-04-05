var assert = require('power-assert');
var gsg = require('../index');
var generator = require('../lib/generator');

var FULL_OPTIONS = [
    '--algorithm=square',
    '--crop',
    '--caat',
    '--cachebuster',
    '--cachebuster-filename',
    '--cachebuster-filename-only-sprites',
    '--cocos2d',
    '--css=./test/css',
    '--img=./test/sprite',
    '--css-template=./my_template.jinja',
    '--force',
    '--follow-links',
    '--html',
    '--json',
    '--json-format=hash',
    '--less',
    '--less-template=./my_template.jinja',
    '--margin=10 20 30 40',
    '--namespace=hoge',
    '--no-img',
    '--no-css',
    '--ordering=maxside',
    '--padding=10 20 30 40',
    '--png8',
    '--project',
    '--pseudo-class-separator=_',
    '--quiet',
    '--recursive',
    '--ratios=2,1.5,1',
    '--retina',
    '--source=./dir',
    '--output=./output',
    '--scss',
    '--scss-template=./my_template.jinja',
    '--separator=-',
    '--sprite-namespace=ns',
    '--url=http://example.com',
    '--watch'
];

describe('gulp-sprite-glue', function() {

    beforeEach(function() {

    });
    it('createCommandList - use cmd option', function() {
        assert.deepEqual(
            generator.createCommandList({
                cmd: 'glue icons sprites',
                dummy: 'test'
            }),
            ['glue icons sprites']
        );
    });

    it('createCommandList - default', function() {
        assert.deepEqual(generator.createCommandList({}), []);
    });

    it('createCommandList', function() {
        assert.deepEqual(
            generator.createCommandList({
                algorithm: 'square',
                crop: true,
                caat: true,
                cachebuster: true,
                cachebusterFilename: true,
                cachebusterFilenameOnlySprites: true,
                cocos2d: true,
                css: './test/css',
                img: './test/sprite',
                cssTemplate: './my_template.jinja',
                force: true,
                followLinks: true,
                html: true,
                json: true,
                jsonFormat: 'hash',
                less: true,
                lessTemplate: './my_template.jinja',
                margin: '10 20 30 40',
                namespace: 'hoge',
                noImg: true,
                noCss: true,
                ordering: 'maxside',
                padding: '10 20 30 40',
                png8: true,
                project: true,
                pseudoClassSeparator: '_',
                quiet: true,
                recursive: true,
                ratios: '2,1.5,1',
                retina: true,
                source: './dir',
                output: './output',
                scss: true,
                scssTemplate: './my_template.jinja',
                separator: '-',
                spriteNamespace: 'ns',
                url: 'http://example.com',
                watch: true
            }),
            FULL_OPTIONS
        );
    });
    it('createCommand', function() {
        var com = generator.createCommand('./sprite','./output',FULL_OPTIONS);
        assert(com === 'glue ./sprite ./output --algorithm=square --crop --caat --cachebuster --cachebuster-filename --cachebuster-filename-only-sprites --cocos2d --css=./test/css --img=./test/sprite --css-template=./my_template.jinja --force --follow-links --html --json --json-format=hash --less --less-template=./my_template.jinja --margin=10 20 30 40 --namespace=hoge --no-img --no-css --ordering=maxside --padding=10 20 30 40 --png8 --project --pseudo-class-separator=_ --quiet --recursive --ratios=2,1.5,1 --retina --source=./dir --output=./output --scss --scss-template=./my_template.jinja --separator=- --sprite-namespace=ns --url=http://example.com --watch');

        com = generator.createCommand('./sprite','./output',[]);
        assert(com === 'glue ./sprite ./output');

        com = generator.createCommand('./sprite');
        assert(com === 'glue ./sprite');
    });
});