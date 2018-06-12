(function(angular) {
    'use strict';
    angular.module('do-check-module', [])
        .component('app', {
            template: 'Month: <input ng-model="$ctrl.month" ng-change="$ctrl.updateDate()">' +
                'Date: {{ $ctrl.date }}' +
                '<test date="$ctrl.date"></test>',
            controller: function() {
                this.date = new Date();
                this.month = this.date.getMonth();
                this.updateDate = function() {
                    this.date.setMonth(this.month);
                };
            }
        })
        .component('test', {
            bindings: { date: '<' },
            template: '<pre>{{ $ctrl.log | json }}</pre>',
            controller: function() {
                var previousValue;
                this.log = [];
                this.$doCheck = function() {
                    var currentValue = this.date && this.date.valueOf();
                    if (previousValue !== currentValue) {
                        this.log.push('doCheck: date mutated: ' + this.date);
                        previousValue = currentValue;
                    }
                };
            }
        }).directive('myDad', function() {
            return {
                restrict: 'E',
                controller: function($scope) {
                    $scope.name = 'XXX';
                    $scope.greeting = 'Hello!';
                    $scope.click1 = function() {
                        alert('click1');
                    }
                    $scope.click2 = function() {
                        alert('click2');
                    }
                },
                compile: function(tHtml, tAttr) {
                    tHtml.append('<div ng-click="click1();">Adding New Link in Complie with ng-click</div>')
                    return {
                        post: function(scope, ele, attr) {
                            ele.append('<div ng-click="click2();">Adding New Link In Post Link with ng-click</div>')
                        }
                    }
                }
            };
        }).directive('mySon', function() {
            return {
                restrict: 'E',
                // require: '^myDad',
                link: function(scope, elem, attr) {
                    scope.sonSays = 'Hey, I am son, and my dad is ' + scope.name;
                }
            };
        }).directive('myDirective', function() {
            return {
                restrict: 'E',
                compile: function(tElem, tAttrs) {
                    console.log(': compile');
                    console.log(tElem.html());
                    return {
                        pre: function(scope, iElem, iAttrs) {
                            console.log(': pre link');
                            scope.balluname = 'pre';
                            console.log(iElem.html());
                        },
                        post: function(scope, iElem, iAttrs) {
                            scope.balluname = 'post';
                            console.log(': post link');
                            console.log(iElem.html());
                        }
                    }
                }
            }
        });
})(window.angular);