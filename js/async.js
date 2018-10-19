// vanilla javascript method
window.onload = function () {
  var http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      //console.log(JSON.parse(http.response));
    }
  };

  http.open("GET", "./data/tweets.json", true);
  http.send();

  // jquery method
  $.get("./data/tweets.json", function (data) {
    console.log(data);
  });

  console.log("test");

};

/*

0 - request not initiated
1 - request has been set up
2 - request has been sent
3 - request is in process
4 - request is complete

*/