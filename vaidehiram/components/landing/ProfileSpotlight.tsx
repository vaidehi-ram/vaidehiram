import { Text, View } from 'react-native';

import { ProfileAvatar } from '@/components/landing/ProfileAvatar';
import { profilePhoto } from '@/constants/config';
import { hasProfilePhoto } from '@/constants/profile-photo';

const TAG_STYLES = [
  'bg-sunshine/35 border-sunshine text-ink-800',
  'bg-babySky/35 border-babySky text-ink-800',
  'bg-crayonLilac/40 border-crayonLilac text-ink-800',
  'bg-crayonGrass/35 border-crayonGrass text-ink-800',
  'bg-crayonPink/40 border-crayonPink text-ink-800',
] as const;

export function ProfileSpotlight() {
  const hasPhoto = hasProfilePhoto();
  const tags = profilePhoto.funTags;

  return (
    <View className="relative z-20 -mt-6 px-5 pb-2 md:-mt-8 md:px-10">
      <View className="pointer-events-none absolute -left-6 top-1/3 h-24 w-24 rounded-full bg-crayonCoral/25 blur-2xl" />
      <View className="pointer-events-none absolute -right-4 bottom-8 h-20 w-20 rounded-full bg-babySky/40 blur-2xl" />

      <View className="border-sunshine/70 shadow-playful mx-auto max-w-6xl overflow-hidden rounded-[2rem] border-4 bg-white shadow-card md:rounded-[2.5rem]">
        <View className="from-sunshine/25 via-babySky/20 to-crayonLilac/25 border-b border-white/50 bg-gradient-to-br px-5 py-7 md:flex-row md:items-center md:gap-12 md:px-12 md:py-10">
          <View className="mb-8 items-center md:mb-0 md:w-[260px] md:shrink-0 md:items-center">
            {hasPhoto ? (
              <ProfileAvatar size="xl" priority showCaption variant="playful" />
            ) : (
              <View className="items-center">
                <View className="shadow-playful border-crayonCoral/40 from-sunshine via-crayonPink to-babySky h-56 w-56 items-center justify-center rounded-[2rem] border-4 border-dashed bg-gradient-to-br">
                  <Text className="text-7xl md:text-8xl">👋</Text>
                </View>
                <Text className="font-body text-crayonCoral mt-3 text-center text-xs font-bold uppercase tracking-widest">
                  Your photo goes here
                </Text>
              </View>
            )}
          </View>

          <View className="min-w-0 flex-1">
            <View className="mb-3 flex-row flex-wrap items-center gap-2">
              <Text className="text-xl">🧒</Text>
              <View className="rounded-full bg-crayonCoral/15 border-crayonCoral/40 border px-3 py-1">
                <Text className="font-body text-crayonCoral text-xs font-bold uppercase tracking-[0.18em]">
                  Meet your childminder
                </Text>
              </View>
            </View>

            <Text className="font-display text-ink-900 text-[2rem] font-bold leading-tight tracking-tight md:text-[2.35rem]">
              Hi, I&apos;m {profilePhoto.displayName}
            </Text>
            <Text className="font-body text-ink-700 mt-2 text-base font-medium leading-relaxed md:text-lg">
              {profilePhoto.roleLabel}
            </Text>

            {!hasPhoto ? (
              <Text className="font-body text-ink-500 mt-3 border-l-4 border-crayonCoral pl-3 text-sm leading-relaxed md:text-base">
                {profilePhoto.noPhotoHint}
              </Text>
            ) : null}

            <View className="mt-6 flex-row flex-wrap gap-2">
              {tags.map((tag, i) => (
                <View
                  key={`${tag}-${i}`}
                  className={`rounded-full border px-3.5 py-2 ${TAG_STYLES[i % TAG_STYLES.length]}`}>
                  <Text className="font-body text-xs font-bold">{tag}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
