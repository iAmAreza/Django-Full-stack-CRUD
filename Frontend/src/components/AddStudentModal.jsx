import React, { useState } from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { addStudent } from '../services/StudentService';  // Import the service function

const AddStudentModal = (props) => {
  // Local state for form data
  const [student, setStudent] = useState({
    FirstName: '',
    LastName: '',
    RegistrationNo: '',
    Email: '',
    Course: ''
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form submission behavior

    // Call the addStudent function from the service to send the student data to the backend
    addStudent(student)
      .then((result) => {
        alert(result);  // Show success message
        props.setUpdated(true);  // Notify the parent component that a student was added
      })
      .catch((error) => {
        console.error("There was an error adding the student:", error.response.data);  // Log the error
        alert("Failed to Add Student");  // Show error message if something goes wrong
      });
  };

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevState => ({
      ...prevState,
      [name]: value  // Update the specific form field in the student state
    }));
  };

  return (
    <div className="container">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Student
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={handleSubmit}>  {/* Form submission handled by handleSubmit */}
                <Form.Group controlId="FirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="FirstName"
                    required
                    value={student.FirstName}  // Controlled input
                    onChange={handleChange}  // Handle input changes
                    placeholder="First Name"
                  />
                </Form.Group>

                <Form.Group controlId="LastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="LastName"
                    required
                    value={student.LastName}  // Controlled input
                    onChange={handleChange}  // Handle input changes
                    placeholder="Last Name"
                  />
                </Form.Group>

                <Form.Group controlId="RegistrationNo">
                  <Form.Label>Registration No.</Form.Label>
                  <Form.Control
                    type="text"
                    name="RegistrationNo"
                    required
                    value={student.RegistrationNo}  // Controlled input
                    onChange={handleChange}  // Handle input changes
                    placeholder="Registration No."
                  />
                </Form.Group>

                <Form.Group controlId="Email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="Email"
                    required
                    value={student.Email}  // Controlled input
                    onChange={handleChange}  // Handle input changes
                    placeholder="Email"
                  />
                </Form.Group>

                <Form.Group controlId="Course">
                  <Form.Label>Course</Form.Label>
                  <Form.Control
                    type="text"
                    name="Course"
                    required
                    value={student.Course}  // Controlled input
                    onChange={handleChange}  // Handle input changes
                    placeholder="Course"
                  />
                </Form.Group>

                <Form.Group>
                  <p></p>
                  <Button variant="primary" type="submit">  {/* Form submit button */}
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddStudentModal;
