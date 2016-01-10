import angular from "angular";
import OmdbApiService from "./services/OmdbApiService";

class AppController {
  constructor() {
    this.message = "Hello, Angular Test";
  }
}

const app = angular.module("app", []);

app.controller("AppController", AppController);
app.service("omdbApiService", OmdbApiService);

export default app;
