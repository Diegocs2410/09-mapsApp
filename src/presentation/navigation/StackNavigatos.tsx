import {createStackNavigator} from '@react-navigation/stack';
import LoadingScreen from '../screens/loading/LoadingScreen';
import MapScreen from '../screens/maps/MapScreen';
import PermissionsScreen from '../screens/permissions/PermissionsScreen';

export type RootStackParams = {
  LoadingScreen: undefined;
  PermissionScreen: undefined;
  MapScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="LoadingScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="PermissionScreen" component={PermissionsScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
