# Dedeepya-K-Task-Tracker--using-angular
An simple task tracker application built using Angular JS.

Angular is an application design framework and development platform ffor creating efficient and sophisticated single page apps.
In this project we will build a simple angular based application- "Task Tracker" using concepts of components and services offered by Angular.

We will have six components inside our appplication which are as follows:

1. Header
2. open/close button (A reusable button component)
3. Add task component (To add a new task)
4. Task component - Each individual task is it's own component
5. Footer
6. Router - To move through the about page and home page.


### Angular CLI 
Angular CLI(Command Line Interface) is a standard tooling for angular apps. It provides direct commands to generate componeents, services etc.,.
The command to globally install angular cli is as follows:

#### npm install -g @angular/cli

Once the CLI is ready now we can start building our angular application. Use the following command to create a new app by name AngularCrashCourse.

#### ng new AngularCrashCourse

Now, change directory to the working directory and follow up.

In order to run the Dev server(Development server) do use the command:

#### ng serve          the app opens on localhost:4200


The app folder inside the src folder is where all oof the components and services regarding our application goes. The entry point of our application is the "main.ts" present inside app folder.


To create components use the command as below:
#### ng generate component component_name

We will create a folder called componenets inside app folder where all the our created components can be stored.

ng generate component components/header
