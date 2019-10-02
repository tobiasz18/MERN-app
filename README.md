<!-- ABOUT THE PROJECT -->
## About The Project
### (heroku free package = long first charging time ~ 15 second)
  Project running on https://events-api-heroku.herokuapp.com/  
  The project we can divide into client side and server side.
  
  1. Client side
    created based on basic functions pattern redux, 
    with styled-components to stylish react components 

  2. Server side   
    simple rest api with Express.js with mongoDB in Node.js

    avaible endpoints:
      
        get - https://events-api-heroku.herokuapp.com/api // get all events

        post - https://events-api-heroku.herokuapp.com/api // add new event 
        
        get - https://events-api-heroku.herokuapp.com/api/:title // get by title
        get - https://events-api-heroku.herokuapp.com/api/:location // get by location
        get - https://events-api-heroku.herokuapp.com/api/:id // get by id

        put - https://events-api-heroku.herokuapp.com/api/:id // update specifice event by id

        delete - https://events-api-heroku.herokuapp.com/api/:id // delete event by id
     

<!-- GETTING STARTED -->
## Getting Started

### Installation locally

1. Server Side
  ```sh
    git clone https://github.com/tobiasz18/RestApi_with_React
    npm install 
    npm start
  ```

2. Client side
```sh
  git clone https:://github.com/your_username_/Project-Name.git || cd client

  then go to client folder and type in terminal >
    npm install 
    npm run build
    npm start

  remember that server (first point) have to running   

```

### Built With

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [MongoDb](https://www.mongodb.com/)
* [expressJS](https://expressjs.com/)
* [styled-components](https://www.styled-components.com/)




















