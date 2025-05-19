import { Avatar, Box, Card, Text, Center, Flex, Field, Input, Icon, Link, Button, Image, Stack } from "@chakra-ui/react"
import Navbar from "@/my-components/Navbar";

import { COLORS, GRADIENTS } from "@/colors/colors";
import { LuChartArea, LuDatabase, LuGitGraph, LuGraduationCap } from "react-icons/lu";

function Login(){
    return (
    <>
        <Navbar/>
        <Box 
            bgGradient={"to-r"} 
            gradientFrom={COLORS.BluePrimary} 
            gradientTo={COLORS.LightBlue} 
            minH="906px" 
            display="flex" 
            alignItems="center"
            justifyContent="center" >
                <Box bgColor={COLORS.WhitePrimary} minH="650px" w={"1100px"} rounded={"20px"} p={"1em"} >
                  <Flex direction={"row"} align={"center"} gap={"6em"}>
                        <Image src="public\suportimage\LOGIN SUPPORT IMAGE 3.png" />
                        <Flex direction={"column"} align={"center"}>
                            <Text color={"black"} fontWeight={"bolder"} fontSize={"25pt"} textAlign={"center"}>Bem Vindo, estudante! <br/> Insira seu Login do SIGAA</Text>
                            <Text textAlign={"center"} >Utilizamos seu login do SCAO para <br/> oferecer um acesso mais facilitado <br/> a suas informações desejadas!</Text>
                        <Card.Root border={"none"} bg={COLORS.WhitePrimary} minW="sm" alignItems={"center"}>
                            <Card.Body>
                                <Stack gap="4" w="full">
                                    <Field.Root alignItems={"center"}>
                                        <Field.Label fontFamily={"Exo 2"}>Usuário</Field.Label>
                                        <Input />
                                    </Field.Root >
                                    <Field.Root alignItems={"center"}>
                                        <Field.Label>Senha</Field.Label>
                                        <Input />
                                    </Field.Root>
                                </Stack>
                            </Card.Body>
                          <Card.Footer justifyContent="flex-end">
                              <Button bg={COLORS.OrangePrimary} color={COLORS.WhitePrimary} rounded={"10px"} variant="outline">Cancelar</Button>
                              <Button bg={COLORS.BluePrimary} color={COLORS.WhitePrimary} rounded={"10px"} variant="so lid">Entrar</Button>
                          </Card.Footer>
                        </Card.Root>
                        </Flex>
                  </Flex> 
                </Box>
          </Box>
    </>
    )
}

export default Login;