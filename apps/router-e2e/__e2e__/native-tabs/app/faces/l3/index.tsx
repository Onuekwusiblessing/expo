import { Text, View } from 'react-native';

import { Links } from '@/__e2e__/native-tabs/components/links';


export default function L1Index() {
  return (
    <View
      style={{ flex: 1, backgroundColor: '#0f0', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#fff', fontSize: 24 }}>This is L3 Index</Text>
      <Links />
    </View>
  );
}
