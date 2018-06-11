 var algorithmApp = angular.module('javascriptApp', []);
 algorithmApp.controller('algoritmController', ['$scope', '$rootScope', function($scope, $rootScope) {
     $scope.gcd = '';
     const factorial = number => {
         let product = 1;
         for (let i = 2; i <= number; i++) {
             product *= i;
         }
         return product;
     };
     $scope.factorial = factorial(4);

     function isPrime(n) {
         var divisor = 2;

         while (n > divisor) {
             if (n % divisor == 0) {
                 return false;
             } else
                 divisor++;
         }
         return true;
     }
     $scope.isPrime = isPrime(13);

     function primeFactors(n) {
         var factors = [],
             divisor = 2;

         while (n > 2) {
             if (n % divisor == 0) {
                 factors.push(divisor);
                 n = n / divisor;
             } else {
                 divisor++;
             }
         }
         return factors;
         var primfac = factors;
         console.log(primfac);
     }
     $scope.primeFactors = primeFactors(545);

     function fibonacci(n) {
         var fibo = [0, 1];

         if (n <= 2) return 1;

         for (var i = 2; i <= n; i++) {
             fibo[i] = fibo[i - 1] + fibo[i - 2];
         }

         return fibo[n];
     }
     $scope.fibonacValue = fibonacci(23);

     function greatestCommonDivisor(a, b) {
         var divisor = 2,
             greatestDivisor = 1;

         //if u pass a -ve number this will not work. fix it dude!!
         if (a < 2 || b < 2)
             return 1;

         while (a >= divisor && b >= divisor) {
             if (a % divisor == 0 && b % divisor == 0) {
                 greatestDivisor = divisor;
             }
             divisor++;
         }
         return greatestDivisor;
     }
     $scope.gcd = greatestCommonDivisor(32, 423);



     function swapNumb(a, b) {
         console.log('before swap: ', 'a: ', a, 'b: ', b);
         $scope.swapNumb = 'before swap' + 'a: ' + a + 'b: ' + b;

         b = b - a;
         a = a + b;
         b = a - b;
         console.log('after swap: ', 'a: ', a, 'b: ', b);
         $scope.swapNumb = 'after swap' + 'a: ' + a + 'b: ' + b;
     }

     swapNumb(234, 432);

     function reverse(str) {
         var rtnStr = '';
         for (var i = str.length - 1; i >= 0; i--) {
             rtnStr += str[i];
         }
         return rtnStr;
     }
     $scope.reverseString = reverse('My name is ballu');
 }]);