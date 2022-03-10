import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Picker,
  TouchableOpacity,
} from 'react-native';
import FlipCard from 'react-native-flip-card';
import DropDownMenu from './components/dropDown';
import {Data} from './data';
import {Button, Menu, Divider, Provider} from 'react-native-paper';

import DropDownPicker from 'react-native-dropdown-picker';

const Home = () => {
  const [page, setPage] = useState(0);
  const [pagePath, setPagePath] = useState('page1');
  const [counter, setCounter] = useState(0);
  const [onflipend, setOnFlipEnd] = React.useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Page 1', value: 'page1'},
    {label: 'Page 2', value: 'page2'},
    {label: 'Page 3', value: 'page3'},
    {label: 'Page 4', value: 'page4'},
    {label: 'Page 5', value: 'page5'},
    {label: 'Page 6', value: 'page6'},
    {label: 'Page 7', value: 'page7'},
    {label: 'Page 8', value: 'page8'},
    {label: 'Page 9', value: 'page9'},
    {label: 'Page 10', value: 'page10'},
    {label: 'Page 11', value: 'page11'},
    {label: 'Page 12', value: 'page12'},
    {label: 'Page 13', value: 'page13'},
    {label: 'Page 14', value: 'page14'},
    {label: 'Page 15', value: 'page15'},
    {label: 'Page 16', value: 'page16'},
    {label: 'Page 17', value: 'page17'},
    {label: 'Page 18', value: 'page18'},
    {label: 'Page 19', value: 'page19'},
    {label: 'Page 20', value: 'page20'},
    {label: 'Page 21', value: 'page21'},
    {label: 'Page 22', value: 'page22'},
    {label: 'Page 23', value: 'page23'},
    {label: 'Page 24', value: 'page24'},
    {label: 'Page 25', value: 'page25'},
    {label: 'Page 26', value: 'page26'},
    {label: 'Page 27', value: 'page27'},
    {label: 'Page 28', value: 'page28'},
    {label: 'Page 29', value: 'page29'},
    {label: 'Page 30', value: 'page30'},
    {label: 'Page 31', value: 'page31'},
    {label: 'Page 32', value: 'page32'},
    {label: 'Page 33', value: 'page33'},
    {label: 'Page 34', value: 'page34'},
    {label: 'Page 35', value: 'page35'},
    {label: 'Page 36', value: 'page36'},
    {label: 'Page 37', value: 'page37'},
    {label: 'Page 38', value: 'page38'},
    {label: 'Page 39', value: 'page39'},
    {label: 'Page 40', value: 'page40'},
  ]);

  const [visible, setVisible] = React.useState(false);
  const [totalWords, setTotalWords] = React.useState(0);

  function shuffle(array1, array2) {
    let currentIndex = array1.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array1[currentIndex], array1[randomIndex]] = [
        array1[randomIndex],
        array1[currentIndex],
      ];
      [array2[currentIndex], array2[randomIndex]] = [
        array2[randomIndex],
        array2[currentIndex],
      ];
    }

    return array1, array2;
  }

  function findWordCount() {
    sum = 0;
    console.log(items.length);
    for (i = 0; i < items.length; i++) {
      path = 'page' + (i + 1).toString();
      sum += Data[path].words.length;
    }
    setTotalWords(sum);
  }

  useEffect(() => {
    findWordCount();
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            findWordCount();
          }}>
          <Text style={{fontSize: 30, color: '#FFFFFF', fontWeight: 'bold'}}>
            Count: <Text style={{color: '#DC143C'}}>{totalWords}</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flipCard}>
        <FlipCard
          style={styles.card}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={true}
          flip={onflipend}
          clickable={true}
          onFlipEnd={onflipend => {
            console.log('isFlipEnd', onflipend);
          }}>
          {/* Face Side */}
          <View style={styles.face}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFFFFF'}}>
              {Data[pagePath].words[counter]}
            </Text>
          </View>
          {/* Back Side */}
          <View style={styles.back}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#90EE90'}}>
              {Data[pagePath].meanings[counter]}
            </Text>
          </View>
        </FlipCard>
      </View>
      <View style={{backgroundColor: '#FFFFFF', borderRadius: 20}}>
        <Button
          mode="outlined"
          onPress={() => {
            console.log(Data[pagePath].words[counter]);
            console.log(Data[pagePath].meanings[counter]);
            setOnFlipEnd(false);
            if (counter < Data[pagePath].words.length - 1) {
              setCounter(counter + 1);
            } else {
              setCounter(0);
              alert('Page over');
            }
            // console.log(Data[pagePath][0]);
          }}>
          <Text style={{fontWeight: 'bold'}}> Next </Text>
        </Button>
      </View>
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={{flex: 1, padding: 30}}>
          <View
            style={{
              margin: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFFFFF'}}>
              {pagePath}
            </Text>
          </View>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setPagePath}
            setItems={setItems}
            // onPress={() => {
            //   shuffle(Data[pagePath].words, Data[pagePath].meanings);
            // }}
            onSelectItem={item => {
              shuffle(Data[pagePath].words, Data[pagePath].meanings);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#4d217a',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // 26b67b
  },
  flipCard: {
    // flex: 2,
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 1.2,
    backgroundColor: '#26b67b',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    marginTop: 50,
    borderRadius: 30,
    padding: 10,
  },
  face: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
