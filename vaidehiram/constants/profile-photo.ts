import type { ImageSourcePropType } from 'react-native';

import localProfileAsset from '@/assets/images/profile.png';

import { profilePhoto } from './config';

export function getProfileImageSource(): ImageSourcePropType | null {
  if (profilePhoto.mode === 'none') return null;
  if (profilePhoto.mode === 'remote') {
    const url = profilePhoto.remoteUrl.trim();
    return url ? { uri: url } : null;
  }
  return localProfileAsset;
}

export function hasProfilePhoto(): boolean {
  return getProfileImageSource() !== null;
}
