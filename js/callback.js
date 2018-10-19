window.onload = function () {

  // Synchronous example

  function callback(val) {
    console.log(val);
  }

  var fruits = [
    "banana",
    "apple",
    "pear"
  ];

  fruits.forEach(callback);

  console.log("done");


  // Asynchronous example using callback

  function cb(data) {
    console.log(data);
  };

  // jquery method
  $.get("./data/tweets.json", cb);

  console.log("test");


  // Multiple callbacks

  function handleError(jqXHR, textStatus, error) {
    console.log(error);
  }

  $.ajax({
    type: "GET",
    url: "data/tweets.json",
    success: cbTweets,
    error: handleError
  });

  function cbTweets(data) {
    console.log(data);

    $.ajax({
      type: "GET",
      url: "data/friends.json",
      success: cbFriends,
      error: handleError
    })
  };

  function cbFriends(data) {
    console.log(data);

    $.ajax({
      type: "GET",
      url: "data/videos.json",
      success: function (data) {
        console.log(data);
      },
      error: handleError
    })
  };


};