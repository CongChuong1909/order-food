import React from "react";
import { Grid, IconButton, InputBase, Paper, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Search(props) {
    return (
        <Grid
            md={12}
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
            <Paper
                component="form"
                sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "90%",
                    // marginTop: "1rem ",
                }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Meals ?"
                    inputProps={{ "aria-label": "Enter your table" }}
                />
                <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Grid>
    );
}

export default Search;
