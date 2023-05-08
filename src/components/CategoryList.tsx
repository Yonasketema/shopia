import React from "react";
import categories from "../data/categories";
import { Button, List, ListItem } from "@chakra-ui/react";
import { Category } from "../App";

interface Prop {
  onSelectCategory: (category: Category) => void;
}

const CategoryList = ({ onSelectCategory }: Prop) => {
  return (
    <List>
      {categories.map((category) => (
        <ListItem key={category.name}>
          <Button variant="link" onClick={() => onSelectCategory(category)}>
            {category.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
