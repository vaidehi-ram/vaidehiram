import { Text, View } from 'react-native';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  /** Extra classes on the outer wrapper (e.g. margin tweaks when something sits above) */
  className?: string;
  /** Gradient accent under the title */
  showAccent?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  showAccent = true,
}: Props) {
  const isCenter = align === 'center';
  return (
    <View className={`mb-10 ${isCenter ? 'items-center' : 'items-start'} px-1 ${className}`}>
      {eyebrow ? (
        <View
          className={`mb-3 rounded-full border-2 border-sunshine/70 bg-white/95 px-3.5 py-1.5 shadow-lift backdrop-blur-md ${isCenter ? 'self-center' : 'self-start'}`}>
          <Text className="font-body text-crayonCoral text-center text-xs font-bold uppercase tracking-[0.22em]">
            {eyebrow}
          </Text>
        </View>
      ) : null}
      <Text
        className={`font-display text-ink-900 max-w-4xl text-3xl font-bold leading-tight tracking-tight md:text-[2.35rem] ${
          isCenter ? 'text-center' : 'text-left'
        }`}>
        {title}
      </Text>
      {showAccent ? (
        <View
          className={`mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-crayonCoral via-sunshine to-babySky ${
            isCenter ? 'self-center' : 'self-start'
          }`}
        />
      ) : null}
      {subtitle ? (
        <Text
          className={`font-body text-ink-500 mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${
            isCenter ? 'text-center' : 'text-left'
          }`}>
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
}
