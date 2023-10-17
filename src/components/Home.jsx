import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={"https://thumbs.dreamstime.com/b/customer-service-desk-customer-service-desk-your-project-others-221342192.jpg"} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
           "Discover, Share, and Engage with our VidSpace! Explore a vast collection of videos, ranging from entertainment, education, to inspirational content. Upload your own videos, connect with like-minded creators, and experience a world of limitless visual stories. Dive into a realm of entertainment and knowledge, all in one place. Welcome to VidSpace, where your content journey begins."





          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={"https://1069gouniradio.com/wp-content/uploads/2021/08/e-learning.png"} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Learn New
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={"https://t3.ftcdn.net/jpg/03/46/14/28/360_F_346142850_fnv89mnTesyNU3t8zbbMc5yYtN9whSOC.jpg"} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
      Good food, good mood
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={"https://blog-content.ixigo.com/wp-content/uploads/2019/09/Places-to-visit-in-January-in-India.jpg"} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Explore
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={"https://c.ndtvimg.com/2020-10/q6fne97g_diyas-pti_640x480_25_October_20.jpg"} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
      Vocal For Local
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
