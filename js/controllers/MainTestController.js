'use strict';
angular.module('controllers.test.main', 
['factories.test.data', 
'testDataFactory'])
.controller('MainTestController', 
['$scope', 
'testDataFactory',
function ($scope, 
  testDataFactory) {
   _this = this;
   _this.title = 'Sample Test';
   _this.goToNextQuestion = function () {
    $scope.$apply(function () {
      _this.currentQuestionData = testDataFactory.getNextQuestion;
    });
 };
});
