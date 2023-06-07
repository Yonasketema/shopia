import React from "react";
import categories from "../data/categories";
import { Button, HStack, Heading, List, ListItem } from "@chakra-ui/react";
import { Category } from "../pages/HomePage";

interface Prop {
  onSelectCategory: (category: Category) => void;
  selectedCategory: Category | null;
}

const CategoryList = ({ onSelectCategory, selectedCategory }: Prop) => {
  return (
    <List>
      <Heading fontSize="lg" marginY={2}>
        {" "}
        Categories
      </Heading>
      {categories.map((category) => (
        <ListItem key={category.name}>
          <HStack>
            <Button
              padding={1}
              whiteSpace="normal"
              variant="link"
              textAlign="left"
              textTransform="capitalize"
              fontSize="sm"
              fontWeight={
                selectedCategory?.name === category.name ? "bold" : "medium"
              }
              onClick={() => onSelectCategory(category)}
            >
              {category.name}
            </Button>
          </HStack>
        </ListItem>
      ))}

      <Button variant="solid" colorScheme="#000">
        Filter
      </Button>
    </List>
  );
};

export default CategoryList;
