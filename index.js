<<<<<<< HEAD
const fuckMyLIfe = document.querySelectorAll('.small_button');

fuckMyLIfe.forEach(fuckMyLIfe => {
    fuckMyLIfe.addEventListener('click', () => {
        fuckMyLIfe.classList.add('clicked');
    });
});
=======
let Books = {
    names : ['Song of achilles', 'Hamlet', 'Iliade','Circe', 'Harry Potter', 'Anne Frank'],
    tags : [['greek mythology', 'lgbt', 'fiction', 'romance', 'historical'], // Pour song of achilles 
            ['theatre', 'tragedy','romance', 'murder', 'betrayal'], // Pour Hamlet
            ['historical', 'greek mythology', 'poetry', 'romance', 'fiction'], // Iliade
            ['historical', 'greek mythology', 'womenhood', 'fiction'], //circe
            ['magic', 'fiction', 'fantasy', 'friendship', 'power', 'love'] // Harry potter 
            ['war', 'biography', 'diary', 'world war II', 'teenage'],
            ]
}

var tag; //variable contenant le tag du bouton préssé
var totalTags = [];
var booksRecommandation = [];

function addTag() {
    tag = alert(this.id);
    totalTags.push(tag);
}

var intersection;
function findBook() {
   for (let i = 0; i < (Books.tags.length - 1); i++) {
        intersection = Books.tags[i].filter(x => totalTags.includes(x));
        if (intersection.length >= 3) {
            booksRecommandation.push(Books.names[i])
        }
   }
   return booksRecommandation;
}
console.log(findBook());
>>>>>>> 86c96a5431fa13d0b2a473507221710d14541ba0
