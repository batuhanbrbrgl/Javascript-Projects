// Http Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error
// Holds the status of the XMLHttpRequest.
// 0: request not initialized 
// 1: server connection established
// 2: request received 
// 3: processing request 
// 4: request finished and response is ready

document.getElementById("ajax").addEventListener("click", employeefonk)



function employeefonk() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "employees.json", true)
    let list = document.getElementById("employees")
    xhr.onload = function() {
        if (this.status == 200) {
            const employees = JSON.parse(this.responseText)
            employees.forEach(function(employee) {
                list.innerHTML += `
                <tr>
                        <td>${employee.name}</td>
                        <td>${employee.department}</td>
                        <td>${employee.salary}</td>
                      </tr>
                `


            })

        }
    }


    xhr.send();


}