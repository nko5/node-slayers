(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    core.config(auth0config);

    auth0config.$inject = ['authProvider'];

    /* @ngInject */
    function auth0config(authProvider) {
        authProvider.init({
            domain: 'oneup.auth0.com',
            clientID: 'Gb2ajrTJyBHSYf0IBsInshMYxBV38PH7',
            loginState: 'login' // matches login state
        });
    }

    var config = {
        appErrorPrefix: '[oneUp Error] ',
        appTitle: 'oneUp'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
    /* @ngInject */
    function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({
            docTitle: config.appTitle + ': '
        });
    }

})();