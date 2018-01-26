// wait for document ready
$(function() {

    // selectors
    var form = $('.form-container, .title');
    var result = $('.result-container');
    var slider = $('input[type=range]');
    var ageOutput = $('.age-output');
    var heightOutput = $('.height-output');
    var hairColor = 'black'; //default value
    var eyeColor = 'blue'; //default value
    var muscles = 'normal'; //default value
    var food = 'vegetarian'; //default value


    // update range slider output when slide changes
    $(document).on('input', '#ageInput', function(e) {
        ageOutput.html(e.currentTarget.value);
    });
    $(document).on('input', '#heightInput', function(e) {
        heightOutput.html(e.currentTarget.value);
    });

    //initiate range slider
    slider.rangeslider({
        polyfill: false
    });



    //handle radio button hair color change
    $('input[type=radio][name=hairColor]').change(function (e) {
        $('input[type=radio][name=hairColor]').attr('checked',false).next('label').removeClass('active');
        $(e.target).attr('checked', true).next('label').addClass('active');
        hairColor = e.target.value;
    });

    //handle radio button eye color change
    $('input[type=radio][name=eyeColor]').change(function (e) {
        $('input[type=radio][name=eyeColor]').attr('checked',false).next('label').removeClass('active');
        $(e.target).attr('checked', true).next('label').addClass('active');
        eyeColor = e.target.value;
    });

    //handle radio button Muscles change
    $('input[type=radio][name=muscles]').change(function (e) {
        $('input[type=radio][name=muscles]').attr('checked',false).next('label').removeClass('active');
        $(e.target).attr('checked', true).next('label').addClass('active');
        muscles = e.target.value;
    });

    //handle radio button Muscles change
    $('input[type=radio][name=food]').change(function (e) {
        $('input[type=radio][name=food]').attr('checked',false).next('label').removeClass('active');
        $(e.target).attr('checked', true).next('label').addClass('active');
        food = e.target.value;
    });




    //when slider changes, hide "Slide" message
    slider.on("change", function() {
        $(".slideRight").fadeOut("slow");
    });


    //on form submit calculate camels
    $('#camel-calculator-form').on('submit', function (e) {
        e.preventDefault();
        var age = $('.age-output').html(),
            height = $('.height-output').html();

        var numberOfCamels = camelCalculator.calculate({
            age : age,
            height: height,
            hairColor: hairColor,
            eyeColor: eyeColor,
            muscles: muscles,
            foodHabit: food
        });

        showResult(numberOfCamels);

    });


    //show result and hide form
    var showResult = function (num) {

        form.fadeOut('fast');
        result.fadeIn('slow');

        $('#number-of-camels').each(function () {
            var $this = $(this);
            $({ Counter: 0 }).animate({ Counter: num }, {
                duration: 1500,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    };

    // Reset and calculate again
    $('#resetButton').on('click', function (e) {
        result.fadeOut('fast');
        form.fadeIn('slow');
    });




});


