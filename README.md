# Random Quote Generator

## Overview

The Random Quote Generator is a React application that fetches and displays a random quote from an external API. Each time the user clicks a button, a new quote is retrieved and displayed. The application uses Bootstrap for responsive design and Axios for API integration.

## Features
- Fetches a random quote from Quotable API.
- Displays the quote and the author.
- Updates the quote on button click.
- Responsive design using Bootstrap.

## Technologies Used
- React: For building the user interface.
- Bootstrap: For responsive styling.
- Axios: For making HTTP requests.

# Step-by-step Guide

Installation

1- Create a new project using Vite, move into project folder and install dependencies. 

```
npx create-vite@latest quoteApp --template react
cd random-quote-app

npm install axios bootstrap
npm install react-bootstrap

```

2- Import Bootstrap CSS: 

- Within src/main.jsx add the Bootstrap CSS import as follows:

```
import 'bootstrap/dist/css/bootstrap.min.css';

```

## Project Structure
- src/
    * App.jsx: Main application component.
    * QuoteDisplay.jsx: Component for fetching and displaying quotes.
    * index.css: Custom CSS styles.
    * main.jsx: Entry point of the React application.

## Components
- src/QuoteDisplay.jsx: Handles fetching quotes from the API and displaying them.

- src/App.jsx: Main component that renders the QuoteDisplay component.

# How to Run the Application
Run the following command and open click on the link in the output to open a locally hosted test page with the application. 
```
npm run dev

```
