import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {Text, Button, Image} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import {styles} from './UserGuestScreen.style';
import {screen} from '../../../utils'



export function UserGuestScreen (){
  const navigation = useNavigation();
  const goToLogin = () => {
      navigation.navigate(screen.account.login);
  }
    return (
      <ScrollView centerContent={true} style={styles.content}>
          <Image source={require("../../../../../assets/img/user-guest.png")} style={styles.image}></Image>
          <Text style={styles.title}>Consultar tu perfil de 5 tenendores</Text>
          <Text style={styles.description}>
            ¿Como describirias tu mejor restaurante? Busca y visauliza los mejores
             restaurantes de una forma sencilla, vota cual te ha gustado más y
             comenta como ha sido tu experiancia.
          </Text>
    
          <Button title="Ver tu perfil" onPress={goToLogin} buttonStyle={styles.btnStyle}/>

      </ScrollView>
    )
}


