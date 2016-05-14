'use strict';

angular.module('com.module.users')
    .controller('UserCtrl', function (ApiService, $scope, $window) {
        $scope.loading = true;
        $scope.searchText = '';
        ApiService.getUsers(localStorage.accessToken, function (response) {

            $scope.users = response.data;
            $scope.myOrder = 'id';
            $scope.myReverse = false;
            $scope.loading = false;
            $scope.orderMe = function (orderBy) {
                $scope.myOrder = orderBy;
                $scope.myReverse = ($scope.myOrder == orderBy) ? $scope.myReverse = !$scope.myReverse : $scope.myReverse = fasle;
            }

            $scope.viewby = 10;
            $scope.currentPage = 1;
            $scope.itemsPerPage = $scope.viewby;
            $scope.maxSize = 5;
            $scope.totalItems = $scope.users.length;
            $scope.totalPage = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.setItemsPerPage = function (num) {
                $scope.itemsPerPage = num;
                $scope.currentPage = 1; //reset to first paghe
                $scope.totalPage = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            };
        })
    })