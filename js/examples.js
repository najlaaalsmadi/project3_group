

// example , get user by username : 

function getUserByUsername(username) {
    // Retrieve existing local storage data
    let localStorageData = JSON.parse(localStorage.getItem('localStorageData'));
  
    // Find the user with the provided username
    let user = localStorageData.userData.users.find(u => u.username === username);
    
    if (user) {
      console.log('User found:', user);
      return user;
    } else {
      console.log('User not found');
      return null;
    }
  }

  
  //example , add new user : 

  function addUser(username, password, firstName, lastName, email) {
    // Retrieve existing local storage data
    let localStorageData = JSON.parse(localStorage.getItem('localStorageData'));
  
    // Create new user object
    const newUser = {
      id: localStorageData.userData.users.length + 1, // Generate a new ID
      username: username,
      password: password, // Ideally, hash the password before storing
      firstName: firstName,
      lastName: lastName,
      email: email
    };
  
    // Add new user to users array
    localStorageData.userData.users.push(newUser);
  
    // Update local storage
    localStorage.setItem('localStorageData', JSON.stringify(localStorageData));
  
    console.log('User added:', newUser);
  }

  

  

// this code create the local storage : 

// function addData(){


//     const localStorageData = {
    
//       userData: { // first main object : user data
      
      
//         users: [
//           {
//             id: 1,
//             username: "john_doe",
//             password: "hashedPassword1",
//             firstName: "John",
//             lastName: "Doe",
//             email: "john.doe@example.com"
//           },
//           {
//             id: 2,
//             username: "jane_smith",
//             password: "hashedPassword2",
//             firstName: "Jane",
//             lastName: "Smith",
//             email: "jane.smith@example.com"
//           }
//         ],
    
    
//         loggedInUser: 1
     
//       },
    
    
    
//       appData: { // second main object : appData
      
      
      
//         tasks: [
//           {
//             taskId: 1,
//             taskTitle: "Task 1",
//             taskDescription: "Description of Task 1",
//             dueDate: "2024-06-30",
//             assignedTo: "employeeId1"
//           },
//           {
//             taskId: 2,
//             taskTitle: "Task 2",
//             taskDescription: "Description of Task 2",
//             dueDate: "2024-07-05",
//             assignedTo: "employeeId2"
//           }
//         ],
    
    
    
//         employees: [
//           {
//             employeeId: "employeeId1",
//             name: "Employee 1",
//             department: "Department A" , 
//             image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=200&w=200"
    
//           },
//           {
//             employeeId: "employeeId2",
//             name: "Employee 2",
//             department: "Department B" , 
//             image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=200&w=200"
    
//           }
//         ],
    
    
//         leaveApplications: [
//           {
//             applicationId: 1,
//             employeeId: "employeeId1",
//             leaveType: "Casual Leave",
//             fromDate: "2024-07-01",
//             toDate: "2024-07-02",
//             reason: "Family vacation",
//             leaveDuration: "Full Day"
//           }
//         ],
    
    
    
    
//         contactMessages: [
//           {
//             firstName: "John",
//             lastName: "Doe",
//             email: "john.doe@example.com",
//             message: "Sample message content 1",
//             timestamp: "2024-06-16T12:00:00Z"
//           },
//           {
//             firstName: "Jane",
//             lastName: "Smith",
//             email: "jane.smith@example.com",
//             message: "Sample message content 2",
//             timestamp: "2024-06-16T13:00:00Z"
//           }
//         ]
    
//       },
    
    
//       profiles: { //third main object : profiles 
//         "1": {
//           name: "John Doe",
//           position: "Developer",
//           email: "john.doe@example.com",
//           phone: "123-456-7890",
//           location: "City, Country"
//         },
//         "2": {
//           name: "Jane Smith",
//           position: "Designer",
//           email: "jane.smith@example.com",
//           phone: "987-654-3210",
//           location: "Town, Country"
//         }
//       }
    
    
//     };
    
//     // Store initial data in local storage
//     localStorage.setItem('localStorageData', JSON.stringify(localStorageData));
    
//     // Example of retrieving the stored data from local storage
//     const storedData = JSON.parse(localStorage.getItem('localStorageData'));
//     console.log(storedData);
  
  
  
//   }
  
  