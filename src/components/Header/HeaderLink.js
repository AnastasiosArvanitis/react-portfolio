import React, {Fragment} from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

const HeaderLink = ({ label, to, activeOnlyWhenExact }) => {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (
        <Fragment>
            <li className={match ? "link-active" : ""}>
            <Link to={to}>{label}</Link>
            </li>
            <span className='seperator'></span>
        </Fragment>
      
    );
  }

  export default HeaderLink;