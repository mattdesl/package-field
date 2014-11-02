# package-field

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Command-line to get a field from current dir's package.json. Defaults to `name` field.

e.g.

For the following package.json in a folder called `foobar`:

```json
{
    "description": "this is foobar",
    "name": "foobar",
    ... etc
}
```

```sh
cd foobar
package-field description

## prints 'this is foobar' to stdout
```

## Usage

[![NPM](https://nodei.co/npm/package-field.png)](https://nodei.co/npm/package-field/)

```package-field [field] [options]```

e.g. 

```package-field description -s```

You can use `-s` to silent errors and return an empty string.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/package-field/blob/master/LICENSE.md) for details.
