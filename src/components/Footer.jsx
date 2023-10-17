import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'pink'} // Set the colorScheme to 'pink'
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All rights received</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'} marginBottom="4">
            <a target={'_blank'} href="https://youtube.com/@abhimaurya123?si=Bq1LS8FzOUhlmO4L">
              Youtube
            </a>
            <FaYoutube style={{ margin: '0 8px 0 0' }} />
          </Button>
          <Button variant={'link'} colorScheme={'white'} marginBottom="4">
            <a target={'_blank'} href="https://instagram.com/abhimaurya5612?igshid=OGQ5ZDc2ODk2ZA==">
              Instagram
            </a>
            <FaInstagram style={{ margin: '0 8px 0 0' }} />
          </Button>

          <Button variant={'link'} colorScheme={'white'} marginBottom="4">
            <a target={'_blank'} href="https://github.com/Abhishek11364">
              Github
            </a>
            <FaGithub style={{ margin: '0 8px 0 0' }} />
          </Button>

          <Button variant={'link'} colorScheme={'white'} marginBottom="4">
            <a target={'_blank'} href="https://www.linkedin.com/in/abhishek-kushwaha1508">
              LinkedIn
            </a>
            <FaLinkedin marginLeft="2" />
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
