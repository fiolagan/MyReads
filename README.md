# MyReads Project

This is my completed project of the Udacity React Nanodegree MyReads project. This app has been built up from the original starter files that can be found [here](https://github.com/udacity/reactnd-project-myreads-starter). 

All of the React code has been added to allow users to search for new books and add them to one of 3 shelves via the search component. Results in the search component are attributed with their assigned shelf if they have already been selected. Books that have not been selected will show a shelf of 'None'. Users can change which shelf the book is assigned to within the search component or the shelves component.

An additional feature has been added to allow users to click on a book cover in either the shelf component or the search component to see extended information including title, authors, truncated description, publisher, publish date, enlarged cover image, link to Google books preview and the option to assign a shelf.


## TL;DR

To get started developing right away:

* enable React Router Dom `npm install --save react-router-dom`
* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms that can be used with this app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # MyReads custom favicon.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app. This contains enhanced styling including branded top bar and 3d effect on books .
    ├── App.js # This is the root for the app that contains all of the required components.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── AssignBook.js # This is the component that is used throughout the app to control and display which shelf the book is assigned to.
    ├── Book.js # This is the component that renders the display of the on the shelf component and the search component. AssignBook.js is contained within this component.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── ExtenededInfo.js # This is the component that is used to display additional information about a book. AssignBook.js is contained within this component.
    ├── registerServiceWorker.js # API used to cache assets and other files.
    ├── Search.js # This is the component that provides search functionality for the book repository. Book.js is contained within this componenet.
    ├── Shelf.js # This is the component that provides the main view of the users 3 shelves. Book.js is contained within this componenet.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   ├── arrow-drop-down.svg
    │   ├── book-mount.png
    │   ├── logo.svg
    │   └── pop-icon.svg
    ├── index.css # Global styles.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the final code for the completed MyReads project for Craig Roberts.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
