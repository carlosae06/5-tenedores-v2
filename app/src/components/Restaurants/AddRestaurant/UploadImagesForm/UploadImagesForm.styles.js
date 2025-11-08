import {StyleSheet} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

export const styles = StyleSheet.create(
    {
        viewImage: {
            flexDirection: 'row',
            marginHorizontal: 20,
            marginTop: 30,
        },
        containerIcon: {
            justifyContent: 'center',
            marginRight: 10,
            backgroundColor: '#E3E3E3',
            width: 70,
            height: 70,
        },
        error: {
            marginHorizontal: 20,
            marginTop: 10,
            color: '#FE0000',
            fontSize: 12,
            paddingLeft: 6,
        },
        imageStyle: {
            width: 70,
            height: 70,
            marginRight: 10,
        }
    }
);