function registerStudent() {
    const studentId = document.getElementById('studentId').value;
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const year = document.getElementById('year').value;
    const email = document.getElementById('email').value;

    if (studentId && name && course && year && email) {
        const table = document.getElementById('studentList');
        const newRow = table.insertRow();

        newRow.insertCell(0).innerText = studentId;
        newRow.insertCell(1).innerText = name;
        newRow.insertCell(2).innerText = course;
        newRow.insertCell(3).innerText = year;
        newRow.insertCell(4).innerText = email;

        document.getElementById('registrationForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
}
