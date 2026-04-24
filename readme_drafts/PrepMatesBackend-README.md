# PrepMates Backend

PrepMates Backend is the ASP.NET Core API for the PrepMates platform, a production exam prep application designed to support curated learning, AI-assisted guidance, and progress tracking for students.

## Overview

This repository contains the server-side logic, data access, and API endpoints that power the PrepMates experience.

## Responsibilities

- Expose backend APIs for the frontend application
- Manage application data and business logic
- Support student progress and exam statistics
- Integrate services needed for AI hint workflows
- Persist platform data in SQL Server

## Tech Stack

- ASP.NET Core
- C#
- SQL Server
- Azure

## Getting Started

1. Restore dependencies:
   ```bash
   dotnet restore
   ```
2. Configure local environment values such as connection strings and app settings.
3. Run the application:
   ```bash
   dotnet run
   ```

## Related Repository

- Frontend app: [PrepMatesFrontend](https://github.com/drizzy2004/PrepMatesFrontend)

## Purpose

This backend was built as part of a solo capstone project that moved beyond the classroom into a live production deployment.
