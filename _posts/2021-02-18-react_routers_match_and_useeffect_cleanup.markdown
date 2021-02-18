---
layout: post
title:      "React Router's match and useEffect cleanup"
date:       2021-02-18 09:53:19 +0000
permalink:  react_routers_match_and_useeffect_cleanup
---


Oh what fun I had being stuck on what was supposed to be a good idea. I really love using React's hooks, yet it is important to note the little things can be overlooked and in that, we could complicate what would otherwise be a step toward simplicity. Or perhaps I'm the only one guilty of that. Yet I would like to share my experience in hopes that if you do run into this, you will find a much easier time coming up with a solution.

So what I have is an app I'm building using a Fortnite Shop API. I have two pages, one that displays store items, and another that displays upcoming items. When I first built them, they were in two seperate components. Both rendering the same presentational component. Then I realized the only difference between them was a small change in the fetch statement. What a perfect opportunity to make a dynamic component that changed based on the link being pressed. Using our handy React Router's match! Let's look at some code and the problem I ran into:

```
import React, {useState, useEffect} from 'react';
import Item from '../components/Item'

function List({ match }) {

    useEffect(() => {
        fetchList()
    }, [])

    const [lists, setShopLists] = useState([])

    const fetchList = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com${match.url}/get`)
        const shoppingList = await data.json();
        console.log(match.url)
        setShopLists(shoppingList.data);
    }

    const shoppingList = lists.map(list => (
        <Item key={list.listId} item={list} />
    ))

    return (
        <div>
            <h1>Shop Here</h1>
            {shoppingList}
        </div>
    )
}

export default List
```

Great right? Here's what our page looks like when I click the 'Fortnite Store' link:![](https://i.imgur.com/EKjFTDY.png)

Now here's what it looks like when I click the 'Upcoming' link: ![](https://i.imgur.com/DxcuB2Z.png)

Yes, they ARE still showing the same item! How, you ask? Because of that lovely useEffect method. When we called it with the square brackets:
```
useEffect(() => {
        fetchList()
    }, [])
```
It acts as a componentDidMount(), yet doesn't update as componentDidUpdate when the match changes the link being called in the fetch.

"But wait! You can just remove the square brackets!" I thought. "That will sure fix it!"
And so I did think. You'll notice in the console that it's logging the url that comes back with match.(ignore the errors, they're just decoration) I used it to make sure the right link was getting sent to the fetch method. So what happens when I remove the square brackets and try again?
IT UPDATES!! Hooray! 

That is, until I noticed my console....
![](https://i.imgur.com/zb4aim2.png![](http://))

That counted up about every second. It was still updating!!! AKA memory leak. How do I solve this problem??? Now what function do I call to clean it up and stop it from updating??? After scouring for answers on what I needed to return, I got a little(a tremendous amount) of slight(life saving) help from a great tech coach on a simple fix I'd forgotten. What's supposed to go in the little square brackets?

```
    useEffect(() => {
        fetchList()
    }, [match])
```

Whatever we want calling useEffect again when it's updated. So when I press the 'Fortnite Store' link, match's values point to the '/store' link, yet when I click 'Upcoming', they change to '/upcoming'. When this change occurs in match, useEffect runs again with the updated info, and BOOM! Everything updates! 
