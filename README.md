# AngularSpringTodolist

Todolist written in Angular 15, Spring Boot, and PostgreSQL

## Starting Client Application

Run `cd client/ ng serve` or `cd client/ npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Starting Server Application

Run the server with Docker Compose to up server and databae together.
`cd server/
docker-compose up`
(Don't forget to initialize env variables)

## Starting All Together

Run the both sever and client sides with Docker Compose.
`docker-compose up`
(Don't forget to initialize env variables)
