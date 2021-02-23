---
layout: post
title:      "JavaScript Driving with Rails under the hood"
date:       2021-02-18 05:17:26 -0500
permalink:  enter_your_title_here
---


I must admit, though I had a more fluid time building this project, not having to reference what I've done in previous labs as much, it was still quite a challenge for me. I couldn't get my mind off of simplicity with less lines of code, like with Rails. Yet I do appreciate how much more I could do with JavaScript on the front end.

I wanted to see my Rails project come to life more, so I went with the backend of my Rails Keepflix project. A social media platform based around movies. Where a user can add a movie to their personal list of movies they've seen and other users can comment and give their opinions on it. Other features are being able to edit and delete their comments.

Going through the project, I learned of the neater process of using Object.assign, instead of asigning element properties with setAttributes or '='.
So:
```
 let submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("name", "commit")
    submit.setAttribute("value", "Create Comment")
    submit.setAttribute("style", "display: none")
    submit.setAttribute("data-disabled-with", "Create Comment")
```

Will look more like:
```
let subInp = document.createElement('input')
 Object.assign(subInp, {
        className: 'destroy',
        type: 'submit',
        value: "X"
    })
```

I've also learned the simplicity between event listeners.
Insted of:
```
document.addEventListener('submit', someFunction());
```
When I can, I replace it with:
```
object.onsubmit = function();
```

I was able to get everything working. For the most part, it runs smoothly. It loads the current user and displays the added movies plus comments. Now I'm just going to clean it up a bit and make it look neat. Looking forward to learning the simplicity of React.

