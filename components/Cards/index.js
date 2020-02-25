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

function Card(headline, authorPhoto, authorName) {
    
    const card = document.createElement('div');
    const headLine = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authImg = document.createElement('img');
    const authorString = document.createElement('span');



    card.appendChild(headLine);
    card.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    imgContainer.appendChild(authImg);
    authorDiv.appendChild(authorString);

    card.classList.add('card');
    headLine.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');

    headLine.textContent = headline;
    authImg.src = authorPhoto;
    authorString.textContent = authorName;


    return card;
  }
  

  
const enterHere = document.querySelector('.cards-container');



const axiosPromise =
  axios.get("https://lambda-times-backend.herokuapp.com/articles");

  axiosPromise.then(response => {
    console.log(response);
    console.log(response.data.articles.javascript);
    response.data.articles.javascript.forEach(response => {
        enterHere.appendChild(Card(response.headline, response.authorPhoto, response.authorName))
      });


  })

  axiosPromise.then(response => {
    response.data.articles.bootstrap.forEach(response => {
        enterHere.appendChild(Card(response.headline, response.authorPhoto, response.authorName))
      });


  })

  axiosPromise.then(response => {
    response.data.articles.technology.forEach(response => {
        enterHere.appendChild(Card(response.headline, response.authorPhoto, response.authorName))
      });


  })
  axiosPromise.then(response => {
    response.data.articles.jquery.forEach(response => {
        enterHere.appendChild(Card(response.headline, response.authorPhoto, response.authorName))
      });

  axiosPromise.then(response => {
        response.data.articles.node.forEach(response => {
            enterHere.appendChild(Card(response.headline, response.authorPhoto, response.authorName))
          });
    
    
      })


  })

Card()

