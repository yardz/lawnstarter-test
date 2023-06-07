# Project Structure

This is a monorepo, where the backend and frontend are in the same repository. The backend was developed in NodeJS and the frontend in ReactJS.
The choice of the backend in Nodejs was because I have much more experience with this technology (otherwise I would have done it with PHP), and the choice of the frontend in ReactJS was because I know the stack and it is the stack used by you.

The backend is inside the `apps/lawnstarter-backend` folder and the frontend is inside the `apps/lawnstarter-frontend` folder.

## Backend

I chose to use Nestjs as a backend framework because it uses object-oriented patterns. As he was asked to demonstrate OO knowledge, I thought this choice would demonstrate that. It also follows an MVC-like pattern, which I believe is a similarity to laravel.

## Frontend

The frontend was assembled with React (using nextjs). I kept this choice to be able to demonstrate my knowledge in React, which is a technology that I like a lot and I have a lot of experience.

# How to run the project

There are two ways to run the project. For development environment just run `yarn` in the project root to install all dependencies. After installation is complete, just run `yarn dev` in the root of the project, and the backend and frontend will run in parallel.

The second way is using docker. To do so, just run `docker-compose up` in the root of the project. Docker will install all dependencies and run the project.

The frontend will be accessible on port 3000 and the backend on port 8080 (http://localhost:3000 and http://localhost:8080).
