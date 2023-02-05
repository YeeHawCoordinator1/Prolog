

const fuckMyLIfe = document.querySelectorAll('.small_button');

const selectedBookCategories = [];
// wait for the DOM to finish loading before accessing the DOM
document.addEventListener("DOMContentLoaded", () => {
  const buttonsContainer = document.querySelector("#buttons-container");
  const buttons = buttonsContainer.children;


  const selectedBookCategoriesContainer = document.querySelector(
    "#selected-book-categories"
  );
  const searchButton = document.querySelector("#search-button");

  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", () => {
      const bookCategory = button.textContent;
      const buttonIndex = selectedBookCategories.indexOf(bookCategory);
      if (buttonIndex > -1) {
        selectedBookCategories.splice(buttonIndex, 1);
      } else {
        selectedBookCategories.push(bookCategory);
      }

      button.classList.toggle("clicked");

      // clear the container
      selectedBookCategoriesContainer.innerHTML = "";

      // add the selected book categories to the container
      if (selectedBookCategories.length > 0) {
        selectedBookCategories.forEach((bookCategory) => {
          const bookCategoryElement = document.createElement("div");
          bookCategoryElement.classList.add("selected-book-category");
          bookCategoryElement.textContent = bookCategory;
          selectedBookCategoriesContainer.appendChild(bookCategoryElement);
        });
      }
    });
  });
});

let Books = {
  names: [
    "Song of achilles",
    "Hamlet",
    "Iliade",
    "Circe",
    "Harry Potter",
    "Anne Frank",
  ],
  tags: [
    ["greek mythology", "lgbt", "fiction", "romance", "historical"], // Pour song of achilles
    ["theatre", "tragedy", "romance", "murder", "betrayal"], // Pour Hamlet
    ["historical", "greek mythology", "poetry", "romance", "fiction"], // Iliad
    ["historical", "greek mythology", "womenhood", "fiction"], //circe
    ["magic", "fiction", "fantasy", "friendship", "power", "love"][ // Harry potter
      ("war", "biography", "diary", "world war II", "teenage")
    ],
  ],
  paths : ["achilles.html", " ", "illiad.html", "circe.html", " ", " "]
};

var tag; //variable contenant le tag du bouton préssé
var totalTags = [];
var booksRecommandation = [];

function addTag() {
  tag = alert(this.id);
  totalTags.push(tag);
}

var commonTags;
function findBook() {
  for (let i = 0; i < Books.tags.length - 1; i++) {
    intersection = Books.tags[i].filter((x) => totalTags.includes(x));
    if (intersection.length >= 3) {
      booksRecommandation.push(Books.paths[i]);
    }
  }

  return booksRecommandation;
}
console.log(findBook());

function searchBtn() {
    window.location.href = "livre1.html";
}

function mafct() {
    window.location.href = "index.html";
}