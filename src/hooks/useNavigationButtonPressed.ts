import { useEffect, useRef } from 'react';
import {
  Navigation,
  NavigationButtonPressedEvent,
} from 'react-native-navigation';

export function useNavigationButtonPressed(
  componentId: string,
  callback: (event: NavigationButtonPressedEvent) => void,
) {
  const callBackRef = useRef(callback);
  callBackRef.current = callback;

  useEffect(() => {
    const listener = Navigation.events().bindComponent(
      {
        navigationButtonPressed: (event: NavigationButtonPressedEvent) => {
          callBackRef.current(event);
        },
      } as any,
      componentId,
    );
    return () => listener.remove();
  }, [componentId]);
}
