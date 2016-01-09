import angular from "angular";

class AppController {
  constructor() {
    this.message = "Hello, Angular Test";
  }
}

const app = angular.module("app", []);

app.controller("AppController", AppController);

export default app;
