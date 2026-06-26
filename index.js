let numberBank = [];
let odds = [];
let evens = [];

function addNumberToBank(number) {
  numberBank.push(number);
}

function sortOneNumber() {
  let number = numberBank.shift();
  if (number % 2 === 0) {
    evens.push(number);
  } else {
    odds.push(number);
  }
}

function sortAllNumbers() {
  while (numberBank.length > 0) {
    sortOneNumber();
  }
}

function numberForm() {
  const form = document.createElement("form");

  form.innerHTML = `
    <label>
      Enter a Number:
      <input type="number" id="number-input" required />
    </label>
    <button type="submit">Add Number</button>
  `;
  return form;
}

function numberBankComponent() {
  const section = document.createElement("section");

  section.innerHTML = `
    <h2>Number Bank</h2>
    <p>${numberBank.join(", ")}</p>
    
    <div>
      <button id="sort-one">Sort 1</button>
      <button id="sort-all">Sort All</button>
    </div>
  `;

  return section;
}

function sortedNumbersComponent() {
  const section = document.createElement("section");

  section.innerHTML = `
    <div>
      <h2>Odds</h2>
      <p>${odds.join(", ")}</p>
    </div>
    <div>
      <h2>Evens</h2>
      <p>${evens.join(", ")}</p>
    </div>
  `;

  return section;
}

function render() {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <h1>Odds and Events</h1>
    
    <form id="input-form">
      <label>
        Enter a Number:
        <input type="number" id="number-input" required />
      </label>
      <button type="submit">Add Number</button>
    </form>

    <section>
      <h2>Number Bank</h2>
      <p id="bank-display">${numberBank.join(", ")}</p>
      <div>
        <button id="sort-one">Sort 1</button>
        <button id="sort-all">Sort All</button>
      </div>
    </section>

    <section>
      <div>
        <h2>Odds</h2>
        <p>${odds.join(", ")}</p>
      </div>
      <div>
        <h2>Evens</h2>
        <p>${evens.join(", ")}</p>
      </div>
    </section>
  `;

  const form = document.querySelector("#input-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const input = document.querySelector("#number-input");

    addNumberToBank(Number(input.value));
    render();
  });

  const sortOneBtn = document.querySelector("#sort-one");
  sortOneBtn.addEventListener("click", function () {
    sortOneNumber();
    render();
  });

  const sortAllBtn = document.querySelector("#sort-all");
  sortAllBtn.addEventListener("click", function () {
    sortAllNumbers();
    render();
  });
}

render();
