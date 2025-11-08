import React, {useState} from 'react';
import { View } from 'react-native';
import {Input, Button} from 'react-native-elements';
import {useFormik} from 'formik';
import {getAuth, updateEmail, EmailAuthProvider, reauthenticateWithCredential, verifyBeforeUpdateEmail } from 'firebase/auth';
import Toast from 'react-native-toast-message';

import { styles } from './ChangeEmailForm.styles';
import {initialValues, validationSchema} from './ChangeEmailForm.data'
//import { auth } from '../../../utils/firebase'; //Solo para pruebas esta usando Auth Emulator
 
export function ChangeEmailForm(props) {
    const {onClose, onReload} = props;
    const [showPassword, setShowPassword] = useState(false);

    const onShowPassword = () => setShowPassword((prevState) => !prevState); 

    const formik = useFormik(
        {
          initialValues: initialValues(),
          validationSchema: validationSchema(),
          validateOnChange: false,
          onSubmit: async (formValue) => {
            try {
              const currentUser = getAuth().currentUser;
              const credentials = EmailAuthProvider.credential(currentUser.email, formValue.password);
              reauthenticateWithCredential(currentUser, credentials);
              await updateEmail(currentUser, formValue.email);
              //await verifyBeforeUpdateEmail(currentUser, formValue.email);
              await currentUser.reload();
              onReload();
              onClose();
            } catch (error) {
              console.log(error);
              Toast.show({type: 'error', position: 'bottom', text1: 'Error al cambiar el correo'});
            }
          }
        }
      );
  return (
    <View>
    <View style={styles.content}>
        <Input placeholder='Nuevo correo' 
            containerStyle={styles.input}
            rightIcon={{type: 'material-community', name: 'at', color: '#C2C2C2'}}
            onChangeText={(text) => formik.setFieldValue('email', text)}
            errorMessage={formik.errors.email}
        />
        <Input placeholder='Password' 
            containerStyle={styles.input}
            secureTextEntry={showPassword ? false : true}
            rightIcon={{type: 'material-community', name: showPassword ? 'eye-off-outline' : 'eye-outline', color: '#C2C2C2',
                onPress: onShowPassword,
            }}
            onChangeText={(text) => formik.setFieldValue('password', text)}
            errorMessage={formik.errors.password}
        />
        <Button title='Cambiar correo' 
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
        />
    </View>
    </View>
  )
}
