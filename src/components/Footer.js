import React from 'react';
// Aici importul nu e necesar la React

// aceasta e o componenta dummy (nu are state sau props) ea doar randeaza un html de footer
function Footer() {
  return (
    <footer className="bg-dark text-light text-center p-3 mt-5">
      <p>&copy; 2025 Coffee House. All rights reserved.</p>
    </footer>
  );
}

// nu uitam de export default fiindca vorbim de o componenta de react
// chiar daca e doar o functie ce returneaza html
export default Footer;