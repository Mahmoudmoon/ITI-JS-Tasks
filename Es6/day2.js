// Fetch users from an API and display them
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => displayUsers(users))
    .catch(error => console.error('Error fetching users:', error));

// Function to display users in the table
function displayUsers(users) {
    const usersTable = document.getElementById('usersTable');
    usersTable.innerHTML = ''; // Clear the table before adding new data

    users.forEach(user => {
        const row = document.createElement('tr');

        // Create table cells
        const nameCell = document.createElement('td');
        nameCell.textContent = user.name;
        
        const emailCell = document.createElement('td');
        emailCell.textContent = user.email;

        const actionCell = document.createElement('td');
        
        // Create a delete button for each user
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.onclick = () => deleteUser(user.id, row);

        actionCell.appendChild(deleteButton);
        
        // Append the cells to the row
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(actionCell);

        // Append the row to the table body
        usersTable.appendChild(row);
    });
}

// Function to delete a user row from the table
function deleteUser(userId, row) {
    // Simulate delete by removing the row from the table
    row.remove();

    // You can make an API call here to delete the user from the backend
    // For example:
    // fetch(https://jsonplaceholder.typicode.com/users/${userId}, {
    //     method: 'DELETE'
    // })
    // .then(response => response.json())
    // .then(data => console.log('User deleted:', data))
    // .catch(error => console.error('Error deleting user:', error));
}