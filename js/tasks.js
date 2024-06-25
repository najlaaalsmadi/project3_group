const taskForm = document.getElementById("taskForm");
      //const taskList = document.getElementById("taskList");
      const taskTableBody = document.getElementById("taskTableBody");
      const employeeNameSelect = document.getElementById("employeeName");
      let editTaskId = null;
      // Load stored tasks
      loadTasks();

      // Load employees from JSON file
      loadEmployees();
      
      taskForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const employeeName = document.getElementById("employeeName").value;
        const taskTitle = document.getElementById("taskTitle").value;
        const taskDescription =
          document.getElementById("taskDescription").value;
        const dueDate = document.getElementById("dueDate").value;

        const task = {
          id: editTaskId || Date.now(),
          employeeName,
          taskTitle,
          taskDescription,
          dueDate,
        };

        // if (editTaskId) {
        //   updateTask(task);
        // } else {
        //   saveTask(task);
        //   displayTask(task);
        // }
        // taskForm.reset();
        // editTaskId = null;

        saveTask(task);
        displayTask(task);
        taskForm.reset();
      });

      function saveTask(task) {
        const tasks = getTasks();
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }

      function updateTask(updatedTask) {
        let tasks = getTasks();
        tasks = tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        );
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
      }

      function getTasks() {
        const tasks = localStorage.getItem("tasks");
        return tasks ? JSON.parse(tasks) : [];
      }

      function loadTasks() {
        const tasks = getTasks();
        tasks.forEach((task) => displayTask(task));
      }

      // function displayTask(task) {
      //   const li = document.createElement("li");
      //   li.className =
      //     "list-group-item d-flex justify-content-between align-items-center";
      //   li.innerHTML = `
      //       <span>
      //           Name: ${task.employeeName}, Task: ${task.taskTitle}, Due: ${task.dueDate}, Description: ${task.taskDescription}
      //       </span>
      //       <span>
      //           <button class="btn btn-sm btn-warning edit-task" data-id="${task.id}">Edit</button>
      //           <button class="btn btn-sm btn-danger delete-task" data-id="${task.id}">Delete</button>
      //       </span>
      //   `;
      //   taskList.appendChild(li);

      //   const editButton = li.querySelector(".edit-task");
      //   const deleteButton = li.querySelector(".delete-task");

      //   editButton.addEventListener("click", () => {
      //     editTask(task);
      //   });

      //   deleteButton.addEventListener("click", () => {
      //     deleteTask(task.id);
      //   });
      // }

      function displayTask(task) {
        const row = document.createElement("tr");
        row.dataset.id = task.id;
        row.innerHTML = `
            <td>${task.employeeName}</td>
            <td>${task.taskTitle}</td>
            <td>${task.taskDescription}</td>
            <td>${task.dueDate}</td>
            <td>
                <button class="btn btn-sm btn-warning edit-task" data-id="${task.id}">Edit</button>
                <button class="btn btn-sm btn-danger delete-task" data-id="${task.id}">Delete</button>
            </td>
        `;
        taskTableBody.appendChild(row);

        const editButton = row.querySelector(".edit-task");
        const deleteButton = row.querySelector(".delete-task");

        editButton.addEventListener("click", () => {
          editTask(row, task);
        });

        deleteButton.addEventListener("click", () => {
          deleteTask(task.id);
        });
      }

      function editTask(row, task) {
        // document.getElementById("employeeName").value = task.employeeName;
        // document.getElementById("taskTitle").value = task.taskTitle;
        // document.getElementById("taskDescription").value = task.taskDescription;
        // document.getElementById("dueDate").value = task.dueDate;
        // editTaskId = task.id;
        //}
        row.innerHTML = `
            <td><input type="text" class="form-control" value="${task.employeeName}" /></td>
            <td><input type="text" class="form-control" value="${task.taskTitle}" /></td>
            <td><input type="text" class="form-control" value="${task.taskDescription}" /></td>
            <td><input type="date" class="form-control" value="${task.dueDate}" /></td>
            <td>
                <button class="btn btn-sm btn-success save-task" data-id="${task.id}">Save</button>
                <button class="btn btn-sm btn-secondary cancel-task" data-id="${task.id}">Cancel</button>
            </td>
        `;

        const saveButton = row.querySelector(".save-task");
        const cancelButton = row.querySelector(".cancel-task");

        saveButton.addEventListener("click", () => {
          saveEditedTask(row, task.id);
        });

        cancelButton.addEventListener("click", () => {
          cancelEdit(row, task);
        });
      }

      function saveEditedTask(row, id) {
        
        const employeeName = row.querySelector("td:nth-child(1) input").value;
        const taskTitle = row.querySelector("td:nth-child(2) input").value;
        const taskDescription = row.querySelector(
          "td:nth-child(3) input"
        ).value;
        const dueDate = row.querySelector("td:nth-child(4) input").value;

        const updatedTask = {
          id,
          employeeName,
          taskTitle,
          taskDescription,
          dueDate,
        };
        if (row) {
          row.remove();
        }
        updateTask(updatedTask);
        location.reload();
      }

      function cancelEdit(row, task) {
        row.innerHTML = `
            <td>${task.employeeName}</td>
            <td>${task.taskTitle}</td>
            <td>${task.taskDescription}</td>
            <td>${task.dueDate}</td>
            <td>
                <button class="btn btn-sm btn-warning edit-task" data-id="${task.id}">Edit</button>
                <button class="btn btn-sm btn-danger delete-task" data-id="${task.id}">Delete</button>
            </td>
        `;

        const editButton = row.querySelector(".edit-task");
        const deleteButton = row.querySelector(".delete-task");

        editButton.addEventListener("click", () => {
          editTask(row, task);
        });

        deleteButton.addEventListener("click", () => {
          deleteTask(task.id);
        });
      }

      // function deleteTask(id) {
      //   let tasks = getTasks();
      //   tasks = tasks.filter((task) => task.id !== id);
      //   localStorage.setItem("tasks", JSON.stringify(tasks));
      //   loadTasks();
      // }

      function deleteTask(id) {
        let tasks = getTasks();
        tasks = tasks.filter((task) => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        const row = document.querySelector(`tr[data-id='${id}']`);
        if (row) {
          row.remove();
        }
      }

      async function loadEmployees() {
        const response = localStorage.getItem('employees');
        console.log(response);
        const data = JSON.parse(response);
        console.log(data);
        data.forEach((employee) => displayEmployee(employee.name))
      }

      function displayEmployee(name) {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        employeeNameSelect.appendChild(option);
      }

      //localStorage.clear();