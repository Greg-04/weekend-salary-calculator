//Creating monthly total variable
let monthlyTotal = 0;

function submitForm(event) {
    console.log('Submit employee');
    // Assigning input values to variables
    let firstName = document.querySelector('#firstNameInput').value;
    let lastName = document.querySelector('#lastNameInput').value;
    let idNumber = document.querySelector('#idInput').value;
    let jobTitle = document.querySelector('#titleInput').value;
    let annualSalary = Number(document.querySelector('#annualSalaryInput').value);

    //calculate monthly salary
    let monthlySalary = annualSalary / 12;
    
    // Append to the body of the table
    let employeeTable = document.querySelector('#employeeList');

    // Add values to table
    employeeTable.innerHTML += `
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${idNumber}</td>
    <td>${jobTitle}</td>
    <td>${annualSalary}</td>
    <td><button onclick="deleteRow(event)">Delete</button></td>
`; 

    // Update monthly total
    monthlyTotal += monthlySalary;

    //Call on update total function
    updateTotal();
    
    //Reset form
    document.querySelector("#addEmployeeForm").reset();
};

//Function to delete row with button
function deleteRow(event) {
    console.log('delete row');

    //Remove the row
    event.target.parentNode.parentNode.remove();
}

//function to update total in footer
function updateTotal() {
    let totalElement = document.querySelector('#totalMonthly');
    totalElement.innerHTML = `$${monthlyTotal}`;

    //conditional to add class if monthly total exceeds 20,000
    let footer = document.querySelector('#footer');
    if (monthlyTotal > 20000) {
        footer.classList.add('over-budget');
        console.log("We're over budget :(")
    } else {
        footer.classList.remove('over-budget');
        console.log(`We're good!`);
    }

}