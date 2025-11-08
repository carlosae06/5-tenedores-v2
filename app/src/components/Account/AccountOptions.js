import React, {useState} from 'react';
import { View } from 'react-native';
import {ListItem, Icon, Text} from 'react-native-elements'; 
import {map} from 'lodash-es';

import {Modal} from '../../components/Shared';
import {ChangeNameForm} from './ChangeNameForm';
import {ChangeEmailForm} from './ChangeEmailForm';
import { ChangePasswordForm } from './ChangePasswordForm';

export function AccountOptions(props) {
    const {onReload} = props;
    const [showModal, setShowModal] = useState(false);
    const [renderComponet, setRenderComponet] = useState(null);

    const onCloseOpenModal = () => setShowModal ((prevState) => !prevState)
    const selectedComponent = (key) => {
        if(key === 'displayName'){
            setRenderComponet(<ChangeNameForm onClose={onCloseOpenModal} onReload={onReload} />);
        }
        if(key === 'email'){
            setRenderComponet(<ChangeEmailForm onClose={onCloseOpenModal} onReload={onReload} />);
        }
        if(key === 'password'){
            setRenderComponet(<ChangePasswordForm onClose={onCloseOpenModal} onReload={onReload}/>);
        }
        onCloseOpenModal();
    };
    const menuOptions = getMenuOptions(selectedComponent); 


  return (
    <View>
        {map(menuOptions, (menu) => (
            <ListItem key={menu.id}
             bottomDivider
              onPress={menu.onPress}
              >
                <Icon type={menu.iconType} name={menu.iconNameLeft} color={menu.iconColorLeft}/>
                <ListItem.Content>
                    <ListItem.Title>{menu.title}</ListItem.Title>
                </ListItem.Content>
                <Icon type={menu.type} name={menu.iconNameRight} color={menu.iconColorRight}/>
            </ListItem>
        ))}

        <Modal show={showModal} close={onCloseOpenModal}>
            {renderComponet}
        </Modal>
    </View>
  );
}

function getMenuOptions(selectedComponent) {
    return [
        {
            id: '001',
            title: 'Cambiar nombre y apellido',
            iconType: 'material-community',
            iconNameLeft: 'account-circle',
            iconColorLeft: '#CCC',
            iconNameRight: 'chevron-right',
            iconColorRight: '#CCC',
            onPress: () => selectedComponent('displayName'),
        },
        {
            id: '002',
            title: 'Cambiar email',
            iconType: 'material-community',
            iconNameLeft: 'at',
            iconColorLeft: '#CCC',
            iconNameRight: 'chevron-right',
            iconColorRight: '#CCC',
            onPress: () => selectedComponent('email'),
        },
         {
            id: '003',
            title: 'Cambiar password',
            iconType: 'material-community',
            iconNameLeft: 'lock-reset',
            iconColorLeft: '#CCC',
            iconNameRight: 'chevron-right',
            iconColorRight: '#CCC',
            onPress: () => selectedComponent('password'),
        }
    ];
}
