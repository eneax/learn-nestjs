# NestJS from Scratch

### Server Request / Response Cycle

1. Client sends a request to the server
2. Validate data contained in the request
3. Make sure the user is authenticated
4. Route the request to a particular function
5. Run business logic and returns a response
6. Access to database is made
7. Server sends a response to the client

### Parts of NestJS

- Controllers (_required_): handle incoming requests using decorators and methods (each method handles a specific incoming request)
- Services: handle data access and business logic
- Modules (_required_): group together code (it can be a group of controllers, services, providers, etc.)
- Pipes: validate incoming data
- Filters: handle errors that occur during the request handling
- Guards: handle authentication
- Interceptors: add extra logic to incoming requests and outgoing responses
- Repositories: handle data stored in a database
