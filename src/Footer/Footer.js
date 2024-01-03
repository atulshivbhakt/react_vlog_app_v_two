import React from "react";

function Footer() {
  return (
    <>
      
      <footer >
        <div className="NavIcons" >
          <div className="leftNav">
            <h5>
              About :
              <p className="aboutfooter" >
                Hey this is Footer part if you need and kind of help please conatct us. 
                <br />
                
              </p>
            </h5>
            
          </div>
          
          <div>
          <h3>
              Contact :
              <p className="Email">atulprajapati258@gmail.com</p>
              <p className="mobileno" >Mobile no- 7898244385</p>
            </h3>
          </div>
          {/* <p className="footer-content" style={{fontSize:"1rem"}}>copyright&copy; 2023 Rohit Sen</p> */}
          <div className="icons">
            <p >
                Github :
              <a
                style={{paddingRight:"5px"}}
                href="https://github.com/atulshivbhakt"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"  style={{color:"white", paddingLeft:"2vw"}}></i>
              </a>
            </p>
            <p>
                Linkedin Profile:
              <a
                style={{paddingRight:"5px"}}
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin" style={{color:"white", paddingLeft:"2vw"}}></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
