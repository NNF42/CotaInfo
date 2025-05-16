import { Avatar, Box, Card, Text, Center, Flex, Icon, Link, Button, Image, Stack, Textarea } from "@chakra-ui/react"
import { motion } from "framer-motion";
import Navbar from "@/my-components/Navbar";
import BarlineBlue from "@/assets/forms animations bg/Barlineblue";
import BarlineWhite from "@/assets/forms animations bg/Barlineblue copy";

import { COLORS, GRADIENTS } from "@/colors/colors";
import { LuChartArea, LuDatabase, LuGitGraph, LuGraduationCap } from "react-icons/lu";
import Footer from "@/my-components/Footer";

function LandingPage(){
    return (
    <>
        <Navbar/>


        <Box // Seção 1 
        position="relative" 
        bgImage="url('/backgroundimages/BgBackground LandingPage1.png')" 
        bgSize="cover" 
        bgPosition="center" 
        bgRepeat={"no-repeat"} 
        w="100%" 
        h= "736px" 
        px="160px" 
        py="100px" 
        color="white">
            <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="rgba(0, 0, 0, 0.4)"
                    zIndex="1" 
                />
                
                <Stack // Texto Introdutório
                    spacing={4} 
                    position="absolute"
                    zIndex="2">

                    <Text lineHeight={"70px"} fontSize="40pt" fontWeight="extrabold" whiteSpace="pre-line">
                    COMPREENDA MELHOR A{"\n"}ATUAÇÃO DA LEI DE COTAS{"\n"}
                    NA{" "}
                    <Box as="span" color={COLORS.OrangePrimary} fontWeight={"extrabold"}>
                    UFCG
                    </Box>
                    </Text>
            <Box // Seção Introdutória com Butões de Navegação
                    bg="rgba(247, 247, 247, 0.4)"
                    w="728px"
                    h="196px"
                    borderRadius="20px"
                    p="20px"> 
                    <Flex align="center" gap={3}>
                          <LuChartArea // Icone Gráfico
                              size="100px" 
                              color={COLORS.BluePrimary}></LuChartArea> 
                          <Text color={COLORS.WhitePrimary}>
                              O COTAINFO foi desenvolvido para que você possa compreender o ingresso, 
                              a permanência e os desafios enfrentados pelos estudantes cotistas e não cotistas 
                              na UFCG
                          </Text>
                    </Flex>

                <Flex align="center" gap={3}> 
                        <Button 
                            size="md"  
                            bgColor={COLORS.BluePrimary} 
                            color={COLORS.WhitePrimary} 
                            fontSize="25px" 
                            rounded="full" 
                            _hover={{
                              bgColor: COLORS.OrangePrimary,
                              transform: "scale(1.05)",
                              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                              }}> 
                                FERRAMENTAS
                            </Button>
                          <Button 
                            size="md"  
                            bgColor={COLORS.BluePrimary} 
                            color={COLORS.WhitePrimary} 
                            fontSize="25px" 
                            rounded="full" 
                            _hover={{
                              bgColor: COLORS.OrangePrimary,
                              transform: "scale(1.05)",
                              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                              }}>  
                              LOGIN 
                            </Button>
                </Flex>
            </Box>
        </Stack>
        </Box>


        <Box // Seção 2
        position={"relative"} 
        bgGradient="to-r"  gradientFrom={COLORS.BluePrimary} gradientTo={COLORS.DarkBlue} 
        w="100%" 
        minH="1540px"  
        px="160px" 
        py="100px">

            <Stack //Introdução 
            gap={5}>
                <Text lineHeight={"100px"} whiteSpace="pre-line" fontSize="61pt" fontWeight="extrabold" color={COLORS.WhitePrimary}> 
                      CONHEÇA NOSSAS {"\n"} 
                      <Box as="span" fontWeight={"extrabold"} color={COLORS.OrangePrimary}>FERRAMENTAS</Box>
                </Text> 
                <BarlineWhite/>
                <Text whiteSpace="pre-line" fontSize="20pt" color={COLORS.WhitePrimary}> 
                    Explore as ferramentas do COTAINFO para realizar uma análise aprofundada dos dados {"\n"}
                    relacionados ao ingresso, à permanência e aos desafios enfrentados pelos estudantes na UFCG.
                </Text>
                <Image borderRadius="20px" src ="public\backgroundimages\BG IMAGE 2 LANDING PAGE.png" boxShadow={"5px 6px 16px rgb(165, 231, 255, 0.2)"} /> 
            </Stack>

            <Stack // Butões de navegação
            mt={"50px"}
            gap={5}>
                <Text lineHeight={"100px"} whiteSpace="pre-line" fontSize="61pt" fontWeight="extrabold" color={COLORS.WhitePrimary}> 
                      DESCUBRA DADOS {"\n"}
                      SOBRE ALUNOS
                </Text> 
                <Text whiteSpace="pre-line" fontSize="20pt" color={COLORS.WhitePrimary}> 
                    Descubra e compare dados entre alunos cotistas e {"\n"}
                    de ampla concorrência na UFCG
                </Text>
                <Flex gap={5}>
                    <Button // Butão DADOS DE INGRESSANTES
                        h="100px"  
                        bgColor={COLORS.OrangePrimary} 
                        color={COLORS.WhitePrimary} fontSize="25px"
                        rounded="4xl"
                        px="30px"
                        py="150px"
                        _hover={{
                              bgColor: COLORS.BluePrimary,
                              transform: "scale(1.05)",
                              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                              }}> 
                          <Flex direction="column" align="flex-start" gap={5} >
                              <Icon as={LuDatabase} boxSize="50px" flexShrink={0}/>
                              <Text fontSize="31pt" whiteSpace="pre-line" fontWeight="bold" textAlign="left" lineHeight="45px"> 
                                    DADOS DE {"\n"} 
                                    INGRESSANTES </Text>
                              <Text fontSize="16pt" whiteSpace="pre-line" textAlign="left" lineHeight="25px" >
                                  Descubra dados sobre o ingresso de  {"\n"}
                                  alunos da UFCG e compare ao {"\n"}
                                  longo dos anos. {"\n"}</Text>
                            </Flex> 
                      </Button>

                <Button // DADOS DE GRADUADOS
                    h="100px"  
                    bgColor={COLORS.OrangePrimary} 
                    color={COLORS.WhitePrimary} fontSize="25px"
                    rounded="4xl"
                    px="30px"
                    py="150px"
                    _hover={{
                              bgColor: COLORS.BluePrimary,
                              transform: "scale(1.05)",
                              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                              }}> 
                        <Flex direction="column" align="flex-start" gap={3} >
                            <Icon as={LuGraduationCap} boxSize="80px" flexShrink={0}/>
                            <Text fontSize="31pt" whiteSpace="pre-line" fontWeight="bold" textAlign="left" lineHeight="45px"> 
                                DADOS DE {"\n"} 
                                GRADUADOS </Text>
                            <Text fontSize="16pt" whiteSpace="pre-line" textAlign="left" lineHeight="25px" >
                                Descubra dados sobre nossos alunos  {"\n"}
                                graduados e compare ao  {"\n"}
                                longo dos anos. {"\n"}
                            </Text>
                        </Flex> 
                </Button>

                <Button // DADOS DE PERMANÊNCIA
                    h="100px"  
                    bgColor={COLORS.OrangePrimary} 
                    color={COLORS.WhitePrimary} fontSize="25px"
                    rounded="4xl"
                    px="30px"
                    py="150px"
                    _hover={{
                              bgColor: COLORS.BluePrimary,
                              transform: "scale(1.05)",
                              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                              }}> 
      
                    <Flex direction="column" align="flex-start" gap={5} >
                        <Icon as={LuDatabase} boxSize="50px" flexShrink={0}/>
                        <Text fontSize="31pt" whiteSpace="pre-line" fontWeight="bold" textAlign="left" lineHeight="45px"> 
                            DADOS SOBRE {"\n"} 
                            PERMANÊNCIAS </Text>
                        <Text fontSize="16pt" whiteSpace="pre-line" fontWeight={"normal"} textAlign="left" lineHeight="25px" >
                            Descubra os motivos de abandono,  {"\n"}
                            transferências e jubilamentos dos {"\n"}
                            alunos da UFCG. {"\n"}
                        </Text>
                    </Flex> 
                </Button>
              </Flex>
            </Stack>
        </Box>
        


        
        
         <Box // seção 3
         position={"relative"} 
         bgColor={COLORS.WhitePrimary}
         w="100%" 
         minH="2540px"  
         px="160px" 
         py="100px"
         
         >
            <Stack gap={5}>
              <Text lineHeight={"100px"} whiteSpace="pre-line" fontSize="61pt" fontWeight="extrabold" color={COLORS.Gra}> 
                    DESCUBRA AS CHANCES {"\n"} 
                    <Box as="span" fontWeight={"extrabold"} color={COLORS.BluePrimary}>DE VOCÊ SE FORMAR</Box>
              </Text> 
              <BarlineBlue/>
              <Text whiteSpace="pre-line" fontSize="20pt" fontWeight={"normal"} color={COLORS.GrayPrimary}> 
                    Com nossa ferramenta de probabilidade de conclusão, descubra suas chances de se formar na UFCG  {"\n"}
                    e explore estratégias para aumentá-las!
              </Text>
              <Image borderRadius="20px" src ="public\backgroundimages\BG IMAGE 3 LANDING PAGE.png" boxShadow={"5px 6px 16px rgb(165, 231, 255, 0.2)"} /> 
              </Stack>

          <Flex mt={20} gap={490}>
              <Flex alignItems={"flex-start"}>
                  <Image borderRadius="20px" zIndex={1} src ="public\suportimage\SUPPORT IMAGE 1.png" />
                  <Image borderRadius="20px" mt={60} ml={-20} position={"relative"} zIndex={0} src ="public\suportimage\SUPPORT IMAGE 2.png" /> 
              </Flex>
              <Text lineHeight={"100px"} mt={40} whiteSpace={"pre-line"} fontSize={"61pt"} fontWeight={"extrabold"} textAlign={"right"}> 
                  CALCULE SUAS {"\n"} 
                  <Text as={"span" } fontSize={"61pt"} color={COLORS.OrangePrimary} fontWeight={"extrabold"} textAlign={"right"}> CHANCES DE  {"\n"} GRADUAÇÃO </Text>
              </Text>
          </Flex>  
          <Text mt={"-200px"} whiteSpace={"pre-line"} fontSize={"20pt"} textAlign={"right"}> 
                E saiba como aumentar suas chances
          </Text>
          <Flex mt={"20px"} justifyContent={"end"}>
              <Button  
                  bg={COLORS.OrangePrimary} 
                  color={COLORS.WhitePrimary} 
                  size={"2xl"} 
                  rounded={"full"}
                  _hover={{
                              bgColor: COLORS.BluePrimary,
                              transform: "scale(1.05)",
                              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                              }}>  
                      PROBABILIDADE DE SE FORMAR 
                </Button>
          </Flex>
        </Box>



         <Box // seção 4
         position={"relative"} 
         bgColor={COLORS.WhitePrimary}
         w="100%" 
         minH="1540px"  
         px="160px" 
         py="100px"
         mt={"-450px"}
         
         >
            <Stack gap={5} align={"center"}>
                <Text whiteSpace={"pre-line"} textAlign={"center"} fontSize={"61pt"} fontWeight={"extrabold"} color={COLORS.GrayPrimary}>
                    NOSSO SISTEMA DE DADOS É DESENVOLVIDO PELO:
                </Text>
                <Flex gap={20}>
                    <a href="https://eureca.lsd.ufcg.edu.br/pages/home/home.html" target="blank">
                        <Image width={"250px"} aç src="src\assets\logos\EURECA LOGO.png"/>
                    </a>
                    <a href="https://www.facebook.com/ProjMemoriaUFCG/" target="blank">
                        <Image width={"250px"} aç src="src\assets\logos\MCT PROJETO LOGO.png"/>
                    </a>
                </Flex>
            </Stack>
            
            <Box></Box>

            <Flex>
                <Flex mt={"250px"} direction={"column"}>
                    <Text whiteSpace={"pre-line"} textAlign={"left"} fontSize={"61pt"} fontWeight={"extrabold"} color={COLORS.GrayPrimary}>
                        RESTA ALGUMA {"\n"} DÚVIDA?
                    </Text>
                <Textarea width={"424px"} height={"250px"} fontFamily={"Exo 2"} placeholder="Fale conosco!"/>
              <Button 
                    mt={30} 
                    w={"250px"} 
                    fontFamily={"Exo 2"} 
                    bg={COLORS.BluePrimary}
                    _hover={{
                              bgColor: COLORS.OrangePrimary,
                              transform: "scale(1.05)",
                              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                              }}> Enviar comentário </Button>
            </Flex>
                <Flex mt={"250px"} ml={"400px"} alignItems={"flex-start"}>
                    <Image borderRadius="20px" zIndex={1} src ="public\suportimage\SUPPORT IMAGE 3.png" />
                    <Image borderRadius="20px" mt={60} ml={-20} position={"relative"} zIndex={0} src ="public\suportimage\SUPPORT IMAGE 4.png" />
                </Flex>
           </Flex>
        </Box>
        <Footer/>
    </>
    )
}

export default LandingPage;