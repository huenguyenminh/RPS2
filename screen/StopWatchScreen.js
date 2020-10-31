import React, {useEffect, useState, useRef} from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  SafeAreaView,
  StatusBar,
  FlatList,
  Linking,
} from 'react-native';
import {formatDistanceToNow, parseISO} from 'date-fns';

import * as PusherConst from '../Components/RpsComponents/Config';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const StopWatchScreen = ({navigation}) => {
  const [timeLap, setTimeLap] = useState([]);
  const [timeCur, setTimeCur] = useState(0);
  let timeInterval = useRef();
  const lapStop = [
    {
      id: 1,
      ml: 5,
      s: 1,
      m: 0,
      h: 0,
    },
    {
      id: 2,
      ml: 15,
      s: 2,
      m: 2,
      h: 0,
    },
    {
      id: 3,
      ml: 20,
      s: 3,
      m: 0,
      h: 0,
    },
    {
      id: 4,
      ml: 25,
      s: 10,
      m: 2,
      h: 0,
    },
  ];

  const [flap, setFlap] = useState([]);
  const [status, setStatus] = useState(1); // 0 : stop, 1: start
  const [ended, setEnded] = useState(false);

  function formatMs(ml){
    if (timeCur == 100){
      timeCur = 0;
    }else if(timeCur < 10){
      timeCur = '0' + timeCur;
    }
  }
  function startCounter() {
    timeInterval.current = setInterval( () => {
      setTimeCur((timeCur) => timeCur + 1);
    },10);
    // formatMs(timeCur);
    setTimeCur(timeCur);
    setStatus(0);
  }
  function stopCounter(){
    console.log('timeInterval:====' , timeInterval);
    clearInterval(timeInterval.current);
    setStatus(1);
  }
  

  const renderItem = ({item, index}) => {
    
    return <View key={item.id} style={styles.lapStop}>
      <View style={styles.lapStopId}>
          <Text>#{index}</Text>
      </View>
      <Text style={styles.itemLap}>
            {item.h}: {item.m}: {item.s}.{item.ml}
        </Text>
    </View>
  };

  

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.stopWatchWrap}>
        {/* Watch and List lap */}
        <View style={styles.watchAndList}>
          <View style={styles.watch}>
            <Text style={styles.h1}>Stopwatch</Text>
            <View style={styles.counter}>
              <Text style={styles.minutes}>00 :</Text>
              <Text style={styles.seconds}>07.</Text>
              <Text style={styles.milliseconds}>{timeCur}</Text>
            </View>
          </View>
          <View style={styles.listLap}>
            <FlatList
              data={lapStop}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>

        {/* Action */}
        <View style={styles.action}>
          <TouchableOpacity style={styles.actionLeft}>
            <FontAwesome5Icon
              style={styles.icons}
              name="font-awesome-flag"
              size={30}
            />
          </TouchableOpacity>
          <Text>{status}</Text>
          <TouchableOpacity 
            onPress={status === 1 ? startCounter : stopCounter}
            style={styles.actionRight}
            >
            <FontAwesome5Icon style={styles.icons} name={status === 1 ? 'play' : 'stop'} size={30} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  lapStop:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d8d8d8',
  },
  lapStopId:{
    fontSize: 20,
    fontWeight: "bold",
    width: 50,
    paddingHorizontal: 15
  },
  itemLap: {
    width: '100%',
    textAlign: 'left',
    paddingLeft: 20
  },
  actionLeft: {
    width: 120,
    height: 70,
    backgroundColor: '#cedf39',
    color: '#fff',
    borderTopRightRadius: 20,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{translateY: '0'}],
  },
  actionRight: {
    width: 120,
    height: 70,
    paddingLeft: 10,
    backgroundColor: '#414141',
    color: '#fff',
    borderTopLeftRadius: 20,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{translateY: '0'}],
  },
  icons: {
    color: '#fff',
  },
  stopWatchWrap: {
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'space-between',
  },
  watchAndList: {
    flex: 1,
  },
  watch: {},
  listLap: {
    paddingHorizontal: 15
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  h1: {
    fontSize: 24,
    color: '#666',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  counter: {
    paddingVertical: 30,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  minutes: {
    fontSize: 40,
    color: '#999',
    paddingHorizontal: 5,
    paddingBottom: 8,
  },
  seconds: {
    fontSize: 70,
    color: '#00bbe1',
    paddingHorizontal: 5,
  },
  milliseconds: {
    fontSize: 24,
    color: '#00bbe1',
    paddingHorizontal: 5,
    paddingBottom: 11,
  },
});

export default StopWatchScreen;
