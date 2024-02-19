## Note

Some image asset is hosted on [Cloudinary](https://cloudinary.com/) therefore an
environment variable required to be set in order to fetch image asset.
Create 2 env file `.env.development` and `.env.production` then add following

- `GATSBY_CLOUDINARY_CLOUD_NAME=dgquji7zg`

where **GATSBY_CLOUDINARY_CLOUD_NAME** is key and **dgquji7zg** is value.

### For cloud server

Set environment variable to key and value above.

### For local development

Create two environment files `.env.development` and `.env.production`
then set the key and value above.

## Localization

The web support 2 languages **English**, **Chinese-Traditional**

### Library for localization

[here](https://github.com/microapps/gatsby-plugin-react-i18next)

### How to localization

[here](https://locize.com/blog/gatsby-i18n/)

### How to localization for template page

[here](https://www.rolique.io/news/translation-of-static-pages-and-mdx-files-pages-in-a-gatsby-project)

Localization for template page involve Gatsby's `createPage` API and a bit difficult to do.

**Note**: all template page files must be outside of pages directory as Gatsby create page automatically.
**Tempate page files are in side pages directory will lead to production build fail but not development build.**
see [here](https://stackoverflow.com/questions/65551110/gatsby-develop-works-but-not-build-on-same-project).

<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Minimal Starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Tutorials](https://www.gatsbyjs.com/docs/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Guides](https://www.gatsbyjs.com/docs/how-to/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Netlify)

Deploy this starter with one click on [Netlify](https://app.netlify.com/signup):

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-minimal)

## Note

- App start with root-layout.js and was configured in gatsby-browser.js
- main-layout.js is the app's layout anything with UI must be in main-layout or under
