# ab-domutil

Vanilla JS DOM Utils.

## Install

With [npm](http://npmjs.org) do:

```bash
$ npm install ab-domutil --save-dev
```

## Usage

	var domutil = require('ab-domutil');

	// add CSS rule
	domutil.addCSSRule(sheet, selector, rules, index);

	// get CSS :before value
	domutil.getCSSBeforeValue(element, property)

	// check if element is empty
	domutil.isEmpty(el);

## License

MIT
