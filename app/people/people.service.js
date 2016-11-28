(function() {
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

        var service = {
            getAllPeople: getAllPeople,
            getPersonById: getPersonById,
            roleTitles: roleTitles
        };
        return service;

        //////// Implementation ////////

        function getAllPeople() {
            return $http({
                    url: apiEndPoint + '/persons',
                    method: 'GET',
                    cache: true
                })
                .then(getAllPeopleComplete)
                .catch(getAllPeopleFailed);

            function getAllPeopleComplete(data) {
                return data.data;
            }

            function getAllPeopleFailed(e) {
                return handleFailure(e, 'getAllPeople');
            }
        }

        function getPersonById(id) {
            return $http({
                    url: apiEndPoint + '/persons/' + id,
                    method: 'GET',
                    cache: true
                })
                .then(getPersonByIdComplete)
                .catch(getPersonByIdFailed);

            function getPersonByIdComplete(resp) {
                return resp.data;
            }

            function getPersonByIdFailed(e) {
                return handleFailure(e, 'getPersonById');
            }
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