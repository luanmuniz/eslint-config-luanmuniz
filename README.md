# eslint-config-luanmuniz [![npm][npm-image]][npm-url]

[![Node Build][nodei-image]][nodei-url]

An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for my projects

## Install

```bash
npm install eslint-config-luanmuniz
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use the JavaScript Standard Style shareable config, first run this:

```bash
npm install --save-dev eslint-config-luanmuniz
```

Then, add this to your .eslintrc file:

```json
{
  "extends": "luanmuniz"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your `.eslintrc` file.

## Tests

`npm test`

## Contributing

Please, follow the [Code of Conduct](https://gist.github.com/luanmuniz/92b159ee3d437dc49eb8ad6508e2ee39) and check the [Contributing](CONTRIBUTING.md) documentation, there're just a few steps.

## Support or Contact

Having trouble? Or new ideas? Post a new issue! We will be glad to help you!

## License

[MIT License](https://gist.github.com/luanmuniz/aab4d433106ec340c1f3b861aff34748) © Luan Muniz

[npm-image]: https://img.shields.io/npm/v/eslint-config-luanmuniz.svg
[npm-url]: https://npmjs.org/package/eslint-config-luanmuniz
[nodei-image]: https://nodei.co/npm/eslint-config-luanmuniz.png
[nodei-url]: https://nodei.co/npm/eslint-config-luanmuniz
