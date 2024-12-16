import axios from 'axios';

// Function to get all students
export function getStudents() {
  return axios.get('http://127.0.0.1:8000/students/api/')
    .then(response => response.data)
    .catch(error => {
      console.error("There was an error fetching the students:", error);
      throw error;
    });
}

// Function to delete a student by ID
export function deleteStudent(studentId) {
  return axios.delete(`http://127.0.0.1:8000/students/api/delete/${studentId}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.data)
  .catch(error => {
    console.error("There was an error deleting the student:", error);
    throw error;
  });
}

// Function to add a new student
// Function to add a new student
export function addStudent(student) {
  // Log the student data for debugging
  console.log("Adding student data:", student);

  return axios.post('http://127.0.0.1:8000/students/api/create/', {
    FirstName: student.FirstName,  // Access student object directly
    LastName: student.LastName,    // No need to use .value, it's already passed as the field value
    RegistrationNo: student.RegistrationNo,
    Email: student.Email,
    Course: student.Course
  }, {
    headers: {
      'Content-Type': 'application/json'  // Ensure the data is sent as JSON
    }
  })
  .then(response => {
    return "student added successfully"
  })
  .catch(error => {
    // More robust error handling
    if (error.response) {
      console.error("Server responded with an error:", error.response.data);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up the request:", error.message);
    }
    throw error;
  });
}


// Function to update a student by ID
export function updateStudent(stuid, student) {
  // Log the student data for debugging
  console.log("Sending the following data to the backend for update:", student);

  return axios.put(`http://127.0.0.1:8000/students/api/update/${stuid}`, {
    FirstName: student.FirstName,  // Access student object directly
    LastName: student.LastName,
    RegistrationNo: student.RegistrationNo,
    Email: student.Email,
    Course: student.Course
  })
  .then(response => response.data)
  .catch(error => {
    console.error("There was an error updating the student:", error.response.data);
    throw error;
  });
}
