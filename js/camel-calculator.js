// IIFE
var camelCalculator = (function(){

    var calculate = function (options) {
        // if options argument is undefined
        if(!options) {
            options = {};
        }

        //extracting arguments
        var age = options.age || 22;
        var height = options.height || 160;
        var hairColor = options.hairColor || 'black';
        var eyeColor = options.eyeColor || 'blue';
        var muscles = options.muscles || 'normal';
        var foodHabit = options.foodHabit || 'vegetarian';

        // evaluate results
        function evaluateAge(age) {
            return Math.round(age / 2);
        }
        function evaluateHeight(height) {
            return Math.round((height - 100) / 2);
        }
        function evaluateHairColor(hairColor) {
            var hairColorRules = {
                blonde : 10,
                brown: 7,
                black: 5,
                red: 2
            };
            return hairColorRules[hairColor];
        }
        function evaluateEyeColor(eyeColor) {
            var eyeColorRules = {
                blue : 3,
                green: 5,
                brown: 10
            };
            return eyeColorRules[eyeColor];
        }
        function evaluateMuscles(muscles) {
            var musclesRules = {
                normal: 15,
                strong : 30
            };
            return musclesRules[muscles];
        }
        function evaluateFoodHabit(food) {
            var foodRules = {
                meatLover : 10,
                vegetarian: 20
            };
            return foodRules[food];
        }

        var numberOfCamels = function () {
            return(
                evaluateAge(age) +
                evaluateHeight(height) +
                evaluateHairColor(hairColor) +
                evaluateEyeColor(eyeColor) +
                evaluateMuscles(muscles) +
                evaluateFoodHabit(foodHabit)
            );

        };

        return numberOfCamels();
    };

    var exports = {
        calculate: calculate
    };

    return exports;
})();
