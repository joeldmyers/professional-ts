# My notes

This repo was forked from https://github.com/mike-north/professional-ts. Original notes from Mike North below.

## Latest Typescript Features

### Optional Chaining

```
const x: {
  user: {
    name: string;
    address?: {
      street: string;
      city: string;
    };
  };
} = undefined as any;

console.log(x.user.address?.city);

```

If address is undefined, above expression will be terminated early. Note, this adds a condition

### Nullish Coalescing

Like using the || for default values, but with ?? - safer bc it specifically handles '' (empty string) or 0 coercing to false.

Ex:

```
class Foo {
  name;
  constructor(rawName?: string) {
    // Nullish Coalescing - ??
    this.name = rawName ?? '(no name)';
  }

  log() {
    console.log(this.name);
  }
}
```

## Rest Client

Rest Client VS Code Extension is cool! Add API Examples. Will need to circle back on this to review again.

# Professional TypeScript

![Node.js CI](https://github.com/mike-north/professional-ts/workflows/Node.js%20CI/badge.svg)
![ts-nightly compat](https://github.com/mike-north/professional-ts/workflows/TypeScript@Next%20tests/badge.svg)

## What's this course about?

This course is intended to help those already somewhat familiar with TypeScript as a programming language, to the point where they're more ready to use it in a real situation with real stakes. Mike shares some of the experience he's had as LinkedIn's TypeScript infrastructure lead, so you don't have to learn things "the hard way" like he did.

## Project setup

First, you should ensure you have [your ssh keys working with GitHub](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent). You can verify this by running

```sh
ssh git@github.com
```

and getting a response like

```sh
Hi mike-north! You've successfully authenticated, but GitHub does not provide shell access.
Connection to github.com closed.
```

### Tools you MUST have installed

Next, make sure you have installed [volta](http://volta.sh/) which ensures you have the right version of node and yarn for this project

We also strongly recommend the use of [Visual Studio Code](https://code.visualstudio.com/) as an authoring tool. If you use something else, you're on your own.

### Clone

Next, checkout a working copy of this project

```sh
git clone git@github.com:mike-north/professional-ts
```

enter the directory you just created

```sh
cd professional-ts
```

### Install dependencies

[`yarn`](https://yarnpkg.com/) is the recommended package manager to use with this project. Please use it instead of npm.

Install dependencies with yarn by running

```sh
yarn
```

### Starting the project

Start up the project in development mode by running

```sh
yarn dev
```

Changing any files in the `src` folder will result in an incremental rebuild, and a refresh of the screen.

By default, the app is served on http://localhost:1234.

# Legal

&copy; 2020 LinkedIn, All Rights Reserved

## Licensing

The code in this project is licensed as [BSD-2-Clause](https://opensource.org/licenses/BSD-2-Clause) license, and the written content in the ./notes folder is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
