# Backend Project

This project is an ASP.NET Core application that serves as a mock API and hosts an Angular application.

## Prerequisites

- .NET SDK (install via Homebrew):
  ```bash
  brew install dotnet
  ```

## Project Structure

- **Controllers/**: Contains the API and Home controllers.
  - **ApiController.cs**: Mock API endpoint.
  - **HomeController.cs**: Serves the main application page.
  
- **Program.cs**: Entry point of the application.

- **Properties/**: Contains launch settings.
  - **launchSettings.json**: Configuration for different launch profiles.

- **Startup.cs**: Configures services and the request pipeline.

## Setup Instructions

1. Install .NET SDK if not already installed:
   ```bash
   brew install dotnet
   ```

2. Verify installation:
   ```bash
   dotnet --version
   ```

3. Create and run the project:
   ```bash
   cd backend
   dotnet new webapi -n CRE.API
   cd CRE.API
   dotnet restore
   dotnet run
   ```

4. Access the API at `https://localhost:5152` (port may vary)

## Overview

This application provides a mock API for testing purposes and serves an Angular frontend. The API includes endpoints for:
- Dashboard statistics
- Monthly targets
- Revenue data

## Development

To modify the API:
1. Add new controllers in the `Controllers` directory
2. Run the application with hot reload:
   ```bash
   dotnet watch run
   ```