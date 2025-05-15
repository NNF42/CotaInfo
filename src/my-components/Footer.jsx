import { Box, Text, Center, Flex, Button, Image } from "@chakra-ui/react"
import { COLORS } from "@/colors/colors";
import { LuSearch, LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";

function Footer(){
    return (
    <>
        <Box bg={COLORS.BluePrimary} w="100%" p="10" color={COLORS.GrayPrimary}>
            <Center>
                <Flex gap = "10px"> 
                    <Image height="50px" src="src\assets\logos\LOGO 2.png"/>
                    <Box bg={COLORS.WhitePrimary} w="5px" color="red" />
                    <Text alignSelf={"center"} color={COLORS.WhitePrimary} textDecoration="none" _hover={{color: COLORS.OrangePrimary, opacity:0.8}}><a href="" > Contato</a></Text>
                    <Text alignSelf={"center"} color={COLORS.WhitePrimary} textDecoration="none" _hover={{color: COLORS.OrangePrimary, opacity:0.8}}><a href="" > Sobre Nós</a></Text>
                    <Text alignSelf={"center"} color={COLORS.WhitePrimary} textDecoration="none" _hover={{color: COLORS.OrangePrimary, opacity:0.8}}><a href="" > Dados</a></Text>
                    <Text alignSelf={"center"} color={COLORS.WhitePrimary} textDecoration="none" _hover={{color: COLORS.OrangePrimary, opacity:0.8}}><a href="" > Perguntas Frequentes</a></Text>
                    <Text alignSelf={"center"} color={COLORS.WhitePrimary} textDecoration="none" _hover={{color: COLORS.OrangePrimary, opacity:0.8}}><a href="" > Time Eureca</a></Text>
                </Flex>
            </Center>
        </Box>
    </>
    )
}



export default Footer;