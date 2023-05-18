import React from 'react'
import './FooterStyles.css';
function Footer() {

    const link1 = "https://www.facebook.com";
    const link2 = "https://www.tweeter.com";
    const link3 = "https://www.github.com";
  return (

    <div>
      

      <div className="footer">

<div className="social">Follow Us :
    <div class="social-icons">
        <a href={link1}><i className="fa-brands fa-facebook"></i></a>
        <a href={link2}><i className="fa-brands fa-twitter-square"></i></a>
        <a href={link3}><i className="fa-brands fa-github"></i></a>
    </div>
</div>
<div className="all-links">
<div className="links">
<h4>Links</h4>
<a >Best design</a>
<a >Article</a>
<a >FAQ</a>
</div>

<div className="links">
<h4>Team</h4>
<a >Review</a>
<a >Help</a>
<a >privacy policy</a>

</div>

<div className="links">
    <h4>About</h4>
    <a href={link1}>Services</a>
    <a href={link2}>payment options</a>
    <a href={link3}>Latest article</a>
</div>

</div>

<hr />
<div className="copyright">&copy;Alright Resvered Blue's Team@ bluedot.com</div>
</div>


    </div>
  )
}

export default Footer
