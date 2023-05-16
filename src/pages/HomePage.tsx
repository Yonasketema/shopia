import { Grid, GridItem, Show } from "@chakra-ui/react";

import CategoryList from "../components/CategoryList";
import ProductGrid from "../components/ProductGrid";
import { useState } from "react";

export interface Category {
  name: string;
  params: string[];
}

const HomePage = () => {
  const [category, setCategory] = useState<Category | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"header"  "main" "footer"`,
        lg: `"header header" 
         "aside main"
         "footer footer"
         `, // >1024
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      {/* <GridItem area="header">header</GridItem> */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5} paddingY={7}>
          <CategoryList
            onSelectCategory={setCategory}
            selectedCategory={category}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <ProductGrid selectedCategory={category} />
      </GridItem>

      {/* <GridItem area="footer">@yonasketema</GridItem> */}
    </Grid>
  );
};

export default HomePage;
