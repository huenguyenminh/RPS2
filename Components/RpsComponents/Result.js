import React from 'react';
import {
    StyleSheet,
    View,
    Text,TouchableOpacity
  } from 'react-native';
import {styles} from '../../Styles/RPSStyle/ResultStyle';
import {stylesg} from '../../Styles/general';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import * as PublicConst from '../RpsComponents/Config';

const listStar = [];
const numberStar = PublicConst.TimesPlayer;

for (let i = 0; i < numberStar; i++){
    listStar.push(
        <FontAwesome5
            name={"star"}
            style={[styles.textBlack]}
            size={20}
            key={i+'-star'}
        />
    )
}

export default function Result(){
    return(
        <View style={[styles.wrapResult]}>
            <View style={[styles.resultItem]}>
                <View style={[styles.resultItemIn,stylesg.centerArea]}>
                    <Text style={[stylesg.lbl]}>Player</Text>
                    <View style={[stylesg.flexRow, styles.listStar]}>
                        {listStar}
                    </View> 
                </View>
            </View>
            <View style={[styles.resultItem]}>
                <View style={[styles.resultItemIn,stylesg.centerArea]}>
                    <Text style={[stylesg.lbl]}>Computer</Text>
                    <View style={[stylesg.flexRow, styles.listStar]}>
                        {listStar}
                    </View> 
                </View>
            </View>
        </View>
    );
};