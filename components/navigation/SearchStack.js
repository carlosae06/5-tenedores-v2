import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screen} from '../../app/src/utils';
import {SearchScreen} from '../../app/src/screens/SearchScreen';

const Stack = createNativeStackNavigator();

export function SearchStack() {
  return (
        <Stack.Navigator>
            <Stack.Screen name={screen.search.search} component={SearchScreen}
                options={{title: 'Buscar'}}
            />
        </Stack.Navigator>
  )
}
