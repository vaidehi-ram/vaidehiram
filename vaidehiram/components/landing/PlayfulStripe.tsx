import { Text, View } from 'react-native';

/**
 * Rainbow strip + tiny “playroom” touches — sets an immediate childminding mood.
 */
export function PlayfulStripe() {
  return (
    <View className="w-full">
      <View className="h-2.5 w-full flex-row">
        <View className="bg-sunshine flex-1" />
        <View className="bg-crayonCoral flex-1" />
        <View className="bg-babySky flex-1" />
        <View className="bg-crayonLilac flex-1" />
        <View className="bg-crayonGrass flex-1" />
        <View className="bg-crayonPink flex-1" />
      </View>
      <View className="border-babySky/30 flex-row items-center justify-center gap-3 border-b bg-cream px-3 py-1.5">
        <Text className="text-sm">🧸</Text>
        <Text className="font-body text-ink-600 text-xs font-semibold tracking-wide">Little learners welcome here</Text>
        <Text className="text-sm">🌈</Text>
      </View>
    </View>
  );
}
