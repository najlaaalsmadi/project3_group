


//استرجاع بيانات الموظفين LocalStorage
function fetchEmployeesFromLocalStorage() {
    // Retrieve employees data from localStorage
    const employeesData = JSON.parse(localStorage.getItem('employees'));

    if (employeesData && employeesData.length > 0) {
        return employeesData;
    } else {
        console.error('No employee data found in localStorage.');
        return []; // Return an empty array if no data found
    }
}
// إنشاء صفوف الجدول للموظفين
function createEmployeeTableRow(employee) {
    const row = document.createElement('tr');


    const imgCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = employee.image;
    img.style.width = '50px'; 
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement('td');
    nameCell.innerHTML = employee.name;
    row.appendChild(nameCell);

    const jobTitleCell = document.createElement('td');
    jobTitleCell.innerHTML = employee.jobTitle;
    row.appendChild(jobTitleCell);

    const salaryCell = document.createElement('td');
    salaryCell.innerHTML = employee.salary;
    row.appendChild(salaryCell);

    return row;
}
// عرض الموظفين في الجدول يلي تم انشاء ب html 
async function displayEmployees() {
    const employees = fetchEmployeesFromLocalStorage();//للحصول على مصفوفة من كائنات الموظفين استدعاء function استرجاع الموظفين 
    const employeeTableBody = document.getElementById('employee-table-body');

    employeeTableBody.innerHTML = '';    // مسح المحتوى الحالي في جسم الجدول

  // التكرار عبر كل موظف وإلحاق صف بجسم الجدول لحتى يخلص كل الموظفين 
    employees.forEach(employee => {
        const row = createEmployeeTableRow(employee);
        employeeTableBody.appendChild(row);
    });
}
//تصفية الموظفين بناءً على مدخلات البحث
function filterEmployees(searchTerm) {
    const employees = fetchEmployeesFromLocalStorage();
    const filteredEmployees = employees.filter(employee => {
        const nameMatch = employee.name.toLowerCase().includes(searchTerm.toLowerCase());
       
        const jobTitleMatch = employee.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
        console.log("nameMatch:",nameMatch);
        console.log("jobTitleMatch:",jobTitleMatch);
        return nameMatch || jobTitleMatch;
    });
 

    const employeeTableBody = document.getElementById('employee-table-body');
    employeeTableBody.innerHTML = '';

    filteredEmployees.forEach(employee => {
        const row = createEmployeeTableRow(employee);
        employeeTableBody.appendChild(row);
    });
}
//عند الضغط على ال input  رح يستدعي function filterEmployees 
document.getElementById('search-input').addEventListener('input', function() {
    const searchTerm = this.value.trim();
    filterEmployees(searchTerm);
});

//استدعاء function عشان عرض البيانات 
displayEmployees();
function createEmployeeCard(employee) {
    const card = document.createElement('div');
    card.className = 'card';
    const img = document.createElement('img');
    img.src = employee.image;
    img.alt = employee.name;

    const name = document.createElement('h2');
    name.textContent = employee.name;

    const jobTitle = document.createElement('p');
    jobTitle.textContent = `Job Title: ${employee.jobTitle}`;

    const salary = document.createElement('p');
    salary.textContent = `Salary: $${employee.salary}`;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(jobTitle);
    card.appendChild(salary);

    return card;
}
async function displayEmployees_card() {
    const employees = fetchEmployeesFromLocalStorage();
    const employeeCardsContainer = document.getElementById('employees-section-card');

    // مسح المحتوى الحالي في حاوية كرتات الموظفين
    employeeCardsContainer.innerHTML = '';

    // التكرار عبر كل موظف وإلحاق كرت بحاوية كرتات الموظفين
    employees.forEach(employee => {
        if(employee.salary>=7000)
    {
            const card = createEmployeeCard(employee);
            employeeCardsContainer.appendChild(card);}
        
    });
}

// استدعاء displayEmployees_card لعرض بيانات الموظفين
displayEmployees_card();

