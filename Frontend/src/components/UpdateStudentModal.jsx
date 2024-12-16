import React, { useState, useEffect } from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { updateStudent } from '../services/StudentService';  // Import the service function

const UpdateStudentModal = (props) => {
  // Local state for form data
  const [student, setStudent] = useState({
    FirstName: '',
    LastName: '',
    RegistrationNo: '',
    Email: '',
    Course: ''
  });

  // Update the form state whenever props.student changes (i.e., when the modal opens with new data)
  useEffect(() => {
    if (props.student) {
      setStudent({
        FirstName: props.student.FirstName || '',
        LastName: props.student.LastName || '',
        RegistrationNo: props.student.RegistrationNo || '',
        Email: props.student.Email || '',
        Course: props.student.Course || ''
      });
    }
  }, [props.student]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form submission behavior
    
    // Log the updated student data for debugging
    console.log("Sending the following data to the backend for update:", student);

    // Call the updateStudent function from the service to send the update request to the backend
    updateStudent(props.student.studentId, student)
      .then((result) => {
        alert(result);  // Show success message
        props.setUpdated(true);  // Notify the parent component that the student data was updated
      })
      .catch((error) => {
        console.error("There was an error updating the student:", error.response.data);  // Log the error
        alert("Failed to Update Student");  // Show error message if something goes wrong
      });
  };

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevState => ({
      ...prevState,
      [name]: value
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
            Update Student Information
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

export default UpdateStudentModal;
