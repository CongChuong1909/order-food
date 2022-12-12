import React from "react";
import classes from "./Sale.module.css";

function Sale(props) {
    return (
        <div className={classes["product__item-sale-off"]}>
            <span className={classes["product__item-sale-off-percent"]}>
                15%
            </span>
            <span className={classes["product__item-sale-off-label"]}>
                Giảm
            </span>
        </div>
    );
}

export default Sale;
