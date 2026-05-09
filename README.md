# CS3338_FinalProject

## Project Overview
This project is developed as part of CS3338 Senior Design. The goal of this software is to build a centralized Dog Shelter Management System that allows shelters to
efficiently manage dog intake, medical records, and adoption processes.

## Why This Project Matters?
Animal shelters often rely on disorganized or manual systems to track dogs and adoption workflows. This system improves organization, reduces errors, and streamlines daily
operations by providing a single platform for managing all shelter activities.

---

## Jira Link:
https://cs3338-dogshelter.atlassian.net/jira/software/projects/SCRUM/boards/1


## Core Features

1. Dog Intake System
- Add new dogs to the system
- Store basic information (name, breed, age, arrival date)

2. Medical Record System
- Track vaccinations and treatments
- Store medical history and update health status

3. Adoption Management System
- Users submit adoption applications
- Staff review, approve, or reject applications

4. Dog Status Tracking
- Track status (Available, Pending, Adopted)
- Update availability in real-time

5. Admin Dashboard
- Central interface for staff to manage dogs and applications
- View system data and perform administrative actions

## Tech Stack

### Frontend
- React.js
- react-dom
- react-scripts
- Axios
- BootStrap

### Backend
- Node.js
- Express.js
- body-parser
- CORS
- dotenv
- jsonwebtoken

### Database
- MySQL
- MySQL2

### DevOps
- Docker
- Docker Compose
- Github
---

### How to Run the Project


1. Clone the Repository
- git clone https://github.com/Yumcha113/CS3338_FinalProject.git
- cd CS3338_FinalProject

2. Run with Docker
- docker compose up --build (Make sure docker is installed and running, then execute)

3. Access the application
- Frontend: https://localhost:3000
- Backend: https://localhost:5001
- Database Test: https://localhost:5001/db-test

4. Stopping the Application
- Press CTRL + C in the terminal, then run: docker compose down

Key takeaways
- clone
- run
- access
- stop
