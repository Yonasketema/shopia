import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/ProductGrid";
import CategoryList from "./components/CategoryList";
import { useState } from "react";

export interface Category {
  name: string;
  params: string[];
}

function App() {
  const [category, setCategory] = useState<Category | null>(null);

  return (
    <>
      <Grid
        templateAreas={{
          base: ` "nav" "header"  "main"`,
          lg: `"nav nav"
               "header header" 
               "aside main"`, // >1024
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="header" bg="blue.300">
          header
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="orange.300" paddingX={5}>
            <CategoryList onSelectCategory={setCategory} />
          </GridItem>
        </Show>
        <GridItem area="main">
          <ProductGrid selectedCategory={category} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
