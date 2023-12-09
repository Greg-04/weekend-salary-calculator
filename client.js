function submitForm(event) {
    console.log('Submit employee');

        // Find the input field and assign the value to our variable
        let firstName = document.querySelector('#firstNameInput').value;
        let lastName = document.querySelector('#lastNameInput').value;
        let idNumber = document.querySelector('#idInput').value;
        let jobTitle = document.querySelector('#titleInput').value;
        let annualSalary = document.querySelector('#annualSalaryInput').value;

        // Find the tbody on the page so that we can append to it
        let employeeTable = document.querySelector('#employeeList');
        // let lastIndex = temperatureTable.lastElementChild;
        // let tableData = Number(lastIndex.firstElementChild.innerHTML);
        employeeTable.innerHTML += `
            <tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${idNumber}</td>
                <td>${jobTitle}</td>
                <td>${annualSalary}</td>
                <td><button onclick="deleteRow(event)>Delete</button></td>
            </tr>
`;

let monthlySalary = annualSalary / 12;
console.log(monthlySalary);

};

let monthlyTotal = 0;



function deleteRow(event) {
    console.log('delete row');
    event.target.parentNode.remove();
}