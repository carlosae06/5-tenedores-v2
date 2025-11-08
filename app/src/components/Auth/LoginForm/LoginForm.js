import React, {useState}from 'react'
import { View } from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import {useFormik} from 'formik';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native'

import {styles} from './LoginForm.styles';
import {initialValues, validationSchema} from './LoginFormData';
import {screen} from '../../../utils';
//import { auth } from '../../../utils/firebase'; //Solo para pruebas esta usando Auth Emulator

export function LoginForm (){
    const [showPassword, setShowPassword] = useState(false);
    const showHidenPassword = () => setShowPassword((prevState) => !prevState);
    const navigation = useNavigation();

      const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema,
        validateOnChange: false, //Desabilita que valide en cualquier cambio
        onSubmit: async (formValue) => {
          try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, formValue.email, formValue.password);
            navigation.navigate(screen.account.account);
            //navigation.goBack();
          } catch (error) {
            Toast.show({
              type: 'error',
              position: 'bottom',
              text1: 'Usuario o contraseña incorrectos',
            });
          }
        }
      });
    return (
        <View style={styles.content}>
            <Input placeholder='Correo' containerStyle={styles.input}
                rightIcon={<Icon type='material-community' name='at' iconStyle={styles.icon}/>}
                onChangeText={(text) => formik.setFieldValue('email', text)}
                errorMessage={formik.errors.email}
            />
            <Input placeholder='Password' containerStyle={styles.input} 
                secureTextEntry={showPassword ? false: true}
                rightIcon={<Icon type='material-community' name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    iconStyle={styles.icon}
                    onPress={showHidenPassword}
                />}
                onChangeText={(text) => formik.setFieldValue('password', text)}
                errorMessage={formik.errors.password}
            />
            <Button title='Iniciar sesión'
             containerStyle={styles.btnSesion}
             buttonStyle={styles.btn}
             onPress={formik.handleSubmit}
             loading={formik.isSubmitting}
             />
        </View>
    );
}
