document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("generateDescription");
  button.addEventListener("click", function () {
    chrome.runtime.sendMessage(
      { action: "getDescription" },
      function (response) {
        console.log(response.description);
      }
    );
  });
});
