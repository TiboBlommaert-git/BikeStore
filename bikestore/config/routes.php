<?php
/**
 * Craft CMS Routes
 *
 * This file is a base template for defining your own custom routes. It can be safely removed,
 * or even better if you create a new file named 'routes.php' within your config/ folder, it will
 * override this file and prevent your custom routes from being overwritten during updates.
 *
 * @see https://craftcms.com/docs/routing
 */

use craft\web\UrlManager;
use yii\base\Event;

// Register a URL rules event
Event::on(
    UrlManager::class,
    UrlManager::EVENT_REGISTER_SITE_URL_RULES,
    function(\craft\events\RegisterUrlRulesEvent $event) {
        // Define your custom route pattern and controller action or route handler
        $event->rules['custom-route'] = 'controller/action';
        // You can add more routes by appending to $event->rules array
    }
);

return [
    'GET api/getall' => 'subscription/get-all-subscribers/resolve-request',
];
