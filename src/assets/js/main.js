window.addEventListener("load", function() {

  axios.get(`https://drive.google.com/open?id=1SbYricZmmnej4CTgwYFFohkC8xvVm4bP`)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(err => console.log(err));

});
