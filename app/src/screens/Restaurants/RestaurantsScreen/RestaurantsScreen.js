import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements'
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {collection, onSnapshot, orderBy, query} from 'firebase/firestore';

import {ListRestaurants} from '../../../components/Restaurants';
import {LoadingModal} from '../../../components/Shared';
import {screen, db} from '../../../utils';
import { styles } from './RestaurantsScreen.styles';
export function RestaurantsScreen(props) {
    const {navigation} = props;
    const [currentUser, setCurrentUser] = useState(null);
    const [restaurants, setRestaurants] = useState(null);
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        });
    }, []);

    const goToAddRestaurant = () => {
        //navigation.navigate(screen.restaurant.add); 
        navigation.navigate(screen.restaurant.tab, {screen: screen.restaurant.add});
    }

    useEffect(() => {
        const q = query(collection(db, 'restaurants'), orderBy('createdAt', 'desc'));
        
        onSnapshot(q, (snapshot) => {
            setRestaurants(snapshot.docs);
            const restaurants = snapshot.docs.map(doc => ({
                ...doc.data()
            }));
            console.log(restaurants);
        });
    }, [])
    return (
        <View style={styles.content}>
            {!restaurants ? (
                <LoadingModal show text='Cargando..'/>
            ) : (
                <ListRestaurants restaurants={restaurants}/>
            )}
            {
                currentUser && (
                    <Icon
                        reverse
                        type='material-community'
                        name='plus'
                        color="#00A680"
                        containerStyle={styles.btnContainer}
                        onPress={goToAddRestaurant}
                    />
                )
            }
  
        </View>
    );
}