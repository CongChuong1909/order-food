import { Card } from "../";
import React from "react";
import { Grid, Paper } from "@mui/material";

function ListProducts(props) {
    const { listProducts } = props;
    return (
        <Grid container spacing={2}>
            {listProducts.map((product, index) => (
                <Grid item md={4}>
                    <Paper>
                        <Card key={index} item={product} />
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}

export default ListProducts;
