function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var month = date.toLocaleString('default', { month: 'long' });
  var day = date.getDay();
  var dayLong = date.toLocaleString('default', { weekday: 'long' });
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + ":" + min;
  document.getElementById("calendar").innerText = dayLong + ", " + day + " " + month;
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime(); /* calling currentTime() function to initiate the process */

// Unsplash API
const requestUrl =
      'https://api.unsplash.com/search/photos?query=wallpaper&client_id=[APIKEY]';
const getImagesButton = document.querySelector('.getImagesButton');
const imageToDisplay = document.querySelector('body');

window.addEventListener('DOMContentLoaded', async () => {
  let randomImage = await getNewImage();
  console.log("url('"+randomImage+"')");
  imageToDisplay.style.backgroundImage  = "url('"+randomImage+"')";
});

async function getNewImage() {
  let randomNumber = Math.floor(Math.random() * 10);
  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      let allImages = data.results[randomNumber];
      return allImages.urls.regular;
    });
}
