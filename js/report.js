
// Function to get employees from localStorage
function getEmployeesFromLocalStorage() {
    const employees = localStorage.getItem("employees");
    return employees ? JSON.parse(employees) : [];
}

// Function to get tasks from localStorage
function getTasksFromLocalStorage() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

// Function to get leave applications from localStorage
function getLeaveApplicationsFromLocalStorage() {
    const leaveApplications = localStorage.getItem("leaveApplications");
    return leaveApplications ? JSON.parse(leaveApplications) : [];
}

// Function to get contact messages from localStorage
function getContactMessagesFromLocalStorage() {
    const contactMessages = localStorage.getItem("contactMessages");
    return contactMessages ? JSON.parse(contactMessages) : [];
}

// Function to generate PDF with employee and task information
function generatePDF() {
    const jsPDF  = window.jspdf.jsPDF;// Destructuring jsPDF from window.jspdf object
    const employees = getEmployeesFromLocalStorage();
    const tasks = getTasksFromLocalStorage();
    const leaveApplications = getLeaveApplicationsFromLocalStorage();
    const contactMessages = getContactMessagesFromLocalStorage();
    const doc = new jsPDF();
    let startY = 20;

    let session_profile = JSON.parse(sessionStorage.getItem('logged-in-user'));
     
    // Add profile information
    doc.setFontSize(18);
    doc.text("Profile Information", 20, startY);
    startY += 10;
    doc.setFontSize(12);
    doc.text(`Name: ${session_profile.firstName +" "+session_profile.lastName}`, 20, startY); // Display profile name
    startY += 10;
    doc.text(`Role: ${session_profile.role}`, 20, startY); // Display profile role
    startY += 10;
    doc.text(`Email: ${session_profile.email}`, 20, startY); // Display profile email
    startY += 10;
    doc.text(`Phone: ${session_profile.phone}`, 20, startY); // Display profile phone
    startY += 10;
    doc.text(`Location: ${session_profile.location}`, 20, startY); // Display profile location
    startY += 20;

    // Add profile picture
    const imgData = session_profile.img;
    doc.addImage(imgData, 'JPEG', 20, startY, 50, 50);
    startY += 60; // Adjust startY for next section



    // Function to check if adding a new page is needed
    function checkNewPage(spaceNeeded) {
        if (startY + spaceNeeded > doc.internal.pageSize.height - 10) {
            doc.addPage();
            startY = 20;
        }
    }

    // Add employee information
    doc.setFontSize(18);
    doc.text("Employee List", 20, startY);
    startY += 10;
    employees.forEach((employee, index) => {
        const text = [
            `Employee ${index + 1}:`,
            `Name: ${employee.name}`,
            `Salary: ${employee.salary}`,
            `Department: ${employee.department}`
            // Add more fields as needed
        ];
        doc.setFontSize(12);
        checkNewPage(40); // Check if there's enough space for the next entry
        doc.text(text.join("\n"), 20, startY);
        startY += 40; // Increase startY for the next employee
    });

    // Add tasks information
    startY += 10; // Add some space between employee and task sections
    doc.setFontSize(18);
    doc.text("Task List", 20, startY);
    startY += 10;
    tasks.forEach((task, index) => {
        // Format the text for each task
        const text = [
            `Task ${index + 1}:`,
            `Assigned To: ${task.assignedTo}`,
            `Title: ${task.title}`,
            `Due Date: ${task.dueDate}`,
            `Description: ${task.description}`
        ];
        doc.setFontSize(12);
        checkNewPage(40); // Check if there's enough space for the next entry
        doc.text(text.join("\n"), 20, startY);
        startY += 40; // Increase startY for the next task
    });

    // Add leave applications information
    startY += 10;
    doc.setFontSize(18);
    doc.text("Leave Applications", 20, startY);
    startY += 10;
    leaveApplications.forEach((leaveApp, index) => {
        const text = [
            `Leave Application ${index + 1}:`,
            `Employee ID: ${leaveApp.employeeId}`,
            `Leave Type: ${leaveApp.leaveType}`,
            `From: ${leaveApp.fromDate}`,
            `To: ${leaveApp.toDate}`
        ];
        doc.setFontSize(12);
        checkNewPage(40); // Check if there's enough space for the next entry
        doc.text(text.join("\n"), 20, startY);
        startY += 40; // Increase startY for the next leave application
    });

    // Add contact messages information
    startY += 10;
    doc.setFontSize(18);
    doc.text("Contact Messages", 20, startY);
    startY += 10;
    contactMessages.forEach((message, index) => {
        const text = [
            `Message ${index + 1}:`,
            `Name: ${message.firstName} ${message.lastName}`,
            `Email: ${message.email}`,
            `Message: ${message.message}`,
            `Timestamp: ${message.timestamp}`
        ];
        doc.setFontSize(12);
        checkNewPage(40); // Check if there's enough space for the next entry
        doc.text(text.join("\n"), 20, startY);
        startY += 40; // Increase startY for the next message
    });

    // Save the PDF with a filename
    doc.save("report.pdf");
     

}
