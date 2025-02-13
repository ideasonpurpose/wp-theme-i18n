<?php

namespace IdeasOnPurpose\WP;

class I18n
{
    public $text_domain = 'iopwp';

    public function __construct()
    {
        /**
         * Register our text-domain to load theme-specific translations
         */
        add_action(
            'after_setup_theme',
            fn() => load_theme_textdomain($this->text_domain, dirname(__DIR__) . '/languages')
        );
    }
}
