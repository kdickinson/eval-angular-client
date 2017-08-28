angular.module('directives.questions.multiChoice', [])
.directive('question', [function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            questionData: '@'
        },
        templateUrl: './templates/multi_choice_question.html'
    }
}]);