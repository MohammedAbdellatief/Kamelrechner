// wait for document ready
$(function() {

    // selectors
    var ageOutput = document.querySelectorAll('.age-output')[0];
    var heightOutput = document.querySelectorAll('.height-output')[0];
    var hairColor = 'black'; //default value
    var eyeColor = 'blue'; //default value
    var muscles = 'normal'; //default value
    var food = 'vegetarian'; //default value


    // update range slider output on slide
    $(document).on('input', '#ageInput', function(e) {
        ageOutput.innerHTML = e.currentTarget.value;
    });
    $(document).on('input', '#heightInput', function(e) {
        heightOutput.innerHTML = e.currentTarget.value;
    });

    //initiate range slider
    $('input[type=range]').rangeslider({
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
    $("input").on("change", function() {
        $("small").fadeOut("slow");
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

        $('#number-of-camels').html(numberOfCamels)
    })



});


