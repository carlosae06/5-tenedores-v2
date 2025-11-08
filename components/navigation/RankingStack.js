import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screen} from '../../app/src/utils';
import {RankingScreen} from '../../app/src/screens/RankingScreen';
const Stack = createNativeStackNavigator();
export function RankingStack() {
  return (
        <Stack.Navigator>
            <Stack.Screen name={screen.ranking.ranking} component={RankingScreen}
                options={{title: 'Ranking'}}
            />
        </Stack.Navigator>
  )
}
