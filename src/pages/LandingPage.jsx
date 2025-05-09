import { Avatar, Box, Card, Text, Center, Flex, Icon, Link, Button, Image, Stack } from "@chakra-ui/react"
import Navbar from "@/my-components/Navbar";

import { COLORS, GRADIENTS } from "@/colors/colors";
import { LuChartArea, LuDatabase, LuGitGraph, LuGraduationCap } from "react-icons/lu";

function LandingPage(){
    return (
    <>
        <Navbar/> 
        <Box position="relative" bgImage="url('/backgroundimages/BgBackground LandingPage1.png')" bgSize="cover" bgPosition="center" bgRepeat={"no-repeat"} w="100%" h= "736px" px="160px" py="100px" color="white">
            <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="rgba(0, 0, 0, 0.4)"
                    zIndex="1" 
                />
                <Stack
                    spacing={4} 
                    position="absolute"
                    zIndex="2">
            <Text fontSize="40pt" fontWeight="bold" whiteSpace="pre-line">
            COMPREENDA MELHOR A{"\n"}ATUAÇÃO DA LEI DE COTAS{"\n"}
            NA{" "}
            <Box as="span" color={COLORS.OrangePrimary}>
              UFCG
            </Box>
          </Text>
            <Box
            bg="rgba(247, 247, 247, 0.4)"// corrigir cor
            w="728px"
            h="196px"
            borderRadius="20px"
            p="20px"
          > 
                <Flex align="center" gap={3}>
                <LuChartArea size="100px" color={COLORS.BluePrimary}></LuChartArea> <Text color={COLORS.WhitePrimary}>O COTAINFO foi desenvolvido para que você possa compreender o ingresso, a permanência e os desafios enfrentados pelos estudantes cotistas e não cotistas na UFCG</Text>
                </Flex>
                <Flex aling="center" gap={3}>
                <Button size="md"  bgColor={COLORS.BluePrimary} color={COLORS.WhitePrimary} fontSize="25px" rounded="full" _hover={{w:"210px", color: COLORS.WhitePrimary, opacity:0.9, boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)"}}> FERRAMENTAS </Button>
                <Button size="md"  bgColor={COLORS.BluePrimary} color={COLORS.WhitePrimary} fontSize="25px" rounded="full" _hover={{w:"120px", color: COLORS.WhitePrimary, opacity:0.9, boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)"}}> LOGIN </Button>
                </Flex>
            </Box>
      
        </Stack>
        </Box>
        <Box bg={COLORS.BluePrimary} w="100%" h="2540px"  px="160px" py="100px">
            <Stack gap={5}>
            <Text whiteSpace="pre-line" fontSize="61pt" fontWeight="bold" color={COLORS.WhitePrimary}> 
                  CONHEÇA NOSSAS {"\n"} 
                  <Box as="span" color={COLORS.OrangePrimary}>FERRAMENTAS</Box>
            </Text> 
            <Box bg={COLORS.WhitePrimary} w="622px" h="5px" color="red" borderBottom="1px solid gray"/>
            <Text whiteSpace="pre-line" fontSize="20pt" color={COLORS.WhitePrimary}> 
              Explore as ferramentas do COTAINFO para realizar uma análise aprofundada dos dados {"\n"}
              relacionados ao ingresso, à permanência e aos desafios enfrentados pelos estudantes na UFCG.
            </Text>
            <Image borderRadius="20px" src ="public\backgroundimages\BG IMAGE 2 LANDING PAGE.png" /> 
            </Stack>
            <Stack gap={5}>
            <Text whiteSpace="pre-line" fontSize="61pt" fontWeight="bold" color={COLORS.WhitePrimary}> 
                  DESCUBRA DADOS {"\n"}
                  SOBRE ALUNOS
            </Text> 
            <Text whiteSpace="pre-line" fontSize="20pt" color={COLORS.WhitePrimary}> 
                Descubra e compare dados entre alunos cotistas e {"\n"}
                de ampla concorrência na UFCG
            </Text>
            <Flex gap={3}>
                <Button
                h="100px"  
                bgColor={COLORS.OrangePrimary} 
                color={COLORS.WhitePrimary} fontSize="25px"
                rounded="4xl"
                px="30px"
                py="150px"
                >
                <Flex direction="column" align="flex-start" gap={5} >
                <Icon as={LuDatabase} boxSize="50px" flexShrink={0}/>
                <Text fontSize="31pt" whiteSpace="pre-line" fontWeight="bold" textAlign="left" lineHeight="45px"> DADOS DE {"\n"} INGRESSANTES </Text>
                <Text fontSize="16pt" whiteSpace="pre-line" textAlign="left" lineHeight="25px" >
                  Descubra dados sobre o ingresso de  {"\n"}
                  alunos da UFCG e compare ao {"\n"}
                  longo dos anos. {"\n"}
                  </Text>
                </Flex> 
                </Button>
                <Button
                h="100px"  
                bgColor={COLORS.OrangePrimary} 
                color={COLORS.WhitePrimary} fontSize="25px"
                rounded="4xl"
                px="30px"
                py="150px"
                >
                <Flex direction="column" align="flex-start" gap={3} >
                <Icon as={LuGraduationCap} boxSize="80px" flexShrink={0}/>
                <Text fontSize="31pt" whiteSpace="pre-line" fontWeight="bold" textAlign="left" lineHeight="45px"> DADOS DE {"\n"} GRADUADOS </Text>
                <Text fontSize="16pt" whiteSpace="pre-line" textAlign="left" lineHeight="25px" >
                  Descubra dados sobre nossos alunos  {"\n"}
                  graduados e compare ao  {"\n"}
                  longo dos anos. {"\n"}
                  </Text>
                </Flex> 
                </Button>
                <Button
                h="100px"  
                bgColor={COLORS.OrangePrimary} 
                color={COLORS.WhitePrimary} fontSize="25px"
                rounded="4xl"
                px="30px"
                py="150px"
                >
                <Flex direction="column" align="flex-start" gap={5} >
                <Icon as={LuDatabase} boxSize="50px" flexShrink={0}/>
                <Text fontSize="31pt" whiteSpace="pre-line" fontWeight="bold" textAlign="left" lineHeight="45px"> DADOS SOBRE {"\n"} PERMANÊNCIAS </Text>
                <Text fontSize="16pt" whiteSpace="pre-line" textAlign="left" lineHeight="25px" >
                  Descubra os motivos de abandono,  {"\n"}
                  transferências e jubilamentos dos {"\n"}
                  alunos da UFCG. {"\n"}
                  </Text>
                </Flex> 
                </Button>
            </Flex>
            </Stack>
        </Box>
       
    </>
    )
}

export default LandingPage;