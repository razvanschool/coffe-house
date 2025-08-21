import React, { useState, useEffect } from 'react';
// importul e scris asa fiindca React e tot pachetu
// iar usestate si useeffect is hook-uri (sau poti zice functii)
// din React care fac anumite lucruri

import MenuItem from './MenuItem';
// menu item e componenta la care trimitem prin props name si price

function MenuList() {
  const [items, setItems] = useState([]);
  // aici declaram un state gol pentru prima data
  // state-ul gol va indica si ca trebuie afisat loading vezi X2
  useEffect(() => {
    // Simulare fetch produse
    setTimeout(() => {
      setItems([
        { id: 1, name: 'Espresso', price: 2 },
        { id: 2, name: 'Cappuccino', price: 3 },
        { id: 3, name: 'Latte', price: 3.5 },
      ]);
    }, 500);
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      {/* X2: aici verificam daca array e gol si daca da afisam loading daca nu
      parcurgem array-ul si pentru fiecare item randam o componenta
      menuItem cate se ocupa de afisat carduri cu nume price */}

      {items.length === 0 ? <p>Loading...</p> : items.map(item => (
        // nu uita daca mapezi un array si afisezi un html sau componenta 
        // containerul sau componenta trebuie sa primeasca si key
        // ca sa nu avem warning/erros si sa stie react la ce anume face update
        // !! aceasta este o regula a randari l;istelor
        <MenuItem key={item.id} name={item.name} price={item.price} />
      ))}
    </div>
  );
}

export default MenuList;