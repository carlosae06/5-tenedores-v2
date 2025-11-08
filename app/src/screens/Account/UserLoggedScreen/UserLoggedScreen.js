import React, {useState } from 'react'
import { View } from 'react-native'
import {InfoUser, AccountOptions} from '../../../components/Account';
import {Button} from 'react-native-elements';
import {getAuth, signOut} from 'firebase/auth'

import {styles} from './UserLoggedScreen.styles'
import {LoadingModal} from '../../../components/';
//import { auth } from '../../../utils/firebase'; //Solo para pruebas esta usando Auth Emulator

export function UserLoggedScreen (){
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState ('');
  const [_, setReload] = useState(false);

  const onReload = () => setReload((prevState) => !prevState);

  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
  }
    return (
      <View style={styles.content}>
        <InfoUser setLoading={setLoading} setLoadingText={setLoadingText}></InfoUser>
        <AccountOptions onReload={onReload}/>
        <Button title='Cerrar sesión' buttonStyle={styles.btn} titleStyle={styles.btnText}
          onPress={logout}
        />
        <LoadingModal show={loading} text={loadingText}/>
      </View>
    )
}
