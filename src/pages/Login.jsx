import { Avatar, Box, Card, Text, Center, Flex, Icon, Link, Button, Image, Stack } from "@chakra-ui/react"
import Navbar from "@/my-components/Navbar";

import { COLORS, GRADIENTS } from "@/colors/colors";
import { LuChartArea, LuDatabase, LuGitGraph, LuGraduationCap } from "react-icons/lu";

function Login(){
    return (
    <>
        <Box bgGradient="to-r"  gradientFrom={COLORS.BluePrimary} gradientTo="blue.200" w="100%" h="2540px"  px="160px" py="100px">
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

export default Login;