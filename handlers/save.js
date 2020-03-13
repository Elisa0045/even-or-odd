function saveHandler() {
  debugger;
  // write me!
  const newInput = document.getElementById("input").value.trim();
  if (newInput === "") {
    alert("Please enter the input text");
    return;
  }
  const newInput_toNumber = Number(newInput);
  if (isNaN(newInput_toNumber)) {
    strings.NaNy.push(newInput);
  } else {
    if (newInput_toNumber % 2 === 0) {
      strings.evens.push(newInput_toNumber);
    } else {
      strings.odds.push(newInput_toNumber);
    }
  }

  // log user interaction: handler name, user input, new state
  log.push({
    handler: "save",
    newInput,
    strings: JSON.parse(JSON.stringify(strings))
  });
}
