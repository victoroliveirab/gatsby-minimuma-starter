<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Minimuma Starter
</h1>

This is a starter for Gatsby that I usually use to quickly scaffold a project. I simply started it from [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world) and added some configuration. It includes the following plugins:

1. **gatsby-image** + **gatsby-plugin** + **gatsby-transformer-sharp**

   Bundle of helpers to handle images within a Gatsby application. Gatsby-image provides lazy-loading, gatsby-plugin-sharp exposes several image processing functions built on the Sharp image processing library, and gatsby-transformer-sharp creates an ImageSharp node that provides fields in their GraphQL types.

1. **gatsby-plugin-prefetch-google-fonts**

   A Gatsby plugin to download and prefetch Google Fonts.

1. **gatsby-plugin-react-helmet** + **react-helmet**

   React Helmet is a component which lets you control your document head using their React component. The gatsby plugin provides drop-in support for React Helmet within Gatsby.

1. **gatsby-plugin-styled-components** + **styled-components** + **babel-plugin-styled-components**

   Bundle of styled-components packages to use with Gatsby. Gatsby-plugin-styled-components adds support to SSR with styled-components and the babel-plugin-styled-components minifies styles and provides a nicer debugging experience.

1. **gatsby-source-filesystem**

   A gatsby source plugin for sourcing data into your Gatsby application from your local filesystem.

1. **gatsby-styled-components-dark-mode**

   A Gatsby plugin that handles injecting a dark and light theme, as well as functionality for toggling between them. It also persists the state of your users’ dark options in their browsers.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the `minimuma-starter` starter.

    ```shell
    # create a new Gatsby site using the hello-world starter
    gatsby new my-gatsby-application https://github.com/victoroliveirab/gatsby-minimuma-starter
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-application/
    npm start
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-gatsby-application` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
        ├── components
        ├── pages
        ├── shared
        ├── themes
    ├── static
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── gatsby-config.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

    1. **`/src/components`**: This folder contains components that are used across multiple pages. Each component has its own folder, which contains an `index.js` file with the source code and an (optional) `styles.js` file in which `styled-components` components are created to be used.

    1. **`/src/pages`**: This folder contains all the pages your gatsby application can render. For instance, a `about.js` file inside this folder will create a route to `/about` in your application.

    1. **`/src/shared`**: This folder comprises several shared utilities for the application. Example of such utilities can be `hooks` (already created in this starter) to custom created React Hooks, `constants` to various constants used across application, `contexts` to any context created via React Context API, `helpers` to auxiliary helper functions, and so on.

    1. **`/src/themes`**: This folder contains two files: a `light.js` file, which comprises an object with all the light-theme configuration parameters, and a `dark.js` likewise.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`.prettierignore`**: This is a configuration file for [Prettier](https://prettier.io/), which is a tool to help keep the formatting of your code consistent. Here, you list folders and files that should be ignored by prettier.

1.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/) in which you set some configuration parameters such as `tab width`, `semicolons`, `trailing comma` etc.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

1.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

1.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1.  **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, it is recommend to start with the [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to Gatsby's documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-hello-world)
