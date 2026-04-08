import * as Linking from 'expo-linking';
import { Pressable, Text, View } from 'react-native';

import { business, contact, footer } from '@/constants/config';

function ContactChip({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      className="border-sunshine/40 bg-crayonCoral/20 active:bg-crayonCoral/30 rounded-full border-2 px-4 py-2.5">
      <Text className="font-body text-center text-sm font-bold text-white">{label}</Text>
    </Pressable>
  );
}

export function Footer() {
  return (
    <View className="from-ink-950 to-ink-900 bg-gradient-to-b px-5 pb-14 pt-0 md:px-10">
      <View className="mb-8 w-full flex-row">
        <View className="bg-sunshine h-1.5 flex-1" />
        <View className="bg-crayonCoral h-1.5 flex-1" />
        <View className="bg-babySky h-1.5 flex-1" />
        <View className="bg-crayonLilac h-1.5 flex-1" />
        <View className="bg-crayonGrass h-1.5 flex-1" />
        <View className="bg-crayonPink h-1.5 flex-1" />
      </View>
      <View className="mx-auto w-full max-w-6xl">
        <Text className="mb-2 text-center text-3xl">🧸</Text>
        <Text className="font-display mb-1 text-center text-2xl font-bold text-white">{footer.contactHeading}</Text>
        <Text className="font-body text-ink-400 mb-10 text-center text-base">
          {business.shortName} · {business.area}
        </Text>
        <View className="mb-10 flex-row flex-wrap items-center justify-center gap-3">
          <ContactChip label={contact.email} onPress={() => Linking.openURL(`mailto:${contact.email}`)} />
          <ContactChip label={contact.phone} onPress={() => Linking.openURL(`tel:${contact.phone.replace(/\s/g, '')}`)} />
          {contact.whatsappUrl ? (
            <ContactChip label="WhatsApp" onPress={() => Linking.openURL(contact.whatsappUrl)} />
          ) : null}
          {contact.instagramUrl ? (
            <ContactChip label="Instagram" onPress={() => Linking.openURL(contact.instagramUrl)} />
          ) : null}
        </View>
        <Text className="font-body text-center text-xs text-white/45">{footer.note}</Text>
      </View>
    </View>
  );
}
