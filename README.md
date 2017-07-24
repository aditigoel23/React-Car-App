# Rental Car App

This is a Car rental search React app. The app renders a basic form that accepts a drop off location, pick up and drop off times and returns search results using [Hotwire car shopping api](http://developer.hotwire.com/docs/read/Rental_Car_Shopping_API). At this time the app implements just an MVP version of the search. See [Features](#Features)

## Installation
Dev environment set up

```sh
$ git clone
$ cd React-Car-App
$ npm install (This may take some time)
$ npm start
```
This should start the node server at http://localhost:3000. Dev build starts with hot reload turned on.

To start the production build
```sh
$ npm run start:production
```
This will run the the lint and test tasks before starting the server at http://localhost:3000.

## Tech

The base app is cloned from [React-Boilerplate app](https://github.com/react-boilerplate/react-boilerplate). And keeps most of its structure/configuration. It also contains the a handful of components that are not currently used but are reusable in nature so can potentially be used in near future (like H2, H3 etc).

### Open source components

| Component | Used in component | For
| ------    | ------            | ------ |
| [airport-codes](https://github.com/L1fescape/airport-codes) | LocationPicker | For lack of open apis that support searching for airports/cities etc, the app uses this npm module which has a list of most airports, with their codes, city, country etc.
| [react-datepicker](https://github.com/Hacker0x01/react-datepicker) | DateTimePicker | Picker for pick up and drop off dates |
| [react-select](https://github.com/JedWatson/react-select) | LocationPicker, TimePicker | Picker for pickup location and for a time picker renders time in half hour intervals. (Half hour intervals was a requirement for the API)
| [react-virtualized-select](https://github.com/bvaughn/react-virtualized-select)  | LocationPicker | For fast searches through the airport-codes list


## Features

Features supported:
- A basic search for car rentals available through Hotwire for certain locations including airports and some train stations.
- Input constraints like
    - the pickup dates default to +1 day from the time of search to accomodate some of the api constraints.
    - the drop off dates default to +2 days from the time of search to accomodate some of the api constraints.
    - change in pick up dates updates drop off dates to allow only valid date ranges

#### Future feature list

| Feature | Details
| ------ | ------ |
| Client side input validation | Currently the "Search" button is disabled until all inputs are filled which is not findable.
| Better error reporting | Report back error based on the error code/message recieved from the api. "For now its just a placeholder message".
| More detail in the list view | Add icons/deeplinks/feature list to the list. Style list to card view.
| Date picker/drop down picker optimization for mobile | Use native pickers instead for "touch"
| Search for locations using apis | Instead of using the airport-codes npm module, which will need to be kept upto date, replace the search with an open source api.
| Enable localization | The support for english and german is already built in (from the Boilerplate). Need to add messages/expose the locale picker etc.

### Todos
 - Increase test coverage
