---
layout: post
title:      "MongoError:  bad auth"
date:       2021-04-28 03:18:38 +0000
permalink:  mongoerror_bad_auth
---


I know exactly why you are here. You are setting up your MongoDB and you get this wonderful message:

```
(node:5109) UnhandledPromiseRejectionWarning: MongoError: bad auth : Authentication failed.
```

After entering your connection string. I've seen this all over the net. Yet the usual issue is this:

```
mongodb+srv://fakeUser:<password>@main.whsfe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

The ```<password>``` part needs to include your password. That's it. Everything else can remain the same. Yet the 'greater than' and 'less than' signs and all text in between needs to be replace with your password. So that you have this:

```
mongodb+srv://fakeUser:somepassword123@main.whsfe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

I like things simple, so this is simple and straightforward. MongoDB Atlas mentions changing the project name, not necessary. Just the credentials you set up. They do have to be corret as well

I hope this helps!
