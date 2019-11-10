export function MainMenu() {
  var navigation = document.createElement("nav");
  navigation.setAttribute("class", "main-menu");
  document.getElementById("editor").appendChild(navigation);
  var navigationContent = document.createElement("ul");
  navigationContent.setAttribute("class", "main-menu content");
  navigation.appendChild(navigationContent);
}
