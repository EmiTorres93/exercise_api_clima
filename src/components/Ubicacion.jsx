import React from "react";
import { Form } from "react-bootstrap";

const Ubicacion = () => {
  return (
    <section className="d-flex fled-flex justify-content-center">
      <Form className="m-5 w-75">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-star fs-3 fw-bold text-light">
            Ingresa tu Ciudad
          </Form.Label>
          <Form.Control type="email" placeholder="Ingrese su ciudad y país" />
        </Form.Group>
      </Form>
    </section>
  );
};

export default Ubicacion;
