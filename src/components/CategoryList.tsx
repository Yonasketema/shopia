import React from "react";
import categories from "../data/categories";
import { Button, HStack, Heading, List, ListItem } from "@chakra-ui/react";
import { Category } from "../App";

interface Prop {
  onSelectCategory: (category: Category) => void;
}

const CategoryList = ({ onSelectCategory }: Prop) => {
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
              fontWeight="medium"
              onClick={() => onSelectCategory(category)}
            >
              {category.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
