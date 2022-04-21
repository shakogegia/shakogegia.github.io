---
title: MERN monorepo boilerplate
date: '2018-01-14T23:11:04.831Z'
---

Hello reader,
I want to talk about monorepo, and also will share boilerplate for MERN (Mongo, Express.js, React, React-Native/Expo) stack.

When it comes to a real-life project, it consists of multiple services fronted, backend/API and mobile. We can split them into separate repositories, but sharing code between repositories is difficult when using multiple repositories. This is the moment where monorepo shines.

<!-- read more -->

Let's compare monorepo to mutli-repo style.

#### Monorepo

Monorepo is split into many single-repos. Each single-repo repository is read-only. You can change its code via pull-request to the monorepo.

#### Multirepo

The other approach is to manage multiple repositories. 1 package = 1 own repository. Each package has its own development, tagging, and even maintainers.

#### Monolith

Monolith IS NOT monorepo. Monolith is a huge amount of coupled code of one application that is hell to maintain.

This is what monorepo repository looks like

<p align="center">
  <img src="https://cdn-images-1.medium.com/max/1600/1*95IEDUCN3mfU9vpTWXChhQ@2x.png" style="height:600px" />
</p>

## Boilerplate

##### Lerna

> Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.

Lerna tries to ease the management of npm links when dealing with multi-package projects hosted in a single repository. It analyzes the packages and automatically creates the required npm links between them. It also handles the execution of tasks across multiple packages and eases the pain of versioning and publishing.
It has its shortcomings but it’s worth using it. Big projects like Babel and Jest use Lerna.

##### Yarn workspaces

> Workspaces are a new way to setup your package architecture (..) It allows you to setup multiple packages in such a way that you only need to run yarn install once to install all of them in a single pass.

Your dependencies can be linked together, which means that your workspaces can depend on one another while always using the most up-to-date code available. This is also a better mechanism than yarn link since it only affects your workspace tree rather than your whole system.

##### Eslint / Tslint / Stylelint / Prettier

In this boilerplate eslint, tslint, stylelint and prettier are already isntalled, configured and ready to go!

##### Husky / Lint-staged / Commit lint

> Husky - Git hooks made easy

Husky is a tool which gives us the ability to catch GIT hooks like commit and/or push

> Lint-staged - Run linters against staged git files and don't let 💩 slip into your code base!

Lint-staged is a nice tool to run linters (for example: eslint) on staged files to prevent commit code which is note linter compatible

> Conventional (Semantic) Commit Messages - is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history;

Conventional or Semantic commit messages is naming convension, that helps us to easily determine what commit contains and also it's very helpful to avoid multiple fixes in a single commit.

If you are not familiar with conventional commits, here are some links with detailed info

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)
[Semantic Commits](https://seesparkbox.com/foundry/semantic_commit_messages)

### How to start

All you need is to clone [repository](https://github.com/shakogegia/mern-monorepo-boilerplate), run `yarn` to install dependencies and you can start the project by running `yarn dev`

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/7y04oyepefran5du6nv1.png)

Packages structure:

- client - React app created via`create-react-app`
- api - Node.js / Express.js
- socket - Socket.io server
- mobile - React-native/Expo project
- common - common utility functions shared accross all package
- constants - just a container for constant variables also shared accross all package

By running `yarn dev` from the root folder, lerna.js will execute `yarn dev` in every and each package

Here are some of helpful lerna.js commands

```
npx lerna add <package>
```

this will add <package> as a dependency to all packages

```
npx lerna add <package1> --scope=<package2>
```

this will add <package1> as a dependency to only package2

```
npx lerna publish
```

this will increase version of all packages and also will generate CHANGELOG.md files for all packages and also for a root repository, based on conventional commits. (see picture below)
![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/lwbsakys9rsbqbfp1mzq.png)

```
npx lerna bootstrap
```

Installs all of the package dependencies in all packages and links any cross-dependencies.

You can find more commands on Lerna.js's documentation

Here is a boilerplate link:

[Github Repository](https://github.com/shakogegia/mern-monorepo-boilerplate)
