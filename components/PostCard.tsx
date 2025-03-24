import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Box } from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

export default function PostCard() {
  return (
    <Card className="m-3 max-w-[360px] rounded-lg p-5">
      <Box className="flex-row">
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
        <Heading size="md" className="my-2">
          I want to catch a bass!
        </Heading>
        <Text size="sm">Has anyone ever caught a bass?</Text>
      </VStack>
        <Text className="mb-2 text-sm font-normal text-right text-typography-700">May 15, 2023</Text>
    </Card>
  );
}
