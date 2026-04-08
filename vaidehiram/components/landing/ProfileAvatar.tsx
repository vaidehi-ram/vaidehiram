import { Image } from 'expo-image';
import { Text, View } from 'react-native';

import { profilePhoto } from '@/constants/config';
import { getProfileImageSource } from '@/constants/profile-photo';

type Size = 'sm' | 'md' | 'lg' | 'xl';

const sizeMap: Record<Size, number> = {
  sm: 72,
  md: 104,
  lg: 148,
  xl: 220,
};

type Props = {
  size?: Size;
  className?: string;
  showCaption?: boolean;
  priority?: boolean;
  /** Colourful “toy box” frame — great for childminding branding */
  variant?: 'simple' | 'playful';
};

export function ProfileAvatar({
  size = 'lg',
  className = '',
  showCaption = false,
  priority = false,
  variant = 'simple',
}: Props) {
  const src = getProfileImageSource();
  if (!src) return null;

  const dim = sizeMap[size];

  const frame =
    variant === 'playful' ? (
      <View className="rounded-[2rem] border-b-4 border-l-4 border-r-4 border-t-4 border-b-crayonGrass border-l-crayonPink border-r-babySky border-t-sunshine bg-white p-1.5 shadow-playful">
        <View className="overflow-hidden rounded-3xl bg-white" style={{ width: dim, height: dim }}>
          <Image
            source={src}
            style={{ width: dim, height: dim }}
            contentFit="cover"
            transition={240}
            cachePolicy="memory-disk"
            priority={priority ? 'high' : 'normal'}
            accessibilityLabel={profilePhoto.alt}
          />
        </View>
      </View>
    ) : (
      <View
        className="border-white shadow-card overflow-hidden rounded-[1.75rem] border-[3px] ring-2 ring-crayonPink/40 md:rounded-[2rem]"
        style={{ width: dim, height: dim }}>
        <Image
          source={src}
          style={{ width: dim, height: dim }}
          contentFit="cover"
          transition={240}
          cachePolicy="memory-disk"
          priority={priority ? 'high' : 'normal'}
          accessibilityLabel={profilePhoto.alt}
        />
      </View>
    );

  return (
    <View className={`items-center ${className}`}>
      {frame}
      {showCaption && profilePhoto.caption ? (
        <Text className="font-body text-crayonCoral mt-4 max-w-[16rem] text-center text-sm font-bold">
          {profilePhoto.caption}
        </Text>
      ) : null}
    </View>
  );
}
