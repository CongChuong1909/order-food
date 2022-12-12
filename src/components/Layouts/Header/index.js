import React from "react";
import MapIcon from "@mui/icons-material/Map";
import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material";
import classes from "./Header.module.css";
import { makeStyles } from "@mui/styles";
import HomeIcon from "@mui/icons-material/Home";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PublicIcon from "@mui/icons-material/Public";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
const useStyles = makeStyles((theme) => ({
    headerTab: {
        "& button: active": { backgroundColor: "#fff" },
        "& button: focus": { backgroundColor: "#fff" },
        "& button.Mui-selected": {
            backgroundColor: "#fff",
            color: "#1976d2",
        },
        textTransform: "lowercase",
        height: "30px",
        display: "flex",
        alignItems: "center",
        borderBottomColor: "transparent",
    },
    headerTabItem: {
        textTransform: "capitalize",
        color: "#fff",
        padding: "0 1rem",
    },
    btn: {
        color: "#fff",
        textTransform: "capitalize",
    },
    headerRight: {
        display: "flex",
        justifyContent: "flex-end",
    },
    headerLeft: {
        display: "flex",
        alignItems: "center",
    },
}));
function Header(props) {
    const style = useStyles();
    const [value, setValue] = React.useState(1);
    console.log(style.headerTab);
    const handleChange = (index, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid Container className={classes.header}>
            <Grid item md={5} className={style.headerLeft}>
                <Box sx={{ width: "100%", background: "#0973b9" }}>
                    <Box sx={{ borderColor: "divider" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="header Tabs"
                            className={style.headerTab}
                        >
                            <Tab
                                label="Home"
                                icon={<HomeIcon />}
                                iconPosition="start"
                                className={style.headerTabItem}
                            />
                            <Tab
                                label="Order"
                                icon={<NoteAltIcon />}
                                iconPosition="start"
                                className={style.headerTabItem}
                            />
                            <Tab
                                label="Sơ đồ"
                                icon={<MapIcon />}
                                iconPosition="start"
                                className={style.headerTabItem}
                            />
                        </Tabs>
                    </Box>
                </Box>
            </Grid>
            <Grid item md={7} className={style.headerRight}>
                <Button className={style.btn}>
                    <AddIcon />
                    Order
                    <ArrowDropDownIcon />
                </Button>
                <Button className={style.btn}>
                    <PublicIcon />
                </Button>
                <Button className={style.btn}>
                    <Typography variant="">User Name</Typography>
                    <AccountCircleIcon />
                </Button>
                <Button className={style.btn}>
                    <MenuIcon />
                </Button>
            </Grid>
        </Grid>
    );
}

export default Header;
