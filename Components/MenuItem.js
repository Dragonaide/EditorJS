export function MenuItem(name, parent) {
  name = String();
  parent = MainMenu() || MenuItem();
  // Check if name is valid
  if (name !== String()) {
    console.error("MenuItem name can only be a string.");
  }
  // Create the element
  if (parent == MainMenu()) {
    
  }
}
