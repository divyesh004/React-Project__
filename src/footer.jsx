import "./App.css";
function Footer() {
  return (
    <div style={{width: "100%" }} className="footer-id">
      <div style={{width:"80%",margin:"auto",padding:"30px 20px"}}>
      <div style={{display:"flex",justifyContent:"space-between",textAlign:"start"}} className="footer-ul-li">
       <ul>
       <li><a href="#">Home</a></li>
       <li><a href="#">About</a></li>
       <li><a href="#">Blog</a></li>
       <li><a href="#">Contact</a></li>
       <li><a href="#">Service</a></li>

       </ul>
       <ul>
       <li><a href="#">App Design</a></li>
       <li><a href="#">Logo Desing</a></li>
       <li><a href="#">Website Design</a></li>
       <li><a href="#">Banner Design</a></li>
       <li><a href="#">All Types of Design</a></li>

       </ul>
       <ul>
       <li><a href="#">My Account</a></li>
       <li><a href="#">Profile</a></li>
       <li><a href="#">Track</a></li>
       <li><a href="#">Purches</a></li>
       <li><a href="#">Perfomence</a></li>

       </ul>
       
      </div>
      </div>
    </div>
  );
}
export default Footer;
