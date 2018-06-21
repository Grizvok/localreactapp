# General code review notes

I think overall your code is pretty good, I couldn't find any "terrible" issues with it.
You need to do something about formatting - a lot of files have code misaligned, poorly formatted or indented with both tabs and spaces.
You should be able to fix that by setting up [eslint](https://eslint.org/) and [prettier](https://prettier.io/).

You have client code & deps inside of the client folder, yet server deps live in root.
I'd stick to one way for consistency sake.

It also seems like you want to have a React front-end with Express backend.
Instead of building the whole thing yourself (which is possible, but takes time), I'd look into existing frameworks that do most of it for you.
E.g. my favorite one is [Next.js](https://github.com/zeit/next.js)

Other than those minor things - looks solid so far, keep up the good work 👍
