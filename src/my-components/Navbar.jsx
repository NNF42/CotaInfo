import { Box, Text, Center, Flex, Button, Image } from "@chakra-ui/react"
import { COLORS } from "@/colors/colors";
import { LuSearch, LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";

function Navbar(){
    return (
    <>
        <Box bg={COLORS.WhitePrimary} w="100%" p="10" color={COLORS.GrayPrimary}>
            <Center>
                <Flex gap = "10px"> 
                    <Image height="50px" src="src\assets\logos\LOGO 1.png"/>
                    <Box bg={COLORS.WhitePrimary} w="5px" color="red" borderLeft="1px solid gray"/>
                    <Text alignSelf={"center"} color={COLORS.GrayPrimary} textDecoration="none" _hover={{color: COLORS.OrangePrimary, opacity:0.8}}><a href="" > Quem somos?</a></Text>
                    <Text alignSelf={"center"} color={COLORS.GrayPrimary} textDecoration="none" _hover={{color: COLORS.OrangePrimary, opacity:0.8}}><a href="" > Dados</a></Text>
                    <Text alignSelf={"center"} color={COLORS.GrayPrimary} textDecoration="none" _hover={{color: COLORS.OrangePrimary, opacity:0.8}}><a href="" > Contato</a></Text>
                    <Text alignSelf={"center"} color={COLORS.GrayPrimary} textDecoration="none" _hover={{color: COLORS.OrangePrimary, opacity:0.8}}><a href="" > Perguntas Frequentes</a></Text>
                    <Flex margin = "5px">
                    <Button className = "BotãoPesquisa" bg="white" color={COLORS.BluePrimary} rounded={"full"}_hover={{color: COLORS.OrangePrimary, opacity:0.8, boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)"}}>
                        <LuSearch>  </LuSearch> Pesquisa
                    </Button>
                    <Button bg={COLORS.BluePrimary} color={COLORS.WhitePrimary} rounded={"full"} _hover={{color: COLORS.OrangePrimary, opacity:0.8, boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)"}}>
                        <LuUser>  </LuUser> 
                        <Link to="/login">LOGIN</Link>
                    </Button>
                    </Flex>
                </Flex>
            </Center>
        </Box>
    </>
    )
}

export default Navbar;