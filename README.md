This backEnd app is running on port 3001 and it mentioned inside "server.ts" file.

You can choose whether to run it on Docker or not.

Steps to run (without docker)
-----------------------------
1. npm install
2. npm run build
3. npm start

Steps to run (with docker)
--------------------------
1. docker build -t <<name:tag>> .
2. docker run -d -p <available_host_port>:3001 <<name:tag>>
