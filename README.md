# Threads Clone App

A high-performance full-stack application developed with Next.js, MongoDB, and React, replicating the functionality of a threads app.

## Table of Contents
- [Overview](#overview)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a Threads Clone app that allows users to create threads, post them on the home page, comment on other users' threads, create organizations, search for other users, and edit their profile, including adding a profile picture.



## Tech Stack

- **Frontend:**
  - React
  - Next.js
  - TypeScript

- **Backend:**
  - Node.js
  - MongoDB

- **Authentication:**
  - Clerk

- **File Upload:**
  - UploadThing

- **Deployment:**
  - Vercel

## Features

- Create a thread: Creating a thread and posting it on the home page.
- Comment on a thread: Commenting on another user’s thread.
- Create an organization: Users can create organizations, edit them, and add members to them.
- Search other users: Users can search for other users.
- Edit your profile and adding a profile picture: Users can edit their profile and upload a profile image.

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. Clone the repository.
   ```bash
   git clone https://github.com/tamir-liebermann/threads_app_clone.git

2. Install dependencies.
   cd threads_app_clone
   npm install

3. Run the development server.
   npm run dev

4. Open http://localhost:3000 in your 
   browser 
 
## Project Structure

   The project is seperated in 3 main parts  : 
1. 
   app folder : includes the api, auth, and root files of the app 
   including:
   - Sign-in/up folders and the layout of the app 
   - Onboarding page and layout
   - activity 
   - communities
   - thread creation
   - profile 
   - search
2. 
   api : routs and webhook
3. 
   components folder: all the react components of the project
4. 
    lib folder: contains all the beckend logic of the project from actions to models and validations 