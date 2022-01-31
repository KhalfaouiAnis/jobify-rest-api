# Jobify

#### Track Your Job Search

Project in Action - [Jobify](https://www.jobify.live/)

#### Support

Find the App Useful? [You can always buy me a coffee](https://www.buymeacoffee.com/johnsmilga)

#### Run The App Locally

```sh
npm run install-dependencies
```

- rename .env.temp to .env
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME

```sh
npm start
```

- visit url http://localhost:3000/

#### Setup React App

- create <b>client</b> folder
- open terminal

```sh
cd client
```

```sh
npx create-react-app .
```

```sh
npm start
```

- set editor/browser side by side
- copy/paste assets from complete project

#### Spring Cleaning

- in src remove
- App.css
- App.test.tsx
- logo.svg
- reportWebVitals.ts
- setupTests.ts
- fix App.tsx and index.tsx

#### Title and Favicon

- change title in public/index.html
- replace favicon.ico in public
- resource (favicons)(https://favicon.io)

#### Normalize.css and Global Styles

- CSS in JS
- saves time on the setup
- less lines of css
- speeds up the development
- normalize.css
- small CSS file that provides cross-browser consistency in the default styling of HTML elements.
- (normalize) [https://necolas.github.io/normalize.css]
- npm install normalize.css
- import 'normalize.css' in index.tsx
- SET BEFORE 'index.tsx'
