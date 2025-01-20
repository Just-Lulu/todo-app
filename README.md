#  Todo App

This is a simple Todo application built with Next.js. It allows users to add tasks with a name and description, which are then displayed in a grid format.

## Features

- Add new tasks through a modal
- Display tasks in a 4 by 4 grid layout
- Save tasks to a database

## Project Structure

```
nextjs-todo-app
├── pages
│   ├── index.js          # Main entry point of the application
│   └── api
│       └── tasks.js      # API route for task operations
├── components
│   ├── TaskCard.js       # Component for displaying individual tasks
│   └── AddTaskModal.js    # Modal for adding new tasks
├── styles
│   └── Home.module.css    # CSS styles for the home page
├── package.json           # npm configuration file
├── next.config.js        # Next.js configuration settings
└── README.md             # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd nextjs-todo-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Click the "Add New Task" button to open the modal.
- Enter the task name and description, then click "Save" to add the task.
- Tasks will be displayed in a grid format on the main page.

## License

This project is licensed under the MIT License.