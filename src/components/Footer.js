import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import color from '@material-ui/core/colors/amber';


 const styles = theme => ({
  
      
    footer: {
        backgroundColor: 'white',
        boxShadow:  'box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)',
        color:'black'
        
      },
  });
  

class Footer extends Component {
    render() {
        const { classes } = this.props;

        return (
            <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
      </footer>
        )
    }
}


Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Footer);