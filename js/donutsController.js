angular.module('DonutsApp', [])
  .controller('DonutsController', DonutsController);

function DonutsController($http){
  var self = this;
  self.all = [];

  function getDonuts() {
    $http
    .get('http://api.doughnuts.ga/doughnuts')
    .then(function(response) {
      self.all = response.data;
      console.log(response);
    })
  }

  getDonuts();

  self.addDonut = addDonut;
  self.newDonut = {};

  function addDonut() {
    $http
    .post('http://api.doughnuts.ga/doughnuts', self.newDonut)
    .then(function(response) {
    self.all.push(response.data);
    })
  
    self.newDonut = {};
  }
}

  function deleteDonut(id) {
    $http
    .delete('http://api.doughnuts.ga/doughnuts' + id)
    .then(function(response) {
      self.all = response.data;
      console.log(response)
      console.log(response.data)
    })
  }
// put(url, data, [config]);
// patch(url, data, [config]);

