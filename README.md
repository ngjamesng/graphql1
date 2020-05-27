# graphql-playlist
This is for me to learn graphQL. 

### steps to view
1. Please clone the repository. 
2. In the server folder, on line 14 of `server/app.js`, you will have to change the `mongoDB_URI`to your own. Please head to mongodb.com to create your own database/cluster. 
3. in the server folder, you will need to create a `server/.env` file with key names `MONGODB_USERNAME` and `MONGODB_PASSWORD`. This will also need to be set up on mongodb.com for your database/cluster. 
3. In the client folder, run `npm install` and then `npm start`
4. In the server folder, run `npm install` and then `npm start`
5. Feel free to add a couple of books. You may also need to create an author first through graphQL. Clicking on the book in the list will display additional details about the book and related author.
