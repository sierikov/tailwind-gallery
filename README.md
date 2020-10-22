# Tailwind Gallery

[![Netlify Status](https://api.netlify.com/api/v1/badges/68389eed-1a5b-4d58-8c6c-a88e8364caa5/deploy-status)](https://app.netlify.com/sites/laughing-noyce-cd1f9d/deploys)
[![Maintainability](https://api.codeclimate.com/v1/badges/9dd9659dffc72eee6b52/maintainability)](https://codeclimate.com/github/sierikov/tailwind-gallery/maintainability)

![tailwind-poster](./public/poster.jpg)

## About

This is example how you can integrate a Tailwind technologie in your React project.

## Installation

To install and run this project follow these steps:

  1. Clone this repository
  2. Go in `you-directory/tailwind-gallery`
  3. `npm install`
  4. Create `.env` file and paste there your Pixabay API Key (`REACT_APP_PIXABAY_API_KEY`).  
  You can get it [here](https://pixabay.com/api/docs/)
  5. `npm start`

  The complete list of npm-scripts is avalibale below.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

It will also create a `main.css` with compiled tailwind styles in the assets folder.  
See also `watch:css` script.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

Also it compiles a `tailwind.scss`. See `build:css` script.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run watch:css`

Builds all of `tailwind.scss` styles to `src/assets/main.css`.  
Also builds a map file for debug puproses.

### `npm run build:css`

As in `watch:css` it builds all of `tailwind.scss` styles to `src/assets/main.css`.  
But builds no map files. Futher optimizations can be added with plugins.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

In this project I use some technologies:

- Create React App - [documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- Tailwind - [documentation](https://tailwindcss.com/)
- PostCSS - [documentation](https://postcss.org/)
- React - [documentation](https://reactjs.org/).

## Meta

Sierikov Artem – [twitter](https://twitter.com/sierikov_)

Distributed under the MIT License. See `LICENSE.md` for more information.

## Contribute

1. Read Code of Conduct.
2. Fork it (<https://github.com/sierikov/tailwind-gallery/fork>)
3. Create your feature branch (`git checkout -b feature/fooBar`)
4. Commit your changes (`git commit -am 'Add some fooBar'`)
5. Push to the branch (`git push origin feature/fooBar`)
6. Create a new Pull Request
