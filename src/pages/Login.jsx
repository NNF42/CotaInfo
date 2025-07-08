import { Avatar, Box, Card, Text, Center, Flex, Field, Input, Icon, Link, Button, Image, Stack } from "@chakra-ui/react"
import { PasswordInput } from "@/components/ui/password-input"
import Navbar from "@/my-components/Navbar";
import { useMutation,  QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

import { COLORS, GRADIENTS } from "@/colors/colors";
import { LuChartArea, LuDatabase, LuGitGraph, LuGraduationCap } from "react-icons/lu";
import { useState } from "react";
import { loginStudent } from "@/servirces/userService";
import { data } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(){

    const navigate = useNavigate();

    const [username,setusername] = useState ("")
    const [password,setpassword] = useState ("")
    
    const loginStudentPassword = useMutation({
        mutationKey: ["loginStudentPassword"],
        mutationFn: loginStudent,
        onSucess: (data) => {
            
        },
        onError: (error) => {
            console.log(error)
        }
    })


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
                                        <Input onChange={(e) => setusername(e.target.value)} value = {username} />
                                    </Field.Root >
                                    <Field.Root alignItems={"center"}>
                                        <Field.Label>Senha</Field.Label>
                                        <PasswordInput onChange={(e) => setpassword(e.target.value)} value = {password}  />
                                    </Field.Root>
                                </Stack>
                            </Card.Body>
                          <Card.Footer justifyContent="flex-end">
                              <Button bg={COLORS.OrangePrimary} color={COLORS.WhitePrimary} rounded={"10px"} variant="outline">Cancelar</Button>
                              <Button onClick={() => loginStudentPassword.mutate({username_digitado: username, password_digitado: password})} bg={COLORS.BluePrimary} color={COLORS.WhitePrimary} rounded={"10px"} variant="so lid">Entrar</Button>
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