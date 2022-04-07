
// question 1 

const cat = {
    complain: function(){
      console.log("Meow!");
  }
}

cat.complain();



// question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";



// question 3

heading.style.fontSize = "2em";



// question 4

console.dir(heading.className)

heading.className = "subheading";

console.log(heading.className)



// question 5 

const paragraphs = document.querySelectorAll("p")

console.log(paragraphs);

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}


// question 6

const resultsContainer = document.querySelector(".results")

console.log(resultsContainer.innerHTML)

const pContent = "New Paragraph"

resultsContainer.innerHTML = `<p> ${pContent} </p>`;

resultsContainer.style.color = "yellow"



// question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function createList(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

createList(cats);



// question 8

function createCats(cats) {
    const catsContainer = document.querySelector(".cat-container");
    for(let i = 0; i < cats.length; i ++) {
        const catContainer = document.createElement("div");
        catsContainer.appendChild(catContainer);


        const catName = document.createElement("h5");
        const catNameText = cats[i].name ? cats[i].name: "Name unknown";
        catName.textContent = catNameText;
        catContainer.appendChild(catName);


        const catAge = document.createElement("p");
        const catAgeValidate = cats [i].age ? cats[i].age: "Age unknown";
        catAge.textContent = catAgeValidate;
        catContainer.appendChild(catAge);
    }
}

createCats(cats);

