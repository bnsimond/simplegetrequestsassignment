'use strict';

function getDogImage (photoQuantity) {
    fetch (`https://dog.ceo/api/breeds/image/random/${photoQuantity}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert ('Error. Try again'));
}

function dogForm () {
    $('form').submit(e=> {
     e.preventDefault ();
     var dogQuantity = $("#amountRequested").val();
     getDogImage(dogQuantity);
    });
}

$(function() {
    alert('Get random dog pictures. Choose 1 to 50 pictures.');
    dogForm();
});