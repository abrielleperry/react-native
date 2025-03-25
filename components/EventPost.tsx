import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ImageSourcePropType,
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';

// Avatar Group Component
interface AvatarGroupProps {
  avatars: ImageSourcePropType[];
  maxDisplay?: number;
  size?: number;
  totalAttendees?: number;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  maxDisplay = 4,
  size = 32,
  totalAttendees,
}) => {
  const displayAvatars = avatars.slice(0, maxDisplay);
  const remainingCount = avatars.length - maxDisplay;

  return (
    <View style={styles.avatarGroupContainer}>
      {displayAvatars.map((avatar, index) => (
        <View
          key={index}
          style={[
            styles.avatarContainer,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              marginLeft: index === 0 ? 0 : -size / 4,
              zIndex: displayAvatars.length - index,
            },
          ]}>
          <Image
            source={avatar}
            style={{
              width: size - 2,
              height: size - 2,
              borderRadius: (size - 2) / 2,
            }}
          />
        </View>
      ))}

      {remainingCount > 0 && (
        <View
          style={[
            styles.avatarContainer,
            styles.moreContainer,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              marginLeft: -size / 4,
              zIndex: 0,
            },
          ]}>
          <Text style={styles.moreText}>+{remainingCount}</Text>
        </View>
      )}

      {totalAttendees !== undefined && (
        <Text style={styles.attendeesText}>{totalAttendees} attendees</Text>
      )}
    </View>
  );
};

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
  image: ImageSourcePropType;
  attendeeAvatars?: ImageSourcePropType[];

  status?: 'upcoming' | 'in-progress' | 'completed' | 'cancelled';
  onPress?: () => void;
  onRegisterPress?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  location,
  description,
  image,
  attendeeAvatars = [],

  status = 'upcoming',
  onPress,
  onRegisterPress,
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'upcoming':
        return '#4CAF50';
      case 'in-progress':
        return '#2196F3';
      case 'completed':
        return '#9E9E9E';
      case 'cancelled':
        return '#F44336';
      default:
        return '#4CAF50';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'upcoming':
        return 'Upcoming';
      case 'in-progress':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      case 'cancelled':
        return 'Cancelled';
      default:
        return 'Upcoming';
    }
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={styles.card}>
        {/* Event Image */}
        <Image source={image} style={styles.image} resizeMode="cover" />

        {/* Status Badge */}
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
          <Text style={styles.statusText}>{getStatusText()}</Text>
        </View>

        {/* Event Content */}
        <View style={styles.contentContainer}>
          {/* Title */}
          <Text style={styles.title}>{title}</Text>

          {/* Event Details */}
          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Feather name="calendar" width={16} height={16} color="#666" style={styles.icon} />
              <Text style={styles.detailText}>{date}</Text>
            </View>

            <View style={styles.detailRow}>
              <Feather
                name="clock"
                size={24}
                width={16}
                height={16}
                color="#666"
                style={styles.icon}
              />
              <Text style={styles.detailText}>{time}</Text>
            </View>

            <View style={styles.detailRow}>
              <Feather name="map-pin" width={16} height={16} color="#666" style={styles.icon} />
              <Text style={styles.detailText}>{location}</Text>
            </View>
          </View>

          {/* Attendees Avatar Group */}
          {attendeeAvatars.length > 0 && (
            <View style={styles.attendeesSection}>
              <View style={styles.attendeesHeader}>
                <Feather name="users" width={16} height={16} color="#666" />
                <Text style={styles.attendeesHeaderText}>Attendees</Text>
              </View>
              <AvatarGroup avatars={attendeeAvatars} />
            </View>
          )}

          {/* Description */}
          {description && (
            <Text style={styles.description} numberOfLines={2}>
              {description}
            </Text>
          )}

          {/* Register Button */}
          {status === 'upcoming' && (
            <TouchableOpacity
              style={styles.registerButton}
              onPress={onRegisterPress}
              activeOpacity={0.8}>
              <Text style={styles.registerButtonText}>Register</Text>

              <Feather name="chevron-right" width={16} height={16} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginVertical: 10,
    marginHorizontal: 16,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  image: {
    width: '100%',
    height: 160,
  },
  statusBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  detailsContainer: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  registerButton: {
    backgroundColor: '#5E72E4', // Purple/blue color
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 4,
  },
  // Avatar Group Styles
  attendeesSection: {
    marginBottom: 16,
  },
  attendeesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  attendeesHeaderText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
    marginLeft: 8,
  },
  avatarGroupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
  },
  moreContainer: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666',
  },
  attendeesText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
});

export default EventCard;
