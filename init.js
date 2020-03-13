window.onload = () => {
  //debugger;
  // render initial state
  const currentDisplayed = strings.displayed;
  const currentArray = strings[currentDisplayed];

  const currentListComponent = renderList(currentArray, currentDisplayed);

  const listContainer = document.getElementById('selected');
  listContainer.innerHTML = '';
  listContainer.appendChild(currentListComponent);

  // log initial state
  log.push({
    initialStrings: JSON.parse(JSON.stringify(strings))
  });
}
