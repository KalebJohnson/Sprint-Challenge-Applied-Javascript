// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Card(imgUrl) {
    const 
      newCard = document.createElement("div"),
      headline = document.createElement("div"),
      author = document.createElement("div"),
      imgContainer = document.createElement("div"),
      newImage = document.createElement("img"),
      authorSpan = document.createElement("span");
  

    newImage.src = imgUrl;
    newCard.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    authorSpan.textContent = `By %{authorName}`;

    newCard.appendChild(headline);
    newCard.appendChild(author);
    newCard.appendChild(imgContainer);
    newCard.appendChild(newImage);
    newCard.appendChild(authorSpan);
  
    // add this functionality later
    newCard.addEventListener("click", () => {
      newCard.classList.toggle("selected");
    });
  
    return newCard;
  }
  
const cardsContainer = document.querySelector('.cards-container') 



axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });
 //   response.data.articles.javascript.forEach(item => {
 //     const newDog = Card(item);
  //    entryPoint.appendChild(newDog);
 //   });
 // })

 Card()