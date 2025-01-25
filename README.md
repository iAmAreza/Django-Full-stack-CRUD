# Student Management System (CRUD)

This is a basic web application designed to practice CRUD (Create, Read, Update, Delete) operations using Django and PostgreSQL. The frontend is built with React, while the backend leverages Django. PostgreSQL is used as the database to manage student records efficiently.

## Features
- **Add Students**: Create new student records with relevant details.
- **View Students**: Display a list of all student records.
- **Update Records**: Edit existing student details.
- **Delete Records**: Remove student records as needed.

## Tech Stack
- **Frontend**: React
- **Backend**: Django
- **Database**: PostgreSQL

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone git@github.com:iAmAreza/Django-Full-stack-CRUD.git
   ```

2. Navigate to the project directory:
   ```bash
   cd student-management-system
   ```

3. Create a virtual environment for the backend:
   ```bash
   python -m venv env
   source env/bin/activate  # For Windows: env\Scripts\activate
   ```


5. Navigate to the frontend directory and install the dependencies:
   ```bash
   cd frontend
   npm install
   ```

6. Start the development servers:
   - For the frontend:
     ```bash
     npm run dev
     ```
   - For the backend:
     ```bash
     python manage.py runserver
     ```

## Future Enhancements
- Add authentication for user roles (e.g., admin, teacher, student).
- Implement additional features like attendance tracking and grade management.
- Enhance the UI/UX with advanced React components and styling.

---

Feel free to contribute or provide feedback to improve the project!
