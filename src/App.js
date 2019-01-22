import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/Menu"

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Title
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(App);
