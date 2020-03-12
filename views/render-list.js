debugger;

const renderList = (array, category) => {
  const element_div = document.createElement("div");
  element_div.id = category;
  const element_h4 = document.createElement("h4");
  element_h4.innerHTML = category;
  element_div.appendChild(element_h4);
  const element_ul = document.createElement("ul");
  for (let item of array) {
    const element_li = document.createElement("li");
    element_li.innerHTML = item;
    element_ul.appendChild(element_li);
  }
  element_div.appendChild(element_ul);
  return element_div;
};

console.log("-- testing renderList component --\n");

const testRenderList = (component, array, category) => {
  console.assert(component.nodeName === "DIV", "it should be a DIV");
  console.assert(component.id === category, "it's id should be " + category);
  console.assert(
    component.childElementCount === 2,
    "it should have 2 children"
  );

  console.assert(
    component.children[0].nodeName === "H4",
    "first child should be an H4"
  );
  console.assert(
    component.children[0].innerHTML === category,
    ".children[0].innerHTML should be " + category
  );

  console.assert(
    component.children[1].childElementCount === array.length,
    ".children[1] should have" + array.length + " children"
  );
  for (let i = 0; i < array.length; i++) {
    console.assert(
      component.children[1].children[i].innerHTML === array[i],
      "li " + i + " should display " + array[i]
    );
  }
};

console.log("-- Test 1:\n");

const array1 = ["0", "2", "4"];
const category1 = "evens";
const component1 = renderList(array1, category1);
testRenderList(component1, array1, category1);

console.log("-- Test 2:\n");

const array2 = ["e", "i"];
const category2 = "nany";
const component2 = renderList(array2, category2);
testRenderList(component2, array2, category2);

console.log("-- Test 3:\n");

const array3 = ["3", "5", "7", "11"];
const category3 = "odds";
const component3 = renderList(array3, category3);
testRenderList(component3, array3, category3);

console.log("-- Test 4:\n");

const array4 = [];
const category4 = "empty list!";
const component4 = renderList(array4, category4);
testRenderList(component4, array4, category4);

console.log("-- Test 5:\n");

const array5 = [
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "..."
];
const category5 = "loooong list";
const component5 = renderList(array5, category5);
testRenderList(component5, array5, category5);
