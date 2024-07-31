/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  // Get the domain list container
  let domainList = document.getElementById("domain-list");

  for (let i = 0; i < pronoun.length; i++) {
    // console.log(i, pronoun[i]); // 0 the, 1 our
    for (let j = 0; j < adj.length; j++) {
      // console.log(j, adj[j]); // 0 great, 1 big
      for (let k = 0; k < noun.length; k++) {
        // console.log(k, noun[k]); // 0 jogger, 1 racoon
        console.log(`${pronoun[i]}${adj[j]}${noun[k]}.com`);

        let domain = `${pronoun[i]}${adj[j]}${noun[k]}.com`;

        // Create a new list item for each domain
        let domainItem = document.createElement("a");
        domainItem.className =
          "list-group-item list-group-item-action list-group-item-info";
        domainItem.textContent = domain;

        // Add the domain to the container
        domainList.appendChild(domainItem);
      }
    }
  }
};

// Should generate something like:

// thegreatjogger.com
// thegreatracoon.com
// ourgreatjogger.com
// ourgreatracoon.com
// thebigjogger.com
// thebigracoon.com
// ourbigjogger.com
// ourbigracoon.com
