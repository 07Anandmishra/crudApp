
import React from 'react'
import SavedSearchIcon from '@mui/icons-material/SavedSearch';

const Footer = () => {
  return (
  
<>



   
    <footer className="w-100 py-4 ">
        <div className="container py-4">
            <div className="row ">
                <div className="col-lg-4 col-md-6 footer_text">
                    <h5 className="h1 text-white">FB.</h5>
                    <p className="small ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <p className="small  mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href="#">anand.com</a></p>
                </div>
                <div className="col-lg-2 col-md-6 footer_text">
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Get started</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6 footer_text">
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Get started</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer_text">
                    <h5 className="text-white mb-3">Newsletter</h5>
                    <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <form action="#">
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-primary" id="button-addon2" type="button">< SavedSearchIcon /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>


</>

  )
}

export default Footer