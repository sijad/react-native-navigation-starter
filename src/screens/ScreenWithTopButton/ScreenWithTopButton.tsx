import React, { useCallback } from 'react';
import { Options, Navigation } from 'react-native-navigation';
import { ScreenProps } from '../../types';
import { SafeAreaView, StyleSheet, View, Button } from 'react-native';
import { Header, Colors } from 'react-native/Libraries/NewAppScreen';
import { getIcon } from '../../commons';
import { useNavigationButtonPressed } from '../../hooks';

interface HomeProps extends ScreenProps {}

export function ScreenWithTopButton({ componentId }: HomeProps) {
  const handlePopScreen = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  useNavigationButtonPressed(componentId, event => {
    if (event.buttonId === 'show-alert') {
      alert('Hello!');
    }
  });

  return (
    <SafeAreaView style={styles.page}>
      <Header />
      <View style={styles.sectionContainer}>
        <Button title="GO BACK" onPress={handlePopScreen} />
      </View>
    </SafeAreaView>
  );
}

ScreenWithTopButton.options = (): Options => ({
  topBar: {
    title: {
      text: 'Other Screen',
    },
    rightButtons: [
      {
        id: 'show-alert',
        text: 'Show Alert',
        icon: getIcon('warning'),
      },
    ],
  },
});

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
