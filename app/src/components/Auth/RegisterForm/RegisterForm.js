import React, {useState} from 'react';
import { View } from 'react-native';
import { Input, Icon, Button} from 'react-native-elements';
import { useFormik } from 'formik';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {screen} from '../../../utils';

import {initialValues, validationSchema} from './RegisterFormData'
import {styles} from './RegisterForm.style';
//import { auth } from '../../../utils/firebase'; //Solo para pruebas esta usando Auth Emulator

export function RegisterForm () {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema,
    validateOnChange: false, //Desabilita que valide en cualquier cambio
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, formValue.email, formValue.password);
        navigation.navigate(screen.account.account);
        //navigation.goBack();
      } catch (error) {
        console.log('Error', error);
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error al registrarse',
        });
      }
    }
  });

  const showHidenPassword = () => setShowPassword((prevState) => !prevState);
  const showHidenConfirmPassword = () => setShowConfirmPassword((prevState) => !prevState);
  return (
      <View style={styles.content}>
        <Input placeholder='Correo electronico'
        containerStyle={styles.input}
        rightIcon={<Icon type='material-community' name='at' iconStyle={styles.icon}/>}
        onChangeText={(text) => formik.setFieldValue('email', text)}
        errorMessage={formik.errors.email}
        />

        <Input placeholder='Password'
         containerStyle={styles.input}
         secureTextEntry={showPassword ? false : true}
         rightIcon={<Icon type='material-community' name={showPassword ? 'eye-off-outline' : 'eye-outline'}
          iconStyle={styles.icon}
          onPress={showHidenPassword}
          />}
         onChangeText={(text) => formik.setFieldValue('password', text)}
         errorMessage={formik.errors.password}
         />

        <Input placeholder='Confirmar password'
         containerStyle={styles.input}
         secureTextEntry={showConfirmPassword ? false : true}
         rightIcon={<Icon type='material-community' name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
          iconStyle={styles.icon}
          onPress={showHidenConfirmPassword}
          />}
         onChangeText={(text) => formik.setFieldValue('confirmPassword', text)}
         errorMessage={formik.errors.confirmPassword}
         />

        <Button title="Crear cuenta" containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        />
      </View>
    )
}
