import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import UsersGoing from './AvatarGroup';

export default function EventPost() {
  return (
    <Card className="m-3 max-w-[360px] rounded-lg p-5">
      <Image
        source={{
          uri: 'https://gluestack.github.io/public-blog-video-assets/saree.png',
        }}
        className="mb-6 aspect-[4/3] h-[240px] w-full rounded-md"
        alt="image"
      />
      <Box className="mb-2 flex-row">
        <Avatar className="mr-3">
          <AvatarFallbackText>RR</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://gluestack.github.io/public-blog-video-assets/john.png',
            }}
            alt="image"
          />
        </Avatar>
        <VStack>
          <Heading size="lg" className="mb-1">
            Fishing
          </Heading>
          <Text size="sm">John Smith</Text>
        </VStack>
      </Box>
      <VStack className="mb-6">
        <Heading size="md" className="mb-4">
          Pottery Workshop
        </Heading>
        <Text size="sm">We will be making vases!</Text>
      </VStack>
      <Box className="flex-col sm:flex-row ">
        <UsersGoing />
      </Box>
    </Card>
  );
}
