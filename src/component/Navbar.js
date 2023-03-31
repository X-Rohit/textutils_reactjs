import React from 'react'
import PropTyes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
        <nav class={`navbar navbar-expand-lg navbar-${props.mode}t bg-${props.mode}`}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{props.title}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
           
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
           
          </ul>
          <div className="form-check form-switch my-3">
          <input  onClick={props.toggleMode}className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
            <label className="form-check-label"  htmlFor="flexSwitchCheckDefault"></label>
          </div>
        </div>
      </div>
    </nav>
        
        
        </>
      );
}


Navbar.PropTyes ={
    title : PropTyes.string
}

Navbar.defaultProps ={
    title :' set title'
};