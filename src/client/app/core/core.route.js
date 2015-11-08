(function() {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper, auth) {
        var otherwise = '/404';
        routerHelper.configureStates(getStates(), otherwise);
        
        // This hooks al auth events to check everything as soon as the app starts
        auth.hookEvents();
    }

    function getStates() {
        return [
            {
                state: '404',
                config: {
                    url: '/404',
                    templateUrl: 'app/core/404.html',
                    title: '404'
                }
            }
        ];
    }
})();
