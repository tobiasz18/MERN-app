<!-- ABOUT THE PROJECT -->
### (heroku free package = long first charging time ~ 15 second)
  Project running on https://events-api-heroku.herokuapp.com/  
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
   
```



  The project we can divide into client side and server side.
  
  1. Client side
    created based on basic functions pattern redux, 
    with styled-components to stylish react components 

  2. Server side   
    simple rest api with Express.js with mongoDB in Node.js

    avaible endpoints:
      
        get - https://events-api-heroku.herokuapp.com/api // get all events
        get - https://events-api-heroku.herokuapp.com/api/:title // get by title
        get - https://events-api-heroku.herokuapp.com/api/:location // get by location
        get - https://events-api-heroku.herokuapp.com/api/:id // get by id
        
        post - https://events-api-heroku.herokuapp.com/api // add new event   
       
        put - https://events-api-heroku.herokuapp.com/api/:id // update specifice event by id

        delete - https://events-api-heroku.herokuapp.com/api/:id // delete event by id
 

  #### Example 
   ###### Request
  ```
      GET / https://events-api-heroku.herokuapp.com/api/:id // get by id
      
      content-type →application/json; charset=utf-8
  ```
   ###### Response
  ```
        {
            "_id": "5cf6980c66f03d153c4827c3",
            "title": "Brazilian festival Carnival in Rio de Janeiro",
            "desc": "The Carnival in Rio de Janeiro is a festival held every year before Lent and considered the biggest...",
            "location": "Brazil",
            "imageUrl": "https://i.imgur.com/mLnfBfQ.jpg",
            "organization": "Rio Carnival",
            "date": "2020-07-27",
            "createdAt": "2019-06-04T16:10:52.492Z",
            "id": "f481370c",
            "__v": 0
        }
  ```

### Built With

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [MongoDb](https://www.mongodb.com/)
* [expressJS](https://expressjs.com/)
* [styled-components](https://www.styled-components.com/)




















