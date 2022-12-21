import { Controller, Get } from "@nestjs/common";

@Controller() // <-- This is a decorator that will be used to mark the class as a controller
export class AppController {
  @Get()
  getRootRoute() {
    return "Hello World!";
  }

  @Get("/about")
  getAboutRoute() {
    return "This is the about route!";
  }
}
