import React, { useContext } from 'react';
import clsx from 'clsx';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

import { ThemeProvider } from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import './Sidemanu.css'
import categroies from '../data/category';
import { setstate } from "../contextapi";
const useStyles = makeStyles({
    list: {
        width: 200,
        paddingLeft: 10,
        paddingRight: 5,
    },
    fullList: {
        width: 'auto',
    },
});

export default function SwipeableTemporaryDrawer() {
    const {
        setcategory
    } = useContext(setstate);

    const classes = useStyles();
    const [state, setState] = React.useState({

        left: false,

    });
    const darkTheme = createMuiTheme({
        palette: {
            type: 'dark',
        },
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>

                <ListItem className="cats">
                    Categories
                    </ListItem>

            </List>
            <Divider />
            <List>
                {categroies.map((text) => (
                    <ListItem styles={{ height: 40, borderRadius: 3 }} className="lsit" button key={text} onClick={() => setcategory(text)}>

                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            {
                <React.Fragment key={"left"}>
                    <Button onClick={toggleDrawer("left", true)}><MenuIcon /></Button>
                    <ThemeProvider theme={darkTheme}>
                        <SwipeableDrawer
                            anchor={"left"}
                            open={state["left"]}
                            onClose={toggleDrawer("left", false)}
                            onOpen={toggleDrawer("left", true)}
                        >
                            {list("left")}
                        </SwipeableDrawer>
                    </ThemeProvider>

                </React.Fragment>
            }
        </div>
    );
}