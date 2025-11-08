import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screen} from '../../app/src/utils';
import {AccountScreen} from '../../app/src/screens/Account/AccountScreen';
import {LoginScreen} from '../../app/src/screens/Account/LoginScreen/LoginScreen';
import {RegisterScreen} from '../../app/src/screens/Account/RegisterScreen/RegisterScreen';

const Stack = createNativeStackNavigator();
export function AccountStack() {
  return (
        <Stack.Navigator>
            <Stack.Screen name={screen.account.account} component={AccountScreen}
                options={{title: 'Cuenta'}}
            />
            <Stack.Screen name={screen.account.login} component={LoginScreen}
                options={{title: 'Iniciar Sesión'}}
            />
             <Stack.Screen name={screen.account.register} component={RegisterScreen}
                options={{title: 'Crea tu cuenta'}}
            />
        </Stack.Navigator>
  )
}
