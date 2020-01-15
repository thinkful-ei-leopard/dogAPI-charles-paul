'use strict';



function callGetDogImage(){
  $('form').submit(event => {
    event.preventDefault();
    let num = $('#textInput').val();  
    getDogImage(num);
  });

}


function getDogImage(num) {
   
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => 
      console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

// function displayResults(responseJson) {
//   console.log(responseJson);
//   //replace the existing image with the new one
//   $('.results-img').replaceWith(
//     `<img src="${responseJson.message}" class="results-img">`
//   )
//   //display the results section
//   $('.results').removeClass('hidden');
// }

// function watchForm() {
//   $('form').submit(event => {
//     event.preventDefault();
//     getDogImage();
//   });
// }

// $(function() {
//   console.log('App loaded! Waiting for submit!');
//   watchForm();
// });

callGetDogImage();
