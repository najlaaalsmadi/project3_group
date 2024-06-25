// Define initial data
let initialUserData = {
    users: [
        {
            id: 1,
            username: "john_doe",
            password: "hashedPassword1",
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            location : "" ,
            role : "" ,
            phone : "" , 
            about : "" ,
            img : ""
        },
        {
            id: 2,
            username: "jane_smith",
            password: "hashedPassword2",
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            location : "" ,
            role : "" ,
            phone : "" , 
            about : "" ,
            img : ""
        }
    ],
    loggedInUser: null
};

let initialTasks = [
    {
        taskId: 1,
        taskTitle: "Task 1",
        taskDescription: "Description of Task 1",
        dueDate: "2024-06-30",
        assignedTo: "employeeId1"
    },
    {
        taskId: 2,
        taskTitle: "Task 2",
        taskDescription: "Description of Task 2",
        dueDate: "2024-07-05",
        assignedTo: "employeeId2"
    }
];

let initialLeaveApplications = [
    {
        employeeName: "employee3",
        endDate: "2024-07-04",
        leaveDuration: "Half Day",
        leaveReason: "new",
        leaveType: "Sick Leave",
        startDate: "2024-06-08"
    }
];

let initialContactMessage =[ {
    firstName: "qusai",
    lastName: "omar",
    email: "email@gmail.com",
    message: "this is message",
    timestamp: "2024-06-18T11:28:42.717Z"
}];

// let initialEmployees = [
//     {
//         image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=faces&fit=crop&w=200&h=200",
//         jobTitle: "Software Engineer",
//         name: "Ali Ahmed",
//         salary: 7000
//     }
// ];

// Function to initialize localStorage with default data
 async function initializeLocalStorage() {
    localStorage.setItem('userData', JSON.stringify(initialUserData));
    localStorage.setItem('tasks', JSON.stringify(initialTasks));
    localStorage.setItem('leaveApplications', JSON.stringify(initialLeaveApplications));
    localStorage.setItem('contactMessages', JSON.stringify(initialContactMessage));
    // localStorage.setItem('employees', JSON.stringify(initialEmployees));
    
    console.log('Default data initialized in localStorage.');

    // set employees data from the json file into the local storage 
    try {
        // Fetch employees data
        const response = await fetch('../data/employees.JSON');
        const employees = await response.json();

        // Store employees data in localStorage
        localStorage.setItem('employees', JSON.stringify(employees));  // <<<<<<<<<<<<<< we intilize employees here 
        
        // Log the stored data (optional for debugging)
        console.log(JSON.parse(localStorage.getItem('employees'))); 
    } catch (error) {
        console.error('Error fetching or storing data:', error);
    }
}

// Event listener for the button that initializes localStorage
document.getElementById('set-local').addEventListener('click', function() {
    initializeLocalStorage();
    sessionStorage.clear();
    alert('Default data initialized successfully!');
});
