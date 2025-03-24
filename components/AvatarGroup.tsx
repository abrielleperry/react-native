import { Avatar, AvatarFallbackText, AvatarGroup } from '@/components/ui/avatar';

export default function UsersGoing() {
  const avatars = [
    { src: 'https://example.com.jpg', alt: 'Sandeep Srivastva', color: 'bg-emerald-600' },
    { src: 'https://example.com.jpg', alt: 'Arjun Kapoor', color: 'bg-cyan-600' },
    { src: 'https://example.com.jpg', alt: 'Ritik Sharma ', color: 'bg-indigo-600' },
    { src: 'https://example.com.jpg', alt: 'Akhil Sharma', color: 'bg-gray-600' },
    { src: 'https://example.com.jpg', alt: 'Rahul Sharma ', color: 'bg-red-400' },
  ];
  const extraAvatars = avatars.slice(3);
  const remainingCount = extraAvatars.length;

  return (
    <AvatarGroup>
      {[
        ...avatars.slice(0, 3).map((avatar, index) => (
          <Avatar key={index} size="lg" className={'border-2 border-outline-0 ' + avatar.color}>
            <AvatarFallbackText className="text-white">{avatar.alt}</AvatarFallbackText>
          </Avatar>
        )),
        <Avatar key="remaining" size="lg">
          <AvatarFallbackText>{'+ ' + remainingCount}</AvatarFallbackText>
        </Avatar>,
      ]}
    </AvatarGroup>
  );
}
