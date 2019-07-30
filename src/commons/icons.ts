import Icon from 'react-native-vector-icons/MaterialIcons';
import { ImageRequireSource } from 'react-native';

enum Icons {
  'warning',
}

const icons = Object.keys(Icons).map(i => Icons[i as keyof typeof Icons]);
const iconsCache: { [x in keyof typeof Icons]?: ImageRequireSource } = {};

export async function loadIcons() {
  await Promise.all(
    icons.map(async k => {
      iconsCache[k] = await Icon.getImageSource(k.toString(), 24);
    }),
  );
}

export function getIcon(k: keyof typeof Icons) {
  return iconsCache[k]!;
}
