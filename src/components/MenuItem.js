import React from 'react';

// Aici avem o componenta care va fi reutilizata
// ce am facut e un card cu nume si pret
// unde nume si pret vin prin props
// observam ca avem optiunea de {name, price} deci
// s-a facut distruct la obiect direct ca sa nu folosim props.name ci
// sa folosim doar name 

function MenuItem({ name, price }) {
  return (
    // pentru style sa folosit boostrap metoda clasica dar putem folosi
    // si tailwind unde trebuie doar sa punem in classname
    // denumirile corecte din documentatia oficiala
    // vezi https://tailwindcss.com/

    // TODO: Va acelasi lucru si cu boostrap components de la boostrap si fa si cu tailwind
    <div className="d-flex justify-content-between border-bottom py-2">
      <span>{name}</span>
      <strong>{price} €</strong>
    </div>
  );
}

export default MenuItem;