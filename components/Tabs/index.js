// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
/*
<div class="tabs">
<div class="topics">
  <span class="title">TRENDING TOPICS:</span>
</div>
</div>
*/
function topicCard(item) {
    const 
      tabs = document.createElement("div");
      tabs.classList.add('topics');
      tabs.textContent = item;
  
    const 
      titleSpan = document.createElement("span")
      titleSpan.classList.add('title')
      titleSpan.textContent = "TRENDING TOPICS:";
      
      tabs.appendChild(titleSpan)
  
    return tabs;
  }




axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response);
    response.data.topics.forEach(item => {
        const tabs = topicCard(item);
        entryPoint.appendChild(tabs);
      });
  })
  const entryPoint = document.querySelector(".topics");
  topicCard()