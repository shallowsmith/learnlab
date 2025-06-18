import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <p>&copy; 2025 James Kim. All Rights Reserved.</p>
    <div className="footer__links">
        {["About", "Privacy Policy", "Licensing", "Contact"].map((item) =>
        <Link key={item}
        href={/${item.toLowerCase().replace(" ", "-")}}
        )}
    </div>
    </div>
  )
}

export default Footer