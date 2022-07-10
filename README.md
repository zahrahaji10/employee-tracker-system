# Employee Tracker System

## Table of Content

- [Description](#description)
- [Node Packages](#node-packages)
- [Application Diagram](#application-diagram)
- [To Start Application](#to-start-application)
- [Video Demonstration](#video-demonstration)
- [Questions](#questions)

## Description

Creating an application using Node.js, Inquirer, and MySQL to manage and organise the departments, roles and employees in a company's database.

## Node Dependencies Packages

- [Inquirer](https://www.npmjs.com/package/inquirer)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Mysql2](https://www.npmjs.com/package/mysql2)
- [Console.table](https://www.npmjs.com/package/console.table)

#### DevDependencies package

- [Nodemon](https://www.npmjs.com/package/nodemon)

## Application Diagram

<img width="948" alt="12-sql-homework-demo-01" src="https://user-images.githubusercontent.com/102627226/177121811-97bfccf2-448b-431d-ade9-c332d5055cf7.png">

## To Start Application

### Step 1 : Installation

- To run application follow the installation process of cloning this repository

```
git git@github.com:zahrahaji10/employee-tracker-system.git
```

- Change directory into the new cloned repository

```
cd employee-tracker-system
```

- install the required packages for the application

```
npm install

```

### Step 2 : Database set-up

- The database name for this application is "company_db".To connect to the database first set up the environment variables, to do this in the root src folder create a .env file. There is an .env.SAMPLE file which you will need to copy the empty template. Then enter the following

```
DB_HOST= ( enter your host details such as "localhost" )
DB_USER= (enter your user details such as  "root")
DB_PASSWORD= (enter your mysql password)
DB_NAME= "company_db"
```

- To create the connection, open integrated terminal from the db folder and type the following command line. This will promote a password, which is db password. This will create a "company_db" database in your MySQL workbench.

```
mysql -u root -p
```

- Then enter the following command to scheme the tables in your database.In you workbench this, will create 4 empty tables; project; Category, Products, Tags and ProductTags under the database you created.

```
source schema.sql
source seeds.sql
```

### Step 3 : Launch Server

- To launch the server, run these command bellow on the terminal.

```
nmp run start
nmp run dev

```

## Video Demonstration

[Watch Demonstration](https://watch.screencastify.com/v/5oCCadsnK4DlLwUyUxVb)

## Questions

For any questions about this application, you can contact me on the following;

- Personal E-mail : zahrahhaji10@gmail.com

- GitHub profile [Click Here](https://github.com/zahrahaji10)
