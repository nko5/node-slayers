(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('htTopNav', htTopNav);

    /* @ngInject */
    function htTopNav(auth) {
        var directive = {
            bindToController: true,
            controller: TopNavController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                'navline': '='
            },
            templateUrl: 'app/layout/ht-top-nav.html'
        };

        /* @ngInject */
        function TopNavController($scope) {
            var vm = this;

            $scope.$watch(function() {
                return auth.profile;
            }, function() {
                if (auth.profile) {
                    vm.username = auth.profile.name;
                    vm.userPic = auth.profile.picture;
                } else {
                    vm.username = null;
                    vm.userPic = '';
                }
            });
        }

        return directive;
    }
})();