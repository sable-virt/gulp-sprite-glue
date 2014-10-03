# gulp-sprite-glue
> gulp-sprite-glue plugin for [gulp](https://github.com/wearefractal/gulp)

## Required
This plugin requires

* [gulp](https://github.com/wearefractal/gulp)
* [glue](http://glue.readthedocs.org/en/latest/)

## Usage

First, install `gulp-sprite-glue` as a development dependency:

```shell
npm install --save-dev gulp-sprite-glue
```

Then, add it to your `gulpfile.js`:

```javascript
var glue = require("gulp-sprite-glue");

gulp.src("./src/*")
	.pipe(glue("/path/to/sprites",{
		// options
	}));
	//gule("dest path",options);
```

or

```
var glue = require("gulp-sprite-glue");

gulp.src("./src/*")
	.pipe(glue({
	    css: '/path/to/css_dest',
	    img: '/path/to/img_dest'
	}));
	//gule(options);
	//Both css and img options required.
```

## API

### gulp-sprite-glue(options)

#### options.crop
Type: `Boolean`
Default value: `false`

Optimize our sprite by croping all the unnecessary transparent spaces that the original images could have.

#### options.caat
Type: `Boolean`
Default value: `false`

Generate both a sprite image and a caat metadata file.

#### options.cachebuster
Type: `Boolean`
Default value: `false`

Automatically add the hash of the PNG file to the CSS url

#### options.cachebusterFilename
Type: `String`
Default value: `null`

Insted of using the hash of the PNG as a queryarg it uses it as part of the filename.

#### options.cachebusterFilenameOnlySprites
Type: `Boolean`
Default value: `false`

Only apply filename cachebusting to the sprite image and not to both the CSS and the sprite image.

#### options.cocos2d
Type: `Boolean`
Default value: `false`

Generate both a sprite image and a xml metadata file compatible with cocos2d.

#### options.css
Type: `String`
Default value: `null`

Choose an individual folder for css  you.

#### options.img
Type: `String`
Default value: `null`

Choose an individual folder for image.

#### options.cssTemplate
Type: `String`
Default value: `null`

You can use your own css template

#### options.force
Type: `Boolean`
Default value: `false`

In order to avoid this behaviour you can use force and glue will always build the sprites.

#### options.followLinks
Type: `Boolean`
Default value: `false`

Follow symbolic links.

#### options.html
Type: `Boolean`
Default value: `false`

Generate a test html per sprite using all the available CSS classes. This option is only useful for testing purposes.

#### options.json
Type: `Boolean`
Default value: `false`

Generate both a sprite image and a json metadata file.

#### options.jsonFormat
Type: `String`
Default value: `null`

You can customize how the generated JSON will look. You can choose between array and hash.

#### options.less
Type: `Boolean`
Default value: `false`

Glue can also create .less files

#### options.lessTemplate
Type: `String`
Default value: `null`

You can use your own less template

#### options.margin
Type: `Number`
Default value: `null`

If you want to spread the images around the sprite but you don’t want to count this space as image width/height.

#### options.namespace
Type: `String`
Default value: `null`

your own namespace you can override the default one.

#### options.noImg
Type: `Boolean`
Default value: `false`

Don’t create any sprite image.

#### options.noCss
Type: `Boolean`
Default value: `false`

Don’t create any CSS file.

#### options.ordering
Type: `String`
Default value: `null`

Before processing the images using the algorithm glue orders the images.

* maxside
* width
* height
* area
* filename

#### options.padding
Type: `Number`
Default value: `null`

If you want to add the same padding around all images.

#### options.png8
Type: `Boolean`
Default value: `false`

By using the flag png8 the output image format will be png8 instead of png32.

#### options.project
Type: `Boolean`
Default value: `false`

Generate several sprites for a project.

#### options.pseudoClassSeparator
Type: `String`
Default value: `null`

using the filename of the source images you can customize the pseudo class related to the images.

#### options.quiet
Type: `Boolean`
Default value: `false`

This flag will make glue suppress all console output.

#### options.recursive
Type: `Boolean`
Default value: `false`

Read directories recursively and add all the images to the same sprite.

#### options.ratios
Type: `String`
Default value: `null`

Automatically scale down your sprites to automatically fit them into low-dpi devices.

#### options.retina
Type: `Boolean`
Default value: `false`

The option retina is only a shortcut for ratios=2,1.

#### options.source
Type: `String`
Default value: `null`

Source directory.

#### options.output
Type: `String`
Default value: `null`

Output directory.

#### options.scss
Type: `Boolean`
Default value: `false`

Glue can also create .scss files.

#### options.scssTemplate
Type: `String`
Default value: `null`

You can use your own scss template

#### options.separator
Type: `String`
Default value: `null`

Separator for the CSS class names.

#### options.spriteNamespace
Type: `String`
Default value: `null`

Sprite’s name as past of the CSS class namespace.

#### options.url
Type: `String`
Default value: `null`

PNG file name the relative url between the CSS and the PNG file.

#### options.watch
Type: `Boolean`
Default value: `false`

While you are developing a site it could be quite frustrating running Glue.

## License
MIT

Copyright (c) 2014 frontainer

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.