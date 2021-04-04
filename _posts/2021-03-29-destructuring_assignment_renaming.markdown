---
layout: post
title:      "Destructuring assignment renaming"
date:       2021-03-29 05:33:54 +0000
permalink:  destructuring_assignment_renaming
---


Isn't JavaScript cool?! All the fun stuff you can do, the simplicity that comes with every new ES release? Yet what if you still wanted a more personal touch? 

Today, we're talking about destructing assignment, a love joy of simplicity for creating distinct variables from objects and arrays. We will discuss how to set a custom name to the declared variable, despite the name already set for the key of the object.

Let's start with an example! Say you have an object:
```
$ const nums = {
      "one": "uno",
      "two": "dos",
      "three": "tres"
   }
```

Behold! We have a simple object named 'nums' with three key/value pairs. If we wanted to set a variable to one of the key/value pairs, we would use the power of deconstructing:
```
$ const {one} = nums

$  one
// "uno
```

As you can see, when using deconstruction, we can set the variable to the same name as the key declared in the object, thus setting the variable's value to the like of the value in the object. Yet what if we wanted to use a different name?

Simple, we would just declare the custom name inside the brackets of the deconstruction:
```
$ const {three: third} = nums

$ three
// Uncaught ReferenceError: three is not defined at <anonymous>:1:1

$  third
// "tres"
```

As you can see, even though we used "three" in the deconstruction, it has no value. However, "third" does.

And there you have it. A simple way to deconstruct if you want to simplify the variable used in deconstruction. Especially for those weirdly complicated key/value pairs.

