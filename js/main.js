function getAPI() {
  // Get today's Date
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  var todaydate = mm + '/' + dd + '/' + yyyy;

  // Make the API call
  var postId = Math.floor(Math.random() * 100) + 1;
  var json = fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data)
        document.getElementById("apititle").innerHTML = JSON.stringify(data["title"])
        document.getElementById("todaydate").innerHTML = todaydate
        document.getElementById("apibody").innerHTML = JSON.stringify(data["body"])
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
