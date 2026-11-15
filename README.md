
# Athlete Performance Hub

## Project Description

Athlete Performance Hub is a React Single Page Application (SPA) designed to help athletes organize workouts, monitor training progress, and view team information.

The goal of this project is to provide athletes with a simple way to manage their training and stay consistent with their workouts.

## Technologies Used

- React
- Vite
- React Router
- React Context API
- JavaScript
- CSS
- Open-Meteo Weather API
- Vitest
- React Testing Library
- Vercel

## Features

- Dashboard with workout statistics
- Create and manage workouts
- Mark workouts as completed
- Delete workouts
- View individual workout details
- Filter workouts by completion status
- View sample team information
- Display live weather information
- Responsive design for mobile, tablet, and desktop
- Browser localStorage for saving workouts

## Application Routes

- `/` - Dashboard
- `/dashboard` - Dashboard
- `/workouts` - Workout management
- `/workouts/:workoutId` - Individual workout details
- `/team` - Team overview
- `*` - 404 Not Found page

## Installation Instructions

1. Clone the GitHub repository.
2. Open the project folder.
3. Install dependencies:

   npm install

4. Start the development server:

   npm run dev

5. Open the local URL displayed in the terminal.

## API Integration

The application uses the Open-Meteo Weather API to retrieve current weather information for Newberry, South Carolina.

API website: https://open-meteo.com/

The weather component uses React useEffect to fetch data and displays loading and error messages when needed.

No API key is required.

## State Management

React Context API manages shared workout information throughout the application.

Local component state is used for workout forms, filters, and other interface interactions.

Workout information is saved using browser localStorage.

## Testing

Vitest and React Testing Library are used to test important components and functionality.

Run tests using:

npm test

Run the production build using:

npm run build

## Deployment

The application is deployed using Vercel.

Live Website:
https://athlete-performance-hub-one.vercel.app

## Screenshots

Add screenshots of the dashboard, workouts page, and team page here.

## Known Limitations

- Team information currently uses sample data.
- Authentication is not implemented.
- Workout data is stored locally rather than in a database.

## Future Improvements

- Add user authentication
- Create coach and athlete accounts
- Connect to a database
- Add performance charts
- Allow coaches to assign workouts
- Expand workout tracking and reporting

## Project Purpose

This project demonstrates React component architecture, client-side routing, state management, API integration, responsive design, testing, and deployment.
