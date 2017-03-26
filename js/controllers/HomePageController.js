angular.module('app').controller('HomePageController', function ($scope, $timeout) {
  'use strict';

	$scope.greetingText = 'Sample Test';
  $scope.currentQuestion = 0;
  $scope.goToNextQuestion = function() {
    $timeout(function(){
            $scope.currentQuestion++;
            $scope.currentQuestionData = $scope.test.questions[$scope.currentQuestion];
        }
    );
  };
  $scope.test = {
    questions:[
        {
            id:0,
            concept:'cutlery',
            level:'knowledge',
            type:'multi-choice',
            question:'Which of the following is a picture of a spoon?',
            distractors:[
                {
                    text:'picture of spoon',
                    correct:true
                },
                {text:'picture of knife'},
                {text:'picture of fork'},
                {text:'picture of car'}
            ]
        },
        {
            id:1,
            concept:'cutlery',
            level:'knowledge',
            type:'multi-choice',
            question:'Which of the following is a picture of a fork?',
            distractors:[
                {
                    text:'picture of fork',
                    correct:true
                },
                {text:'picture of knife'},
                {text:'picture of spoon'},
                {text:'picture of car'}
            ]
        },
        {
            id:2,
            concept:'cutlery',
            level:'knowledge',
            type:'multi-choice',
            question:'Which of the following is not a picture of cutlery?',
            distractors:[
                {
                    text:'picture of car',
                    correct:true
                },
                {text:'picture of knife'},
                {text:'picture of fork'},
                {text:'picture of spoon'}
            ]
        },{
            id:3,
            concept:'cutlery',
            level:'application',
            type:'multi-choice',
            question:'Which of the following is best eaten with a spoon?',
            distractors:[
                {
                    text:'Soup',
                    correct:true
                },
                {text:'Steak'},
                {text:'Apple'},
                {text:'Car'}
            ]
        },{
            id:4,
            concept:'cutlery',
            level:'application',
            type:'multi-choice',
            question:'Which of the following would usually require a knife to aid in eating?',
            distractors:[
                {
                    text:'Steak',
                    correct:true
                },
                {text:'Soup'},
                {text:'Eggs'},
                {text:'Cereal'}
            ]
        },{
            id:5,
            concept:'cutlery',
            level:'application',
            type:'multi-choice',
            question:'Which of the following is typically eaten without cutlery?',
            distractors:[
                {
                    text:'Fried Chicken',
                    correct:true
                },
                {text:'Steak'},
                {text:'Casserole'},
                {text:'Scrambled Eggs'}
            ]
        },{
            id:6,
            concept:'cutlery',
            level:'application',
            type:'multi-choice',
            question:'Which of the following is typically used to spread butter on bread?',
            distractors:[
                {
                    text:'Knife',
                    correct:true
                },
                {text:'Fork'},
                {text:'Spoon'},
                {text:'Chopsticks'}
            ]
        }
    ]
};
  $scope.currentQuestionData = $scope.test.questions[$scope.currentQuestion];
});
