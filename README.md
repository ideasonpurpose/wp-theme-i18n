# IOP WordPress Theme Internationalization

#### Version 0.1.0

This library contains i18n files for translating common elements and features. This library should be included in all our delivered themes and will provide shared, baseline translations across projects. Add new languages here so that all projects can benefit from expanded multi-lingual support.

While this was built for use at Ideas On Purpose, the language strings are mostly common phrases and may be useful as a starting point.

## What's in here?

Primarily common admin labels such as "Site Options", "Header", and "Footer", plus design credits and "Read more".

Custom post_types and Taxonomies built from [wp-data-model](https://github.com/ideasonpurpose/wp-data-model) should include their own translation files.

## Adding translations

The translations in this project use the [gettext Portable Object Template](https://www.icanlocalize.com/site/tutorials/how-to-translate-with-gettext-po-and-pot-files/) system. Edit the human-readable **\*.po** files in **languages/**. WordPress loads the compiled **\*.mo** files, not the **\*.po** files.

Translation targets are case-sensitive, so "Dog" and "dog" both need a translation. Name new files with the WordPress locale code (`es_ES`, `fr_FR`). Japanese is `ja`, not `ja_JP`.

### Compile .mo files

`scripts/compile-mo.js` compiles every `languages/*.po` file into a sibling `.mo` file. It uses the [`gettext-parser`](https://www.npmjs.com/package/gettext-parser) package, so GNU gettext does not need to be installed. Commands also work with pnpm (preferred).

```sh
npm install
npm run i18n:mo
```

The package.json `version` runs this automatically before tagging. After a hand-edit, run the `i18n:mo` script so the committed `.mo` files stay in sync.

### Manual alternative: Poedit

[Poedit](https://poedit.net) can edit the `.po` files and write the `.mo` files itself. Use it instead of the compile script if you prefer a GUI.

- **_Update an existing translation:_**<br>
  Open the **\*.po** file with Poedit. Choose **Translation > Update from POT File...**, then select **languages/wp-theme.pot** to refresh the strings available for translation.

- **_Add a new language translation:_**<br>
  Select **File > New from POT/PO File...**, then open **languages/wp-theme.pot**. Choose the language, then click OK.

Available translations appear as a list. Select a string, then enter the translation at the bottom of the window.

Save the file alongside **languages/wp-theme.pot**. Poedit writes both the **\*.po** and the **\*.mo**. If you edit a `.po` file by hand afterward, run `npm run i18n:mo` rather than reopening it in Poedit.

## Installation

### Composer

Add/merge the following to your composer.json file, then run composer install to add the package.

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/ideasonpurpose/wp-theme-i18n"
    }
  ],
  "require": {
    "ideasonpurpose/wp-theme-i18n": "dev-main"
  }
}

```

### Instantiation

Add this line to functions.php to initialize the library and load the text-domain.

```php
new \IdeasOnPurpose\WP\I18n();
```

### Text Domain

The text domain for this project is **`iopwp`**
Example translations look like this:

```php
__('Site Options', 'iopwp');
```
