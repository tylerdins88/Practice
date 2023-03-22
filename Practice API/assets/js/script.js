var plantList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  // replace `octocat` with anyone else's GitHub username
  var requestUrl = 'https://perenual.com/api/species-list?page=1&key=sk-E8Po641b35fe1568e294&q=monstera';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].common_name;
        plantList.appendChild(listItem);
      }
    });
}

fetchButton.addEventListener('click', getApi);
