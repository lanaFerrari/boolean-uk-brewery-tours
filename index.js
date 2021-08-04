  let state = {
  selectStateInput: "",
  breweries: [],
  cities: [],
  filters: {
    type: "",
    city: [],
    search: ""
  }
};

//Bridge to the Form
const formEl = document.getElementById('select-state-form');

// Bridge to the List of Breweries 
const mainBridge = document.querySelector("main");

// add eventListener 
formEl.addEventListener("submit", (event) => {
  // console.log("clicked")
  event.preventDefault()
  
  const userInput = formEl.querySelector("#select-state");
  const userValue = userInput.value
  console.log(userValue);

  fetch(`https://api.openbrewerydb.org/breweries?by_state=${userValue}`)
  .then((res) => res.json())
  .then((breweries) => {
    console.log("Inside GET Fetch: ", breweries);
 
//     let state = {
//   selectStateInput: "true",
//   breweries: [],
//   cities: [],
//   filters: {
//     type: "",
//     city: [],
//     search: ""
//   }
// };

  }); 

formEl.reset()

const test = renderBreweriesList(breweries);
console.log("hallo" , test);

})


function renderBreweriesList() {
  console.log("Inside renderBreweriesList: ", state.breweries);

  for (let i = 0; i < state.breweries.length; i++) {

const article = document.createElement("article");
const ulLi = document.createElement("ul");
ulLi.className("breweries-list");
const liEl = document.createElement("li");

const headingName = document.createElement("h2");
headingName.innerHTML = `${breweries.name}`;
const divEl = document.createElement("div");
divEl.className("address");
divEl.innertext = `${breweries.type}`;

liEl.append(headingName);
liEl.append(divEl);

const sectionAdress = document.createElement("section");
sectionAdress.className("address");
const headingAdress = document.createElement("h3");
headingAdress.innerText = "Adress:"
const paragraphEl = document.createElement("p");
paragraphEl.innerText = `${breweries.street}`;
const paragraphElTwo = document.createElement("p");
paragraphElTwo.innerText = `${breweries.city}, ${breweries.postal_code}`;
sectionAdress.append(heading2);
sectionAdress.append(paragraphEl);
sectionAdress.append(paragraphElTwo);
liEl.append(sectionAdress);

const sectionPhone = document.createElement("section");
sectionPhone.className("phone");
const headingPhone = document.createElement("h3");
headingPhone.innerText = "Phone:"
const paragraphPhone = document.createElement("p");
paragraphPhone.innerText = `${breweries.phone}`;
sectionPhone.append(headingPhone);
sectionPhone.append(paragraphPhone);
liEl.append(sectionPhone);

const sectionLink = document.createElement("section");
sectionLink.className("link");
const link = document.createElement("a");
link.setAttribute("href", `${breweries.website_url}`);
link.setAttribute("target", "blank");
link.innerText = "Visit Website";
sectionLink.append(link);
liEl.append(sectionLink);

ulLi.append(liEl);
article.append(ulLi);

mainBridge.append(article);
  }
}

// renderBreweriesList();


