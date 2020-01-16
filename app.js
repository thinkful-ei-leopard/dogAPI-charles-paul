

let breed = '';


function callGetDogImage(){
  $('form').submit(event => {
    event.preventDefault();
    breed = $('#textInput').val();
    getDogImage(breed);
  });
}

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => {
      if (response.ok){
        return response.json();
      }
      throw new Error(response.status);
    })
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong: Not a valid breed'));
}

function displayResults(responseJson) {
  $('.results').append(
    `<img src="${responseJson.message}" class="results-img" alt="dog">`
  );
  

  $('.results').removeClass('hidden');

  console.log(responseJson);
 
}

callGetDogImage();
