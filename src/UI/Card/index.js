// import { Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useState } from "react";
import cartContext from "../../Store/CartContext";
import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import Sale from "../Sale/Sale";

///gọi lấy dữ liệu từ child sang parent thông qua callback
///lấy dữ số lượng đặt hàng từ mealItemForm

function CardProduct(props) {
    const cartCtx = useContext(cartContext);
    const { item } = props; // id, name,type,img, description, price,qty
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: item.id,
            name: item.name,
            amount: amount,
            price: item.price,
            image: item.image,
        });
    };

    return (
        <Card sx={{ maxWidth: 345, position: "relative" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt="green iguana"
                />
                <CardContent sx={{ padding: "0.5rem 0 0 0.5rem" }}>
                    <Typography
                        sx={{ fontSize: "1rem", paddingTop: 0 }}
                        gutterBottom
                        variant="p"
                        noWrap
                        component="div"
                    >
                        {item.name}
                    </Typography>
                    <Typography
                        sx={{ fontSize: "0.7rem" }}
                        gutterBottom
                        variant="p"
                        noWrap
                        component="div"
                    >
                        {item.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}
            >
                <Typography sx={{ fontWeight: "bold", color: "#cc2406" }}>
                    {item.price}$
                </Typography>
                <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    sx={{ textTransform: "capitalize" }}
                    onClick={() => addToCartHandler(1)}
                >
                    Thêm
                </Button>
            </CardActions>
            <Sale />
        </Card>
    );
}

export default CardProduct;
