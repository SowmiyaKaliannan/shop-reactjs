import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center py-4 mt-5">
      <div className="container">
        <p className="mb-0">© 2024 Shop. All rights reserved.</p>
        <p className="mb-0">
          <a href="/privacy" className="text-decoration-none">Privacy Policy</a> | 
          <a href="/terms" className="text-decoration-none">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
