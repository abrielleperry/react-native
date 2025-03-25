import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { StyleSheet, TextInput, Alert, ImageSourcePropType } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SocialMediaCard from '../../components/PostCard';
import EventCard from '../../components/EventPost';

type PostItem = {
  id: string;
  interest: string;
  username: string;
  userAvatar: { uri: string };
  timePosted: string;
  postText?: string;
  postImage?: { uri: string };
  likesCount: number;
  commentsCount: number;
  type: 'post';
};

type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
  image: ImageSourcePropType;
  attendeeAvatars?: ImageSourcePropType[];
  totalAttendees?: number;
  status?: 'upcoming' | 'in-progress' | 'completed' | 'cancelled';
  onPress?: () => void;
  onRegisterPress?: () => void;
  type: 'event';
};

type FeedItem = PostItem | EventItem;

export default function HomeScreen() {
  const avatars2 = [
    { uri: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { uri: 'https://randomuser.me/api/portraits/men/69.jpg' },
    { uri: 'https://randomuser.me/api/portraits/women/70.jpg' },
    { uri: 'https://randomuser.me/api/portraits/men/71.jpg' },
    { uri: 'https://randomuser.me/api/portraits/women/72.jpg' },
    { uri: 'https://randomuser.me/api/portraits/men/73.jpg' },
    { uri: 'https://randomuser.me/api/portraits/women/74.jpg' },
    { uri: 'https://randomuser.me/api/portraits/men/75.jpg' },
    { uri: 'https://randomuser.me/api/portraits/women/76.jpg' },
    { uri: 'https://randomuser.me/api/portraits/men/77.jpg' },
    { uri: 'https://randomuser.me/api/portraits/women/78.jpg' },
    { uri: 'https://randomuser.me/api/portraits/men/79.jpg' },
  ];

  const posts: PostItem[] = [
    {
      id: '1',
      interest: 'Books',
      username: 'Julia Smith',
      userAvatar: { uri: 'https://randomuser.me/api/portraits/women/44.jpg' },
      timePosted: '5 hours ago',
      postText:
        'Just finished reading an amazing book that completely changed my perspective on life...',
      likesCount: 87,
      commentsCount: 32,
      type: 'post',
    },
    {
      id: '2',
      interest: 'Photography',
      username: 'travel_enthusiast',
      userAvatar: { uri: 'https://randomuser.me/api/portraits/women/68.jpg' },
      timePosted: '1 day ago',
      postText: 'Sunset views from my hotel balcony. No filter needed!',
      postImage: { uri: 'https://picsum.photos/id/1016/1000/1000' },
      likesCount: 342,
      commentsCount: 56,
      type: 'post',
    },
  ];

  const events: EventItem[] = [
    {
      id: 'e1',
      title: 'Pottery Workshop',
      date: 'June 15-17, 2024',
      time: '12:00 PM - 11:00 PM',
      location: 'Central Park, New York',
      description: 'Join us for a weekend of creativity and fun at our pottery workshop...',
      image: { uri: 'https://picsum.photos/id/1019/1000/500' },
      attendeeAvatars: avatars2, // ✅ Corrected syntax
      totalAttendees: 235,
      status: 'upcoming',
      type: 'event',
    },
  ];

  const feed: FeedItem[] = [...posts, ...events];

  const renderItem = ({ item }: { item: FeedItem }) => {
    if (item.type === 'post') {
      return (
        <SocialMediaCard
          interest={item.interest}
          username={item.username}
          userAvatar={item.userAvatar}
          timePosted={item.timePosted}
          postText={item.postText}
          postImage={item.postImage}
          likesCount={item.likesCount}
          commentsCount={item.commentsCount}
          onLikePress={() => console.log('Like pressed')}
          onCommentPress={() => Alert.alert('Comments', 'Comments section would open here')}
          onProfilePress={() => Alert.alert('Profile', `Navigate to ${item.username} profile`)}
        />
      );
    }

    if (item.type === 'event') {
      return (
        <EventCard
          title={item.title}
          date={item.date}
          time={item.time}
          location={item.location}
          description={item.description}
          image={item.image}
          attendeeAvatars={item.attendeeAvatars}
          status={item.status}
          onPress={() => Alert.alert('Event Details', 'View full event details')}
          onRegisterPress={() => Alert.alert('Register', 'Registration form would open here')}
        />
      );
    }

    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlashList
        data={feed}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        estimatedItemSize={300}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
