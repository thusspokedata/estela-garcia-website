import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, Card } from "react-bootstrap";

export const DeleteConcert = (props) => {
  const { concertID } = props;

  const handleSubmit = (e) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(concertID);
        axios
          .post(`/api/concerts/delete/${concertID}`, concertID)
          .then((response) => {
            console.log("response:", response);
            Swal.fire("Deleted!", "The concert has been deleted.", "success");
          });
      }
    });
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Do you want to delete this concert?</Card.Title>
            <Button
              type="button"
              className="btn btn-danger"
              onClick={handleSubmit}
            >
              Delete Concert
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
