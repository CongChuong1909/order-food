import { Container, Grid, Paper } from "@mui/material";
import { BasicTabs, CartProduct, Header } from "./components/Layouts";
import CartProvider from "./Store/CartProvider";
function App() {
    return (
        <CartProvider>
            <Container
                sx={{ minWidth: "1280px", minHeight: "100vh" }}
                className="App"
            >
                <Header md={12} />
                <Grid container>
                    <Grid item md={6}>
                        <Paper sx={{ paddingTop: "1rem" }}>
                            <BasicTabs />
                        </Paper>
                    </Grid>
                    <Grid item md={6}>
                        <Grid sx={{ background: "#fff" }}>
                            <CartProduct />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </CartProvider>
    );
}

export default App;
