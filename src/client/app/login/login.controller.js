(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['auth', 'aiStorage', '$location', 'logger'];

    /* @ngInject */
    function LoginController(auth, aiStorage, $location, logger) {
        var vm = this;

        vm.login = login;
        vm.logout = logout;
        
        activate();

        ////////////////

        function activate() {}

        function login() {
            auth.signin({}, function(profile, token) {
                // Success callback
                aiStorage.set('profile', profile);
                aiStorage.set('token', token);
                $location.path('/');
            }, function(error) {
                logger.error('Authentication error', error);
            });
        }

        function logout() {
            auth.signout();
            aiStorage.remove('profile');
            aiStorage.remove('token');
        }

    }
})();