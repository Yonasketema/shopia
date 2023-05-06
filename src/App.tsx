import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/ProductGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: ` "nav" "header"  "main"`,
          lg: `"nav nav"
               "header header" 
               "aside main"`, // >1024
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="header" bg="blue.300">
          header
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="orange.300" width="250px">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main">
          <ProductGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
