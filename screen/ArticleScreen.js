import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity,Image, SafeAreaView, StatusBar, FlatList} from 'react-native';
import { formatDistanceToNow, parseISO} from 'date-fns'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as PusherConst from '../Components/RpsComponents/Config';


const ArticleScreen = ({ navigation }) => {
  const articles = [
    {id: '1', title: 'Biden’s Non-Radical 1960s', lead: 'President Trump has called Joe Biden a tool of leftist agitators. Friends say that has never much been his way, even as a young man surrounded by protest.', imgLink: 'https://static01.nyt.com/images/2020/09/18/us/politics/00young-biden/00young-biden-threeByTwoLargeAt2X.jpg?quality=75&auto=webp&disable=upscale&width=600', publicDate:'2020-06-18'},
    {id: '2', title: 'Election Updates: Biden Campaign Cautions Against Complacency', lead: 'President Trump has called Joe Biden a tool of leftist agitators. Friends say that has never much been his way, even as a young man surrounded by protest.', imgLink: 'https://static01.nyt.com/images/2020/09/18/us/politics/00young-biden/00young-biden-threeByTwoLargeAt2X.jpg?quality=75&auto=webp&disable=upscale&width=600', publicDate:'2020-06-18'},
    {id: '3', title: "White Supremacy’ Once Meant the Klan. Now It Refers to Much More.", lead: 'President Trump has called Joe Biden a tool of leftist agitators. Friends say that has never much been his way, even as a young man surrounded by protest.', imgLink: 'https://static01.nyt.com/images/2020/09/18/us/politics/00young-biden/00young-biden-threeByTwoLargeAt2X.jpg?quality=75&auto=webp&disable=upscale&width=600', publicDate:'2020-06-18'},
    {id: '4', title: 'The Weekender', lead: 'President Trump has called Joe Biden a tool of leftist agitators. Friends say that has never much been his way, even as a young man surrounded by protest.', imgLink: 'https://static01.nyt.com/images/2020/09/18/us/politics/00young-biden/00young-biden-threeByTwoLargeAt2X.jpg?quality=75&auto=webp&disable=upscale&width=600', publicDate:'2020-06-18'},
    {id: '5', title: 'The Women Behind the Million Man March', lead: 'President Trump has called Joe Biden a tool of leftist agitators. Friends say that has never much been his way, even as a young man surrounded by protest.', imgLink: 'https://static01.nyt.com/images/2020/09/18/us/politics/00young-biden/00young-biden-threeByTwoLargeAt2X.jpg?quality=75&auto=webp&disable=upscale&width=600', publicDate:'2020-06-18'},
    {id: '6', title: 'Just Call It the Trump Swamp', lead: 'President Trump has called Joe Biden a tool of leftist agitators. Friends say that has never much been his way, even as a young man surrounded by protest.', imgLink: 'https://static01.nyt.com/images/2020/09/18/us/politics/00young-biden/00young-biden-threeByTwoLargeAt2X.jpg?quality=75&auto=webp&disable=upscale&width=600', publicDate:'2020-06-18'},
    {id: '7', title: 'Building a Personal Smell Museum of Los Angeles', lead: 'President Trump has called Joe Biden a tool of leftist agitators. Friends say that has never much been his way, even as a young man surrounded by protest.', imgLink: 'https://static01.nyt.com/images/2020/09/18/us/politics/00young-biden/00young-biden-threeByTwoLargeAt2X.jpg?quality=75&auto=webp&disable=upscale&width=600', publicDate:'2020-06-18'},
    {id: '8', title: 'Armenia and Azerbaijan Reach New Cease-Fire Agreement', lead: 'President Trump has called Joe Biden a tool of leftist agitators. Friends say that has never much been his way, even as a young man surrounded by protest.', imgLink: 'https://static01.nyt.com/images/2020/09/18/us/politics/00young-biden/00young-biden-threeByTwoLargeAt2X.jpg?quality=75&auto=webp&disable=upscale&width=600', publicDate:'2020-06-18'},
    {id: '9', title: 'Nick Saban Cleared to Coach Alabama, Days After Testing Positive for Virus', lead: 'President Trump has called Joe Biden a tool of leftist agitators. Friends say that has never much been his way, even as a young man surrounded by protest.', imgLink: 'https://static01.nyt.com/images/2020/09/18/us/politics/00young-biden/00young-biden-threeByTwoLargeAt2X.jpg?quality=75&auto=webp&disable=upscale&width=600', publicDate:'2020-06-18'},
    {id: '10', title: 'At Least 3 Injured in Explosion at Virginia Strip Mall', lead: 'President Trump has called Joe Biden a tool of leftist agitators. Friends say that has never much been his way, even as a young man surrounded by protest.', imgLink: 'https://static01.nyt.com/images/2020/09/18/us/politics/00young-biden/00young-biden-threeByTwoLargeAt2X.jpg?quality=75&auto=webp&disable=upscale&width=600', publicDate:'2020-06-18'},
    {id: '11', title: 'Suspect Stalked French School Before Beheading Teacher, Officials Say', lead: 'President Trump has called Joe Biden a tool of leftist agitators. Friends say that has never much been his way, even as a young man surrounded by protest.', imgLink: 'https://static01.nyt.com/images/2020/09/18/us/politics/00young-biden/00young-biden-threeByTwoLargeAt2X.jpg?quality=75&auto=webp&disable=upscale&width=600', publicDate:'2020-06-18'},
    {id: '12', title: 'Man Sentenced to Life Over Theft of Hedge Clippers Is Granted Parole', lead: 'President Trump has called Joe Biden a tool of leftist agitators. Friends say that has never much been his way, even as a young man surrounded by protest.', imgLink: 'https://static01.nyt.com/images/2020/09/18/us/politics/00young-biden/00young-biden-threeByTwoLargeAt2X.jpg?quality=75&auto=webp&disable=upscale&width=600', publicDate:'2020-06-18'},
  ];
  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.article}>
      <TouchableOpacity style={styles.articleTouch}>
          <Image 
            style={styles.Img} 
            source={{uri: item.imgLink,}} />
          <View style={styles.articleInfo}>
            <Text style={styles.articleTitle} multiline={true}>{item.title}</Text>
            <Text style={styles.article} multiline={true}>{formatDistanceToNow(new Date(parseISO(item.publicDate)))} ago</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{flex: 1, backgroundColor: PusherConst.white}}>
        <View style={styles.articleWrap}>
          <Text style={styles.h1}>nytimes</Text> 
          <FlatList
                data={articles}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
          
        </View>
      </SafeAreaView>
    </>
    
  )
};

const styles = StyleSheet.create({
  articles:{
    padding: 15,
    backgroundColor: PusherConst.white,
  },
  h1: {
     fontSize: 30,
     color: PusherConst.BrandColor,
     textTransform: "uppercase",
     marginBottom: 20,
     fontWeight: "bold"
  },
  article: {
    marginBottom: 15,
    width: '100%',
  },
  articleTouch: {
    width: '100%',
    flexDirection: 'row',
  },
  Img: {
    width: '40%',
    height: 120,
    marginRight: 15,
    borderRadius: 5
  },
  articleInfo: {
    textAlign: 'left',
    alignItems: 'center'
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  fixedHeader: {
    width: '100%',
    padding: 15,
    backgroundColor: "red"
  },
  articleWrap: {
    padding: 15,
    flex: 1
  }
});

export default ArticleScreen;
