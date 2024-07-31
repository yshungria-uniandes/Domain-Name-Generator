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

  for (let i = 0; i < pronoun.length; i++) {
    console.log(i, pronoun[i]); // 0 the, 1 our
    for (let j = 0; j < adj.length; j++) {
      console.log(j, adj[j]); // 0 great, 1 big
      for (let k = 0; k < noun.length; k++) {
        console.log(k, noun[k]); // 0 jogger, 1 racoon
        console.log(`${pronoun[i]}${adj[j]}${noun[k]}.com`);
      }
    }
  }
};
