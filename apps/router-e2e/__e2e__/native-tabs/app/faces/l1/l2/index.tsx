import { Links } from '@/__e2e__/native-tabs/components/links';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function L1Index() {
  const [time, setTime] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime((prev) => prev + 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <View
      style={{ flex: 1, backgroundColor: '#f00', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#fff', fontSize: 24 }}>This is L2 Index - {time}</Text>
      <Links />
    </View>
  );
}
