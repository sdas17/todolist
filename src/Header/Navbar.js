import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="Navbar">

      <div class="container-fluid">     
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" exact to="/Header">Header</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  exact to="/Footer">Footer</NavLink>
              </li>   <li className="nav-item">
                <NavLink className="nav-link" exact  to="/Contact">Contact</NavLink>
              </li>

            </ul>
            <Link className="btn btn-outline-light" to="/users/Adduser">Add User</Link>

          </div>

        </div>

      </div>

      </nav>

    </>
  )
}
export default Navbar;