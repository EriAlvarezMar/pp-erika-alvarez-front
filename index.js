let app = angular.module('Front', [])

app.controller('MainController', function ($scope, $http) {

    $scope.posts = [];
    $scope._id = null;
    $scope.name = '';
    $scope.phone = ''
    $scope.age = '';
    $scope.gender = '';
    $scope.data = '';
    $scope.agregarUsuario = agregarUsuario;
    $scope.eliminarUsuario = eliminarUsuario;

    getTasks()

    function getTasks() {
        $http({
            method: 'get',
            url: 'http://localhost:9000/tasks/'
        }).then(function (resp) {

            console.log(resp)
            $scope.posts = resp.data;

        }).catch(function (error) {
            console.log(error, 'can not get data.');
        });
    };

    function agregarUsuario() {
        $http({
            method: 'post',
            url: 'http://localhost:9000/tasks/',
            params: {
                nombre: $scope.name,
                telefono: $scope.phone,
                edad: $scope.age,
                genero: $scope.gender,
                fecha: $scope.date,
                _id: $scope._id
            }
        }).then(function (resp) {

        }).catch(function (error) {
            console.log(error, 'Error al guardar el usuario.');
        });
    };
    
    function eliminarUsuario(id) {
        $http({
            method: 'post',
            url: 'http://localhost:9000/tasks/:_id',
            params: {
                _id: id
            }
        }).then(function (resp) {

            console.log(resp)
            $scope.posts = resp.data;

        }).catch(function (error) {
            console.log(error, 'Error al eliminar  usuario.');
        });
    }
})
