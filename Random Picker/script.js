document.addEventListener("DOMContentLoaded", function () {
  var itemInput = document.getElementById("itemInput");
  var addButton = document.getElementById("addButton");
  var pickButton = document.getElementById("pickButton");
  var resetButton = document.getElementById("resetButton");
  var resultElement = document.getElementById("result");
  var itemList = document.getElementById("itemList");
  var items = [];

  addButton.addEventListener("click", function () {
    var newItem = itemInput.value.trim();
    if (newItem !== "") {
      items.push(newItem);
      var li = document.createElement("li");
      li.textContent = newItem;
      itemList.appendChild(li);
      itemInput.value = "";
    }
  });

  pickButton.addEventListener("click", function () {
    if (items.length > 0) {
      var randomIndex = Math.floor(Math.random() * items.length);
      var randomItem = items[randomIndex];
      resultElement.textContent = randomItem;
    }
  });

  resetButton.addEventListener("click", function () {
    items = [];
    itemList.innerHTML = "";
    resultElement.textContent = "";
  });
});
