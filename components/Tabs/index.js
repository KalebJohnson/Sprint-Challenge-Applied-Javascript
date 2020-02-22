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
    tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = item;

    const 
      tabs = document.createElement("div");
      tabs.classList.add('tabs');
      

      const
      topics = document.createElement('div');
      topics.classList.add('topics');
        
    const 
      titleSpan = document.createElement("span")
      titleSpan.classList.add('title')
      titleSpan.textContent = "TRENDING TOPICS:";
      
      tabs.appendChild(topics);
      topics.appendChild(titleSpan);
    return tab;
  }




axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response);
    response.data.topics.forEach(item => {
        const tab = topicCard(item);
        entryPoint.appendChild(tab);
      });
  })
  const entryPoint = document.querySelector(".topics");
  topicCard()