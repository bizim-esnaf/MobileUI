import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLayout from './(tabs)/_layout';
import Inventory from './(tabs)/inventory';

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group >
                <Stack.Screen name="AppLayout" component={AppLayout} />
                <Stack.Screen name="Inventory" component={Inventory} />
            </Stack.Group>
        </Stack.Navigator>
    );
}
