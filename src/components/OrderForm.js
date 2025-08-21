import React, { useState } from "react";
// importam React și hook-ul useState
// useState ne lasă să stocăm și să actualizăm valori (state) în componentă

import { Form, Button } from "react-bootstrap";
// importăm componente deja făcute din biblioteca react-bootstrap
// aici folosim un formular și un buton cu stil bootstrap

function OrderForm() {
  // definim 2 state-uri: unul pentru nume și unul pentru băutura selectată
  // initial, numele e gol iar băutura default este "Espresso"
  const [name, setName] = useState("");
  const [drink, setDrink] = useState("Espresso");

  // funcția care se apelează la submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // preventDefault oprește reîncărcarea paginii la trimiterea formularului

    // aici doar afișăm un alert cu numele și băutura
    // în practică, aici ai trimite datele la server fictiv
    alert(`Order placed by ${name} for a ${drink}!`);
  };

  return (
    // Form e un wrapper peste <form> HTML dar stilizat cu Bootstrap
    <Form onSubmit={handleSubmit}>
      {/* Grup de input pentru numele clientului */}
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        {/* Controlul inputului text, legat de state-ul "name"
            când scriem ceva, se apelează setName și se actualizează valoarea */}
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      {/* Grup de input pentru alegerea băuturii */}
      <Form.Group className="mb-3">
        <Form.Label>Select Drink</Form.Label>
        {/* Select dropdown cu 3 opțiuni, controlat prin state-ul "drink" */}
        <Form.Select value={drink} onChange={(e) => setDrink(e.target.value)}>
          <option>Espresso</option>
          <option>Cappuccino</option>
          <option>Latte</option>
        </Form.Select>
      </Form.Group>

      {/* Buton de trimitere al formularului */}
      <Button variant="primary" type="submit">
        Place Order
      </Button>
    </Form>
  );
}

export default OrderForm;
// exportăm componenta ca să fie folosită în alte fișiere
