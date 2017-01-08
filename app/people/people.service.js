(function () {
    'use strict';

    angular.module('app.people')
        .factory('peopleService', peopleService);

    peopleService.$inject = ['$http', '$q', '$log', 'apiEndPoint'];

    function peopleService($http, $q, $log, apiEndPoint) {

        var roleTitles = {
            staff: 'Staff Member',
            mentor: 'Mentor',
            student: 'Student'
        };

        //////// Service API ////////

        return {
            getAllPeople: getAllPeople,
            getPersonById: getPersonById,
            roleTitles: roleTitles
        };

        //////// Implementation ////////

        function getAllPeople() {
            return $http({
                url: apiEndPoint + '/persons',
                method: 'GET',
                cache: true
            }).then(function (resp) {
                return resp.data;
            }).catch(function (e) {
                return handleFailure(e, 'getAllPeople');
            });
        }

        function getPersonById(id) {
            return $http({
                url: apiEndPoint + '/persons/' + id,
                method: 'GET',
                cache: true
            }).then(function (resp) {
                return resp.data;
            }).catch(function (e) {
                return handleFailure(e, 'getPersonById');
            });
        }

        function handleFailure(e, funcName) {
            var newMessage = 'XHR Failed for ' + funcName;
            if (e.data && e.data.description) {
                newMessage = newMessage + '\n' + e.data.description;
            }
            e.data.description = newMessage;
            $log.error(newMessage);
            return $q.reject(e);
        }
    }

})();