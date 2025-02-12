# IOP WordPress Theme Internationalization

This library contains i18n files for translating common elements and features. This library should be included in all our delivered themes and will provide shared, baseline translations across projects. Add new languages here so that all projects can benefit from expanded multi-lingual support.

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
new WP\I18n();
```

### Text Domain

The text domain for this projects is **`iop-wp`**
Example translations look like this:

```php
__('Site Options', 'iopwp');
```

## What's in here?

Primarily strings from common things like "Site Options", "Header" and "Footer", but also common menu names like "Main Menu" and "Footer Menu".

Custom Post_types and Taxonomies built from [wp-data-model](https://github.com/ideasonpurpose/wp-data-model) should include their own translation files.

## Adding translations

The translations in this project use the [gettext Portable Object Template](https://www.icanlocalize.com/site/tutorials/how-to-translate-with-gettext-po-and-pot-files/) system.

These instructions use the mostly-free [Poedit](https://poedit.net) application. Other tools may also work.

### Add or Update Language Translations

- **_Update an existing translation:_**<br>
  Open the **\*.po** file with Poedit. Choose **Translation > Update from POT File...**, then select select **language/wp-core-theme.pot** to refresh the strings available for translation.

- **_Add a new language translation:_**<br>
  Select **File > New from POT/PO File...**, then open **language/wp-core-theme.pot**. Select a language which includes a country in parentheses, then click OK. (WordPress needs the country-code to correctly associate translations)

Available translations appear as a list. Select a string, then enter the translation at the bottom of the window. Translation targets are case-sensitive, so "Dog" and "dog" will both need to be translated.

Save the file alongside **language/wp-core-theme.pot**. Poedit will create two files, a human-readable **xx_XX.po** and an optimized, machine-readable **xx_XX.po** file.

Do not hand-edit **\*.po** files or they will no longer be in sync with the generated **\*.mo** files.
