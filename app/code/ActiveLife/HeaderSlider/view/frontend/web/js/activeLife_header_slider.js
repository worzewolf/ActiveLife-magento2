define([
    'jquery',
    'owlCarousel'
], function($) {
    'use strict';
    return function(config, element) {
        $('.active-life_header-links').owlCarousel({
            loop: true,
            navigation: true,
            items: 2,
            responsive: {
                0: {
                    items: 1
                },
                968: {
                    items: 2
                }
            }
        });
    }
});
