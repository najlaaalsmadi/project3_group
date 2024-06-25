const leaveForm = document.getElementById("leaveForm");
      const applicationList = document.getElementById("applicationList");
      const employeeNameSelect = document.getElementById("employeeName");
      const taskTableBody = document.getElementById("taskTableBody");
      // Load stored applications
      loadApplications();

      // Load employees from JSON file
      loadEmployees();

      leaveForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const employeeName = document.getElementById("employeeName").value;
        const leaveType = document.getElementById("leaveType").value;
        const startDate = document.getElementById("fromDate").value;
        const endDate = document.getElementById("toDate").value;
        const leaveDuration = getLeaveDuration();
        const leaveReason = document.getElementById("reason").value;

        const leaveApplication = {
          employeeName,
          leaveType,
          startDate,
          endDate,
          leaveDuration,
          leaveReason,
          leaveLetter: e.target.result,
        };

        leaveForm.reset();

        saveApplication(leaveApplication);
        displayApplication(leaveApplication);
      });

      function saveApplication(application) {
        const applications = getApplications();
        applications.push(application);
        localStorage.setItem("leaveApplications", JSON.stringify(applications));
      }

      function getApplications() {
        const applications = localStorage.getItem("leaveApplications");
        return applications ? JSON.parse(applications) : [];
      }

      function loadApplications() {
        const applications = getApplications();
        applications.forEach((application) => displayApplication(application));
      }

      // function displayApplication(application) {
      //   const li = document.createElement("li");
      //   li.className = "list-group-item";
      //   li.innerHTML = `Name: ${application.employeeName}, Type: ${application.leaveType}, Start: ${application.startDate}, End: ${application.endDate}, Duration: ${application.leaveDuration}, Reason: ${application.leaveReason}`;
      //   applicationsList.appendChild(li);
      // }
      
      function displayApplication(application) {
        const row = document.createElement("tr");
        row.dataset.id = application.id;
        row.innerHTML = `
            <td>${application.employeeName}</td>
            <td>${application.leaveType}</td>
            <td>${application.leaveReason}</td>
            <td>${application.startDate}</td>
            <td>${application.endDate}</td>
            <td>${application.leaveDuration}</td>
             
        `;
        taskTableBody.appendChild(row);

      }

      async function loadEmployees() {
        const response = localStorage.getItem('employees');
        console.log(response);
        const data = JSON.parse(response);
        console.log(data);
        data.forEach((employee) => displayEmployee(employee.name));
      }

      function displayEmployee(name) {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        employeeNameSelect.appendChild(option);
      }
      function getLeaveDuration() {
        const selectedLeaveDuration = document.querySelector('input[name="leaveDuration"]:checked').value;
        return selectedLeaveDuration;
      }
      //localStorage.clear();