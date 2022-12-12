import * as React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

import { TabPanel } from "./Components";

import { ListProducts } from "../../../UI";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";

import Search from "../../../UI/Search/Search";
import { Grid, Pagination, Stack } from "@mui/material";
import { style } from "@mui/system";

export default function BasicTabs() {
    const products = [
        {
            id: 1,
            name: "Đậu phụ rán",
            type: "food",
            image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/6/22/923096/1-1541756715-487-Wid.jpg",
            description: "đậu phụ rán...",
            price: 100,
            qty: 100,
        },
        {
            id: 2,
            name: "Trà sữa trân châu",
            type: "drink",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQd-p7sKMAP5TE9Jpxkf0dBlc8Shwuip_x5Q&usqp=CAU",
            description: "Trà sữa trân châu...",
            price: 200,
            qty: 200,
        },
        {
            id: 3,
            name: "Bánh tráng nướng",
            type: "another",
            image: "http://cdn.tgdd.vn/Files/2017/03/12/960051/cach-lam-banh-trang-nuong-ngon-cuc-nhanh-voi-chao-chong-dinh-202112282139542041.jpg",
            description: "Bánh trán nướng...",
            price: 300,
            qty: 300,
        },
        {
            id: 4,
            name: "Thịt gà kho",
            type: "food",
            image: "https://cdn.cet.edu.vn/wp-content/uploads/2018/04/lam-ga-kho-gung.jpg",
            description: "Thịt gà kho...",
            price: 400,
            qty: 400,
        },
        {
            id: 5,
            name: "Bánh trung thu nhân thập cẩm",
            type: "drink",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a6A8kWLVumLsE2EWfX23AqwKzjRk01VxKh9hAd3gRi61TbwE2xTFBUTo-9IGbaw_T7U&usqp=CAU",
            description: "Bánh trung thu nhân thập cẩm...",
            price: 500,
            qty: 500,
        },
        {
            id: 6,
            name: "Đậu phộng rang",
            type: "another",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpT2v5sQsYTETamhjjmcouQ13HY_GD-3T33A&usqp=CAU",
            description: "Đậu phộng rang...",
            price: 600,
            qty: 600,
        },
        // {
        //     id: 7,
        //     name: "Cơm gà quay",
        //     type: "food",
        //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGPhMITFlPBK9SYMIEcJ3nkEDfLIpIwRVEKQ&usqp=CAU",
        //     description: "Cơm gà quay...",
        //     price: 700,
        //     qty: 700,
        // },
    ];

    const [value, setValue] = React.useState(0);
    const handleChange = (index, newValue) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                // background: "#f5f5f5",
                borderColor: "red",
                minHeight: `var(--bodyHeight)`,
            }}
        >
            <Box sx={{ borderColor: "divider" }}>
                <Tabs
                    value={value}
                    aria-label="basic tabs example"
                    onChange={handleChange}
                    sx={{
                        // "& button: active": { backgroundColor: "white" },
                        "& button": { backgroundColor: "#f5f5f5" },
                        "& button: focus": { backgroundColor: "#0973b9" },
                        "& button.Mui-selected": {
                            backgroundColor: "#0973b9",
                            color: "white",
                        },
                        height: "30px",
                        display: "flex",
                        background: "#fff",
                        alignItems: "center",
                        marginLeft: "1.8rem",
                    }}
                >
                    <Tab
                        iconPosition="start"
                        sx={{
                            textTransform: "capitalize",
                        }}
                        icon={<FavoriteIcon />}
                        label="Hay dùng"
                    />
                    <Tab
                        iconPosition="start"
                        sx={{ textTransform: "capitalize" }}
                        icon={<DinnerDiningIcon />}
                        label="Món ăn"
                    />
                    <Tab
                        iconPosition="start"
                        sx={{ textTransform: "capitalize" }}
                        icon={<LocalBarIcon />}
                        label="Đồ uống"
                    />
                    <Tab
                        iconPosition="start"
                        sx={{ textTransform: "capitalize" }}
                        icon={<DashboardCustomizeIcon />}
                        label="Khác"
                    />
                </Tabs>
            </Box>
            <Grid sx={{ paddingTop: "1rem" }}>
                <Search />
            </Grid>
            <TabPanel value={value} index={0}>
                <ListProducts listProducts={products} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two..
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three...
            </TabPanel>
            <TabPanel value={value} index={3}>
                khác
            </TabPanel>
            <Stack
                spacing={2}
                sx={{
                    color: "red",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Pagination
                    sx={{
                        width: "100%",
                        alignItems: "center",
                        height: "4rem",
                        display: "flex",
                        justifyContent: "center",
                        position: "absolute",
                        bottom: "1rem",
                    }}
                    color="primary"
                    count={10}
                    showFirstButton
                    showLastButton
                />
            </Stack>
        </Box>
    );
}
