import React, {useEffect, useState} from 'react';
import { Dimensions, View, Text, StyleSheet, Modal, TouchableOpacity, TouchableHighlight, Image, SafeAreaView, StatusBar, FlatList} from 'react-native';
import { formatDistanceToNow, parseISO} from 'date-fns'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as PusherConst from '../Components/RpsComponents/Config';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';


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
  const [modalVisible, setModalVisible] = useState(false);
  const [h, setH] = React.useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [pageApi, setPageApi] = useState(2);
  

  const headerFlatList = () =>{ 
    
    const screenWidth = Dimensions.get("window").width;
    const firstImg = 'https://static01.nyt.com/images/2020/09/18/us/politics/00young-biden/00young-biden-threeByTwoLargeAt2X.jpg?quality=75&auto=webp&disable=upscale&width=600';
    Image.getSize(firstImg,(width, height) => {
          const wFirstImg = width;
          const hFirstImg = height;
          const heightImage = (screenWidth / wFirstImg) * hFirstImg;
          setH(heightImage);
      }
    ); 
    // const heightImage = (screenWidth / wFirstImg) * hFirstImg;

    return <View style={styles.article}>
      <TouchableOpacity 
        // onPress={() => {
        //   setModalVisible(true);
        // }}
        style={styles.firstArticle}>
          <Image 
            style={[styles.ImgFirstArtilce, {height: h}]} 
            source={{uri: firstImg}} />
          <View style={styles.articleInfo}>
            <Text style={styles.articleTitle} multiline={true}>The Greats: Sigourney Weaver Goes Her Own Way</Text>
            <Text style={styles.article} multiline={true}>4 hours ago</Text>
          </View>
        </TouchableOpacity>
    </View>
  }
  

  useEffect( () => {
    try{
      const fetchData = async () => {
        setIsLoading(true);
        const url =  `https://newsapi.org/v2/top-headlines?sources=bbc-news,cbc-news,nbc-news,fox-news,mtv-news=&page=1&pageSize=10&apiKey=cda1d088cd3446ccbc8ef461840972b6&page=${pageApi}`;
        const response = await fetch(url);
        const jsonData = await response.json();
        // setPageApi = (() => pageApi + 1);
        setData(jsonData.articles);
        // console.log(jsonData.articles);
        setIsLoading(false);
      };
      fetchData();
    } catch (err){
      setErrorMessage(err.message);
    }
    
  }, []);
  

  const renderItem = ({item}) => (
    <View key={item.title} style={styles.article}>
      <TouchableOpacity 
        // onPress={() => {
        //   setModalVisible(true);
        // }}
        style={styles.articleTouch}>
          {item.urlToImage 
          ? <Image 
            style={styles.Img} 
            source={{uri: item.urlToImage,}} />
          : null}
          
          <View style={styles.articleInfo}>
            
            <Text style={styles.articleTitle} multiline={true}>{item.title}</Text>
            {/* <Text style={styles.article} multiline={true}>{formatDistanceToNow(new Date(parseISO(item.publishedAt)))} ago</Text> */}
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
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                // ListHeaderComponent={headerFlatList}
                ListFooterComponent ={isLoading ? <Text>Loading...</Text> : null}
              />
        </View>
        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <SafeAreaView>
            <View style={styles.fullView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>

                <TouchableHighlight
                  style={styles.closeButton}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  {/* <FontAwesome5Icon name="times" size={30}/> */}
                  <Text style={styles.textStyle}>X</Text>
                </TouchableHighlight>
              </View>
            </View>
          </SafeAreaView>
           </Modal>
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
  firstArticle: {
    width: '100%',
  },
  articleTouch: {
    width: '100%',
    flexDirection: 'row',
  },
  ImgFirstArtilce: {
    width: '100%',
    marginBottom: 10,
    borderRadius: 5
  },
  Img: {
    width: '40%',
    height: 120,
    marginRight: 15,
    borderRadius: 5,
    backgroundColor: '#dadada'
  },
  articleInfo: {
    textAlign: 'left',
    flexShrink: 1,
    width: '100%'
  },
  articleTitle: {
    width: '100%',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  articleDate: {
    fontSize: 16,
    textAlign: 'left'
  },
  fixedHeader: {
    width: '100%',
    padding: 15,
    backgroundColor: "red"
  },
  articleWrap: {
    padding: 15,
    flex: 1
  },
  fullView: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    width: '100%',
    height: '100%',
    padding: 15
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 0
  }
});

export default ArticleScreen;
