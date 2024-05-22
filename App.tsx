/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {PortalProvider} from '@gorhom/portal';
import RootNavigator from './src/navigation/RootNavigator';
import Toast from 'react-native-toast-message';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <QueryClientProvider client={queryClient}>
          <BottomSheetModalProvider>
            <PortalProvider>
              <RootNavigator />
            </PortalProvider>
          </BottomSheetModalProvider>
        </QueryClientProvider>
      </GestureHandlerRootView>
      <Toast />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
