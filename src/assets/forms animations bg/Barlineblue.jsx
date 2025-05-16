import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { COLORS, GRADIENTS } from "@/colors/colors";

const BlueLine = motion(Box);

function BarlineBlue(){

return(
<BlueLine
  bg={COLORS.BluePrimary}
  h="5px"
  initial={{ width: 0 }}
  whileInView={{ width: "622px" }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }} 
/>
)
}

export default BarlineBlue