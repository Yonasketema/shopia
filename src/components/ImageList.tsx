import { Box, HStack, Image } from "@chakra-ui/react";
import React from "react";

interface ImageList {
  image: string;
}

interface Props {
  imgs: ImageList[];
}

const ImageList = ({ imgs }: Props) => {
  const [image, setImage] = React.useState(0);
  return (
    <Box>
      <Box>
        <Image src={imgs[image].image} />
      </Box>

      <HStack>
        {imgs.map((img, index) => {
          return (
            <Image
              src={img.image}
              width="25%"
              onClick={() => setImage(index)}
            />
          );
        })}
      </HStack>
    </Box>
  );
};

export default ImageList;
