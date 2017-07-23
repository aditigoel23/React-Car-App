# Rental Car App

This is a Car rental search React app. The app renders a basic form that accepts a drop off location, pick up and drop off times and returns search results using [Hotwire car shopping api](http://developer.hotwire.com/docs/read/Rental_Car_Shopping_API). At this time the app implements just an MVP version of the search. See [Features](#Features)

## Installation
Dev environment set up

```sh
$ git clone
$ cd RentalApp
$ npm run setup
$ npm start
```
This should start the node server at http://localhost:3000.

To start the production build
```sh
$ npm start:production
```

## Tech

The base app is cloned from [React-Boilerplate app](https://github.com/react-boilerplate/react-boilerplate). And keeps most of its structure/configuration. It also contains the a handful of components that are not currently used but are reusable in nature so can potentially be used in near future (like H2, H3 etc).

### Open source components
The search app uses the following open source react components
| Component | Used in component | For
| ------ | ------ | ------ |
| [airport-codes](https://github.com/L1fescape/airport-codes) | LocationPicker | For lack of open apis that support searching for airports/cities etc, the app uses this npm module which has a list of most airports, with their codes, city, country etc.
| [react-datepicker](https://github.com/Hacker0x01/react-datepicker) | DateTimePicker | Picker for pick up and drop off dates |
| [react-select](https://github.com/JedWatson/react-select) | LocationPicker, TimePicker | Picker for pickup location and for a time picker renders time in half hour intervals. (Half hour intervals was a requirement for the API)
| [react-virtualized-select](https://github.com/bvaughn/react-virtualized-select)  | LocationPicker | For fast searches through the airport-codes list


## Features

Features supported:
- A basic search for car rentals available through Hotwire for certain locations including airports and some train stations.
- The pickup dates default to +1 day from the time of search to accomodate some of the api constraints.
- The drop off dates default to +2 days from the time of search to accomodate some of the api constraints.

#### Future feature list

| Feature | Details
| ------ | ------ |
| Robust api inputs | There are some restrictions from the Hotwire api on how long the rental can be etc. These need to be added to the form validation.|
| Client side input validation | Currently the "Search" button is disabled until all inputs are filled which is not findable.
| More detail in the list view | Add icons/deeplinks/feature list to the list. Style list to card view.
| Date picker/drop down picker optimization for mobile | Use native pickers instead for "touch"
| Search for locations using apis | Instead of using the airport-codes npm module, which will need to be kept upto date, replace the search with an open source api.

### Todos
 - Increase test coverage
