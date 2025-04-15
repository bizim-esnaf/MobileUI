
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inventory from './inventory';

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Inventory" component={Inventory} />
        </Stack.Navigator>

    );
}
