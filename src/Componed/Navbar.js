import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import useAuthanticatContxt from "../Hooks/useAuthanticatContxt";

import React from "react";
import useLogout from "../Hooks/useLogout";
import Button from '@mui/material/Button';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthanticatContxt();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <span>DAILY EXPENSES</span>
        </li>
        {!user && (
          <>
            <li >
              <Link to="/login">Login</Link>
            </li>
            <li >
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>
              <p> Well-Come {user.displayName}</p>
            </li>

            <li>
              {/* <button className="btn" onClick={logout}>
                Logout
              </button> */}
              <Button variant="contained" color="success" onClick={logout}>Logout</Button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
