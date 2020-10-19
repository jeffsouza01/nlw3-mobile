import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import{ createStackNavigator } from '@react-navigation/stack';


const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetail from './pages/OrphanageDetail';


export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}> 
                <Screen name='OrrphanageMap' component={OrphanagesMap} />

                <Screen name='OrphanageDetail' component={OrphanageDetail} />

            </Navigator>
        </NavigationContainer>
    )
}