# stylelint-config-recommended-less
>The recommended shareable Less config for stylelint.

It turns on all the [possible errors](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules/list.md#possible-errors) rules within stylelint

Use it as is or as a foundation for your own config.

## Installation

First install Stylelint and stylelint-less packages

```
npm install stylelint stylelint-less --save-dev
```

and then install this config

```
npm install stylelint stylelint-config-recommended-less --save-dev
```

## Usage

If you've installed `stylelint-config-recommended-less` locally within your project, just set your `stylelint` config to:

```
{
  "extends": "stylelint-config-recommended-less"
}
```

If you've globally installed `stylelint-config-recommended-less` using the -g flag, then you'll need to use the absolute path to `stylelint-config-recommended-less` in your config e.g.

```
{
  "extends": "/absolute/path/to/stylelint-config-recommended-less"
}
```

## Extending the config

You can add `rules` key to your config there you can override and add new rules
```
{
  "extends": "stylelint-config-recommended-less",
  "rules": {
    "block-no-empty": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}

```


