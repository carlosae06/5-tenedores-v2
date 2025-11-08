import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screen} from '../../app/src/utils';
import {FavoritesScreen} from '../../app/src/screens/FavoritesScreen';
const Stack = createNativeStackNavigator();
export function FavoritesStack() {
  return (
        <Stack.Navigator>
            <Stack.Screen name={screen.favorites.favorites} component={FavoritesScreen}
                options={{title: 'Favoritos'}}
            />
        </Stack.Navigator>
  )
}
