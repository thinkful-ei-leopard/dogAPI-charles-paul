

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
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}
 

function displayResults(responseJson) {
  //replace the existing image with the new one

  // console.log(responseJson.message);

  // let dogResults = responseJson.message.forEach(dog => )

  $('.results').html(
    `<img src="${responseJson.message}" class="results-img">`
  );
  //display the results section
  // $('.results').removeClass('hidden');

}

callGetDogImage();
