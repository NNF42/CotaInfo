import { Box, Text, Center, Flex, Link, Button } from "@chakra-ui/react"
import { COLORS } from "@/colors/colors";
import { LuSearch, LuUser } from "react-icons/lu";

function Navbar(){
    return (
    <>
        <Box bg={COLORS.WhitePrimary} w="100%" p="10" color={COLORS.GrayPrimary}>
            <Center>
                <Flex gap = "10px">
                    <Link href="" color={COLORS.GrayPrimary}> Quem somos?</Link>
                    <Link href="" color={COLORS.GrayPrimary}> Dados</Link>
                    <Link href="" color={COLORS.GrayPrimary}> Contato</Link>
                    <Link href="" color={COLORS.GrayPrimary}> Perguntas Frequentes?</Link>
                    <Button bg="white" color={COLORS.BluePrimary} rounded={"full"}>
                        <LuSearch>  </LuSearch> Pesquisa
                    </Button>
                    <Button bg={COLORS.BluePrimary} color={COLORS.WhitePrimary} rounded={"full"}>
                        <LuUser>  </LuUser> LOGIN
                    </Button>
                </Flex>
            </Center>
        </Box>
    </>
    )
}

export default Navbar;