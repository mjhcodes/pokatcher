# Pokatchér
<strong>The placé to katch Pokémon!</strong>

## Table of Contents
* [Description](#description)
* [View Live](#view-live)
* [Installation Steps](#installation-steps)
* [How to Use the App](#how-to-use-the-app)
* [Examples](#examples)
* [Technologies](#technologies)

## Description:
Pokatchér is a web application which allows users to catch and name over 800 different Pokémon.

## View Live
[![Netlify Status](https://api.netlify.com/api/v1/badges/4b24c0ae-e6ff-4984-a2a9-8962b0721d3c/deploy-status)](https://app.netlify.com/sites/pokatcher/deploys)

**Website:** *https://pokatcher.netlify.app/*

## Installation Steps:
- First, clone the repo from *https://github.com/mjhughes707/pokatcher.git*
- Run `cd pokatcher` to move into the app folder
- Run `npm install` to install the required app dependencies
- Run `npm start` to run the app locally in development mode
- Open *http://localhost:3000* to view the app

## How to Use the App:
- When the app is loaded for the very 1st time, there will be not be any Pokémon in your collection.
- Click the ***Catch Pokémon*** button to get started.
- Once loaded, there will be images of 10 random Pokémon displayed. Click one to activate the ***Confirm Catch*** button.
- Click the ***Confirm Catch*** button to display a modal, which includes a success message, the Pokémon's type(s) and text field to give it a new name.
- In the modal, type a new name for the Pokémon, then click the ***Submit*** button to confirm.
- This will direct you to a featured page for that specific Pokémon, which displays their new name, image, types(s) and abilities. A link is also included to return to the home page / collection.
- Back at the home page, you may paginate through all of the caught Pokémons in your collection, as well as view their details by clicking their image.
- To repeat the process and add more Pokémon to your collection, simply click the ***Catch Pokémon*** button and start again!
- *At any point, feel free to click the <strong>Pokatchér</strong> title in the header to return to the home page.*
- *The app can also be fully navigated with a keyboard only.*

## Examples:
<div style="display: flex" >
  <img src="https://user-images.githubusercontent.com/38340128/94585480-ed6f9580-0234-11eb-8415-fa40de21f02f.png" alt="Home Page - Displays user collection with one Pokemon featured" title="Home Page" width="49%" />
  <img src="https://user-images.githubusercontent.com/38340128/94585499-f496a380-0234-11eb-97d7-7a3893e93124.png" alt="Catch Page - Displays 10 random Pokemon with one selected" title="Catch Page" width="49%" />
  <img src="https://user-images.githubusercontent.com/38340128/94585494-f2344980-0234-11eb-8f9f-eea3b19c98aa.png" alt="Catch Page w/ Name Option - Displays modal to name caught Pokemon" title="Catch Page w/ Name Option" width="49%" />
  <img src="https://user-images.githubusercontent.com/38340128/94586103-b2219680-0235-11eb-9172-67c5c342ca32.png" alt="Featured Page - Displays featured Pokemon with name, types and abilities" title="Featured Page" width="49%" />
</div>

## Technologies:
This project has been created with:
- **React:** *https://reactjs.org/*
- **React Hooks:** *https://reactjs.org/docs/hooks-intro.html*
- **React Router:** *https://reactrouter.com/*
- **Material-UI:** *https://material-ui.com/*
- **Jest:** *https://jestjs.io/*
- **Enzyme:** *https://enzymejs.github.io/enzyme/*
- **Axios:** *https://github.com/axios/axios*
- **PokéAPI:** *https://pokeapi.co/*
