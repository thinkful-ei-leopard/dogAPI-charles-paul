

let num = 0;

function callGetDogImage(){
  $('form').submit(event => {
    event.preventDefault();
    num = $('#textInput').val();
    getDogImage(num);
  });
}

function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {

  for (let i = 0; i < responseJson.message.length; i++) {
    $('.results').append(
      `<img src="${responseJson.message[i]}" class="results-img" alt="dog${i}">`
    );
  }

  $('.results').removeClass('hidden');

  console.log(responseJson);
 
}

callGetDogImage();
