## Overview

The application focuses on promoting healthy eating habits! This platform features a list of fruits which, when clicked, provide nutritional values for each fruit along with additional information.


### Dashboard

The platform's design is minimalistic and modern, featuring colors that are specifically chosen to suit the type of application and harmonize with the images.


### Fruit Search

To simplify the search for fruits, the page provides a search input.


 ### Fruit Details

Through the various fruit containers, clicking on one will trigger a visual rotating effect, and a window will open where you can view the selected fruit's information.
In the first table, the fruit information includes:
-The botanical family to which the fruit belongs.
-The botanical order to which the family belongs.
-The botanical genus of the fruit.

In the second table, you can read the nutritional values of the fruit:
-Calories
-Fat
-Sugar
-Carbohydrates
-Protein


### Footer

The footer features the developer's information along with a link to their LinkedIn profile.


## Installation Guide

To initialize the project on your device, follow these steps:

1. Clone the repository to your local system.
2. Run npm install to install the dependencies.
3. Configure the local environment if necessary.
4. Run ng serve --open to start the application in development mode and wait for the browser to open automatically.

## IMPORTANT

In our project, we need to access an external API to get fruit data. However, due to CORS (Cross-Origin Resource Sharing) restrictions set by the API server, it is not possible to make direct requests from the frontend application to the API server. This causes CORS errors and prevents the site from functioning correctly.
To solve this problem, we have implemented a proxy on our server. A proxy acts as an intermediary between our frontend application and the external API. When the frontend needs data from the API, it sends a request to the proxy. The proxy, in turn, makes the request to the external API and then returns the data to the frontend. This method bypasses the CORS restrictions because the browser sees the request as coming from our own domain.


## Project Structure

The project is structured as follows:

- `src/`: Contains the application's source code
  - `app/`: Contains the app's components, services, and modules.
  - `assets/`: Contains resources like images and static files.
- `node_modules/`: Contains the project's dependencies.
- `angular.json`: Configuration file for Angular CLI.
- `package.json`: Configuration file for the project's dependencies.


## Troubleshooting Common Issues

### Issue: The application does not start correctly

- **Solution:**  Ensure that you have run npm install to install the dependencies. Check the console for any errors during startup.


## API Endpoints

The application interfaces with the FRUITYVICE API to provide information about various fruits. Below are the main endpoints provided by the HttpService class:


### Get list of all fruits

  - Metodo: `GET`
  - Endpoint: `api/fruit/all`
  - Description: List of all fruits.


### Fruit Details

  - Metodo: `GET`
  - Endpoint: `api/fruit/{name}`
  - Description: Gets information for a specific fruit.


This project was generated with version 17.3.0 of Angular ('https://v17.angular.io/docs').
