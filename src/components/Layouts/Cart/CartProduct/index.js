import CartContext from "../../../../Store/CartContext";
import { useContext } from "react";
import classes from "./CardProduct.module.css";
import {
    Autocomplete,
    Button,
    Grid,
    MenuItem,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Search from "../../../../UI/Search/Search";
import RedeemIcon from "@mui/icons-material/Redeem";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { display, fontWeight } from "@mui/system";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import BookmarkAddRoundedIcon from "@mui/icons-material/BookmarkAddRounded";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";

export default function AlignItemsList() {
    const cartCtx = useContext(CartContext);
    const listMealsCard = cartCtx.items;
    console.log(listMealsCard);
    const waiter = [
        { label: "a", year: 1994 },
        { label: "b", year: 1982 },
        { label: "c", year: 1994 },
    ];
    return (
        <>
            <Paper>
                <Grid container className={classes.cart}>
                    <Grid
                        sx={{ paddingTop: "1rem" }}
                        className={classes.header}
                        md={12}
                    >
                        <Grid className={classes.headerLeft}>
                            <span>1.9</span>
                            <Search />
                        </Grid>
                        <Grid className={classes.headerRight}>
                            <Button variant="outlined">
                                <PeopleIcon />6
                            </Button>
                            <Button variant="outlined">
                                <LocalDrinkIcon />
                            </Button>
                            <Button variant="outlined">
                                <ArrowDropDownCircleIcon />
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid className={classes.table} container>
                        <Grid className={classes.tableTitle}>
                            <Grid className={classes.checkBox} md={1} item>
                                <input type="checkbox" />
                            </Grid>
                            <Grid className={classes.meals} md={6} item>
                                Tên món
                            </Grid>
                            <Grid className={classes.amount} md={2} item>
                                SL
                            </Grid>
                            <Grid className={classes.price} md={2} item>
                                Thành tiền
                            </Grid>
                            <Grid className={classes.option} md={1} item></Grid>
                        </Grid>
                        <Grid className={classes.content}>
                            {listMealsCard.map((meal) => (
                                <Grid
                                    key={meal.id}
                                    className={classes.tableContent}
                                >
                                    <Grid
                                        className={classes.checkBox}
                                        md={1}
                                        item
                                    >
                                        <input type="checkbox" />
                                    </Grid>
                                    <Grid className={classes.meals} md={6} item>
                                        <Grid className={classes.img}>
                                            <img
                                                src={meal.image}
                                                alt="The healthy meals"
                                            />
                                        </Grid>
                                        <Grid className={classes.des}>
                                            <Typography component="p" noWrap>
                                                {meal.name}
                                            </Typography>
                                            <Typography component="p">
                                                {meal.price}$
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        className={classes.amount}
                                        md={2}
                                        item
                                    >
                                        <button>-</button>
                                        {meal.amount}
                                        <button>+</button>
                                    </Grid>
                                    <Grid className={classes.price} md={2} item>
                                        {meal.amount * meal.price}$
                                    </Grid>
                                    <Grid
                                        className={classes.option}
                                        md={1}
                                        item
                                    >
                                        <MoreHorizIcon />
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    {/*option bar*/}
                    <Grid md={12} container sx={{ padding: "0 1rem" }}>
                        <Grid md={9} container gap={1}>
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        background: "#f5f5f5",
                                        color: "#1c9a5d",
                                        borderColor: "#1c9a5d",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    <AddCircleOutlineRoundedIcon />
                                    Thêm món khác
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: "#dc5b66",
                                        borderColor: "#dc5b66",
                                    }}
                                >
                                    <RedeemIcon />
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined">
                                    <RefreshRoundedIcon />
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid md={3} container gap={1}>
                            <Grid item>
                                <Button variant="outlined">
                                    <ExpandMoreRoundedIcon />
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined">
                                    <KeyboardArrowUpRoundedIcon />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* total price */}

                    <Grid
                        container
                        md={12}
                        sx={{
                            padding: "1rem",
                            display: "flex",
                            alignItems: "center",
                        }}
                        className={classes.totalBill}
                    >
                        <Grid md={7} item>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={waiter}
                                sx={{
                                    width: 200,
                                    height: 40,
                                    fontSize: "12px",
                                }}
                                size="small"
                                // SelectProps={{
                                //     multiple: "true",
                                // }}
                                tagSizeSmall
                                renderInput={(params) => (
                                    <TextField
                                        // icon={<KeyboardArrowUpRoundedIcon />}
                                        {...params}
                                        label="Nhân viên phục vụ"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid
                            md={4}
                            gap={2}
                            item
                            className={classes.totalPrice}
                        >
                            <Grid md={6}>
                                <Typography
                                    variant="p"
                                    sx={{
                                        fontWeight: "700",
                                        textDecoration: "underline",
                                    }}
                                    color="initial"
                                >
                                    Tổng tiền:
                                </Typography>
                            </Grid>
                            <Grid
                                md={6}
                                sx={{ display: "flex", alignItems: "center" }}
                            >
                                <Typography
                                    variant="p"
                                    sx={{ fontWeight: "700", fontSize: "20px" }}
                                    color="#c50d13"
                                    md={6}
                                >
                                    {cartCtx.totalAmount}$
                                </Typography>
                                <img
                                    className={classes.notice}
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/OOjs_UI_icon_notice-progressive.svg/1024px-OOjs_UI_icon_notice-progressive.svg.png"
                                    alt=""
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <Grid md={12} className={classes.billOption} gap={2}>
                <Button variant="outlined">
                    <img
                        src="http://cdn.onlinewebfonts.com/svg/img_506143.png"
                        alt=""
                    />{" "}
                    <Typography>Gửi bếp/bar</Typography>
                </Button>
                <Button variant="outlined">
                    <ClearRoundedIcon /> <Typography> Hủy bỏ</Typography>
                </Button>
                <Button variant="outlined">
                    <BookmarkRoundedIcon /> <Typography>Lưu</Typography>
                </Button>
                <Button variant="outlined">
                    <BookmarkAddRoundedIcon />{" "}
                    <Typography>Lưu &amp; Thêm</Typography>
                </Button>
                <Button variant="outlined">
                    <CalculateRoundedIcon />
                    <Typography>Tính tiền</Typography>
                </Button>
            </Grid>
        </>
    );
}
