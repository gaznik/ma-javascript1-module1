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

// Question 1

let cat = {
    complain: function(){
     console.log("meow!");   
    }    
} 
cat.complain();

// Question 2 
let heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3 
heading.style.fontSize = "2em";

// Question 4
heading.className = "subheading";

// Question 5
let paragraphs = document.querySelectorAll("p");

for (i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "red";
}

// Question 6 
resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7 
function listOfNames(list){
    for(i = 0; i < list.length; i++){
        console.log(list[i].name);
    }
}
listOfNames(cats);

// Question 8

function createList(cats){

    let listItems = "";
    for(let i = 0; i < cats.length; i++){
   console.log(items[i]);
   listItems = listItems + "<li>" + items[i] + "</li>";
}

}

const finalHTML = "<ul>" + listItems + "</ul>";

console.log(finalHTML);

createList(cats);

