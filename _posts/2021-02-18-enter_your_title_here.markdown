---
layout: post
title:      "Enter your title here"
date:       2021-02-18 10:17:26 +0000
permalink:  enter_your_title_here
---


The content of your blog post goes here.# My Final Project: Fortnite Store

Though this was the most challenging app I've build so far, having been my first using React and Redux, I had the most fun with this one. The idea from this app came from the fact that I wanted to build an ecommerce site. Though I didn't want to have to enter a bunch of item data in order to have an inventory list. Yet while scouring YouTube to better understand React Routing, I came across a Fortnite API with items that included prices, pictures, and everything else you'd need for inventory!

For starters my index.js utilizes redux and thunk for handling state throughout my app. Which keeps track of the shopping cart throughout the app, and information collected from the backend. Also utilizing React's StrictMode, which was included with ```create-react-app```.

My App.js file has one child, SiteContainer, where all the magic happens! Using react-router-dom, SiteContainer houses the routes for every major component page on the app. Nav houses the links at the top of the page for the entire app. List handles the /store path, which list the current inventory, and the /upcoming path that lists items coming soon. Both of which display elements that represent each Item component. They are clickable, which allow you to see more details on the selected item. 

Clicking on an item shows their details. Represented by the ItemDetail component. Store items allow you to add the item to the cart. While you can only view details for upcoming items. Clicking on the cart allows you to see a list of items, represented by the CartLi component, along with a form to fill out your personal information (CartInput component). Filling out and submitting your order sends your order information to the backend and reloads the page. Starting your order process over from scratch. Clearing out the cart.

The final page is the order history, which is saved on the backend and represented by the OrderHistory component. Clicking this link will fetch the order history list from the backend API. Which will be listed via the OrderLi component.

And there we have it. The jist of my React/Redux app. A Fortnite store displaying items for sale. That allows you to submit an order and view order history.
