import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screen} from '../../app/src/utils';
import {RestaurantsScreen} from '../../app/src/screens/Restaurants/RestaurantsScreen';
import {AddRestaurantScreen} from '../../app/src/screens/Restaurants/AddRestaurantScreen';
import {RestaurantScreen} from '../../app/src/screens/Restaurants/RestaurantScreen';
const Stack = createNativeStackNavigator();

export function RestaurantStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.restaurant.restaurants} component={RestaurantsScreen}
                options={{title: 'Restaurantes'}}
            />
            <Stack.Screen name={screen.restaurant.add} component={AddRestaurantScreen}
                options={{title: 'Añadir Restaurante'}}
            />
            <Stack.Screen name={screen.restaurant.restaurant} component={RestaurantScreen}
                options={{title: 'Restaurante'}}
            />
        </Stack.Navigator>
    );
}