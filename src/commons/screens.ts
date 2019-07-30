import { Navigation } from 'react-native-navigation';
import * as screens from '../screens';

export function registerScreens() {
  Object.keys(screens).forEach(screenKey => {
    Navigation.registerComponent(screenKey, () => {
      // register your Provider here
      // TODO add example
      return screens[screenKey as keyof typeof screens];
    });
  });
}
