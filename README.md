# Useful Tools - API
api node express mongoose mongo

Steps:
Step 1: Start mongo db:
***
docker run --name mongo_nodeapi -p 27018:27017 -d mongo
***

Step 2: CREATE DATABASE USER
***
docker exec -it mongodb /bin/bash

mongo -uroot -pexample <<EOF
  use node_api
  db.createUser({
    user: "node_api_user",
    pwd: "node_api_user",
    roles: ["readWrite"]
  })
EOF
***

Step 3: Start the server
****
npm run dev
****
