# Employee Management System
## Description
    This is a simple employee management system built with Angular for the frontend and JSON Server for the backend. It supports CRUD operations (Create, Read, Update, Delete) for employee data.
    
## Features

- Add new employees with name, email, and phone details.

- View all employees in a tabular format.

- Edit employee details.

- Delete employees.

- Handle invalid routes with a Not Found page.

## Technologies Used

- Frontend: Angular, Bootstrap

- Backend: JSON Server (Fake REST API)

## File Structure

            /employee-management
            ├── src/
            │   ├── app/
            │   │   ├── add-user/
            │   │   │   ├── add-user.component.ts
            │   │   │   ├── add-user.component.html
            │   │   ├── list-user/
            │   │   │   ├── list-user.component.ts
            │   │   │   ├── list-user.component.html
            │   │   ├── edit-user/
            │   │   │   ├── edit-user.component.ts
            │   │   │   ├── edit-user.component.html
            │   │   ├── notfound/
            │   │   │   ├── notfound.component.html
            │   │   ├── services/
            │   │   │   ├── crud.service.ts
            ├── backend/
            │   ├── database.json
            ├── package.json
            ├── README.md

## Usage

- Add Employee: Navigate to add-user and fill in the details.

- View Employees: Go to list-user to see all employees.

- Edit Employee: Click on the edit button next to a record.

- Delete Employee: Click the delete button next to a record.

## Contributing

If you find any issues or have suggestions for improvement, feel free to fork the repository and submit a pull request.

## Author
THANGA SURYA
