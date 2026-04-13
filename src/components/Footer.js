// import React from "react";
// import "../Footer.css";
// import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">

//         {/* LEFT SECTION */}
//         <div className="footer-col brand">
//           <img src="https://homepride.in/wp-content/uploads/2025/12/logo.png" alt="Home Pride" className="logo" />
//           <p>
//             We Turn Your Ideas Into Reality. Our Mission Is To Deliver Innovative,
//             Durable, And Aesthetically Strong Tile Fixing And Surface Finishing
//             Solutions That Redefine Construction Quality.
//           </p>

//           <div className="social-icons">
//             <FaFacebookF />
//             <FaInstagram />
//             <FaXTwitter />
//             <FaYoutube />
//             <FaLinkedinIn />
//             <FaPinterestP />
//           </div>
//         </div>

//         {/* CONTACTS */}
//         <div className="footer-col">
//           <h3>CONTACTS</h3>
//           <p>49/92 Site 4 Sahibabad</p>
//           <p>Industrial Area, Ghaziabad,</p>
//           <p>Uttar Pradesh - 201010</p>
//           <p>Inquiry@Homepride.In</p>
//           <p>1800111818</p>
//         </div>

//         {/* IMPORTANT LINKS */}
//         <div className="footer-col">
//           <h3>IMPORTANT LINKS</h3>
//           <ul>
//             <li>Blogs Article</li>
//             <li>TDS Report PDF Download</li>
//             <li>Tile Adhesive Catalogue</li>
//             <li>Grout Colour Shades Card</li>
//             <li>Epoxy Colour Shade Card</li>
//             <li>Return & Refund Policy</li>
//             <li>Shipping Policy</li>
//           </ul>
//         </div>

//         {/* OUR TOOLS */}
//         <div className="footer-col">
//           <h3>OUR TOOLS</h3>
//           <ul>
//             <li>Grout Calculator</li>
//             <li>Wall Plaster Calculator</li>
//             <li>Wall Putty Calculator</li>
//             <li>Tile Joint Filler Visualizer</li>
//             <li>Calculate Adhesive Coverage</li>
//             <li>Tile Grout Coverage Calculator</li>
//             <li>Tile Adhesive Recommender Tool</li>
//           </ul>
//         </div>

//         {/* PRODUCTS */}
//         <div className="footer-col">
//           <h3>ADHESIVE PRODUCT</h3>
//           <div className="products">
//             <div className="product">
//               <img src="https://homepride.in/wp-content/uploads/2025/11/All-Rounder-PU-Base-Adhesive-1024x1024.webp" alt="PU Adhesive" />
//               <p>PU Adhesive</p>
//             </div>
//             <div className="product">
//               <img src="https://homepride.in/wp-content/uploads/2025/11/AAC-300x300.webp" alt="AAC Block Adhesive" />
//               <p>AAC Block Adhesive</p>
//             </div>
//           </div>

//           <img src="https://homepride.in/wp-content/uploads/elementor/thumbs/icon-2-Photoroom-rl9pojjl1n7epspgggulgx01phvpau648piqa692v0.webp" alt="Google Play" className="playstore" />
//         </div>

//       </div>

//       <div className="footer-bottom">
//         Copyright © 2026 Homepride.in All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import React from "react";
import "../Footer.css";
// import { footerData } from "./footerData";
import { footerData } from "../data/footerData";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col brand">
          <img src={footerData.brand.logo} alt="logo" className="logo" />
          <p>{footerData.brand.description}</p>

          <div className="social-icons">
            {footerData.brand.socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <a href={social.link} key={index}>
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* CONTACTS */}
        <div className="footer-col">
          <h3>CONTACTS</h3>
          {footerData.contacts.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        {/* IMPORTANT LINKS */}
        <div className="footer-col">
          <h3>IMPORTANT LINKS</h3>
          {/* <ul>
            {footerData.importantLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul> */}
            <ul>
  {footerData.importantLinks.map((link, index) => (
    <li key={index}>
      <Link to={link.url} style={{color:"white"}} >{link.label}</Link>
    </li>
  ))}
</ul>

        </div>

        {/* TOOLS */}
        <div className="footer-col">
          <h3>OUR TOOLS</h3>
          {/* <ul>
            {footerData.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul> */}
          <ul>
  {footerData.tools.map((tool, index) => (
    <li key={index}>
      <Link to={tool.url} style={{color:"white"}} >{tool.label}</Link>
    </li>
  ))}
</ul>
        </div>

        {/* PRODUCTS */}
        <div className="footer-col">
          <h3>ADHESIVE PRODUCT</h3>
          <div className="products">
            {footerData.products.map((product, index) => (
              <div className="product" key={index}>
                <img src={product.img} alt={product.name} />
                <p>{product.name}</p>
              </div>
            ))}
          </div>

          <img
            src={footerData.playstore}
            alt="playstore"
            className="playstore"
          />
        </div>
      </div>

      <div className="footer-bottom">
        Copyright {footerData.copyright}
      </div>
    </footer>
  );
};

export default Footer;