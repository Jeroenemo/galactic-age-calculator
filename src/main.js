import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calculator.js';

$(document).ready(function() {
  $('form#user-info').submit(function(event) {
    event.preventDefault();
  });
  $('button#submit').on('click', function() {
    const input = $.trim($('#age').val());

    if (input  === '') {
        alert("Please enter your age");
        return false;
    }

    $('#monkey').fadeOut('slow');
    $('#planets').fadeIn(3000);
    const age = parseInt($('#age').val());
    const diet = $('input:radio[name=diet]:checked').val();
    const exercise = $('input:radio[name=exercise]:checked').val();
    const seatbelt = $('input:radio[name=seatbelt]:checked').val();
    const smoke = $('input:radio[name=smoke]:checked').val();
    const drink = $('input:radio[name=drink]:checked').val();
    let calculator = new Calculator(age);
    calculator.lifeExpectancy(diet, exercise, seatbelt, smoke, drink);
    $('.mercury-text').html(`${calculator.ageOnPlanet('Mercury')} Furthermore, ${calculator.yearsLeft('Mercury')}`);
    $('.venus-text').html(`${calculator.ageOnPlanet('Venus')} Furthermore, ${calculator.yearsLeft('Venus')}`);
    $('.earth-text').html(`${calculator.ageOnPlanet('Earth')} Furthermore, ${calculator.yearsLeft('Earth')}`);
    $('.mars-text').html(`${calculator.ageOnPlanet('Mars')} Furthermore, ${calculator.yearsLeft('Mars')}`);
    $('.jupiter-text').html(`${calculator.ageOnPlanet('Jupiter')} Furthermore, ${calculator.yearsLeft('Jupiter')}`);
  });
});