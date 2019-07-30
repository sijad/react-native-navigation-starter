import { Navigation } from 'react-native-navigation';
import { setDefaultOptions, registerScreens, loadIcons } from './commons';

Navigation.events().registerAppLaunchedListener(async () => {
  await loadIcons();
  registerScreens();
  setDefaultOptions();

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});
