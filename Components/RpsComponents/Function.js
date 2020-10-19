import React from 'react';
import {
    StyleSheet,
    View,
    Text,TouchableOpacity
  } from 'react-native';
import {styles} from '../../Styles/RPSStyle/FunctionStyle';
import {stylesg} from '../../Styles/general';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import * as PublicConst from '../RpsComponents/Config';




export default function Functions(){
    return(
        <View style={[styles.wrap]}>
            <View style={[styles.functionItem]}>
                <View style={styles.btn}>
                    <TouchableOpacity style={[styles.btnFunction, styles.bgYellow]}>
                        <FontAwesome5
                        name={"hand-scissors"}
                        style={[stylesg.textBrown, styles.centerArea]}
                        size={60}
                    />
                    </TouchableOpacity>
                </View>
                
                
            </View>
        </View>
    );
};