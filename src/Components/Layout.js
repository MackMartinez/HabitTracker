// import { makeStyles } from '@mui/material';
import React from 'react';
// const useStyles = makeStyles({
//   page: {
//     background: 'black',
//     width: '100%'
//   }
// })


const Layout = ({children}) => {
  // const classes = useStyles()

  return (
    <div>
      {/* <div className={classes.page}> */}

        {children}
      {/* </div> */}
    </div>
  );
}

export default Layout;
