import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, CheckBox } from 'react-native';

const dataSource = [
  {key: 'Project Laravel'},
  {key: 'Project React Native'},
  {key: 'Project iOS'},
];
export default class FlatListBasics extends Component {
  constructor(props){
    super(props);
 
    this.state = {
      checked: true,
    }
 }
  render() {
    return (
      <View>
        <View>
          <Text style={styles.header}>Todo</Text>
          <FlatList
            data={dataSource}
            renderItem={
              ({item}) =>
              <View style={styles.todoItemContainer}>
                <Text style={styles.item}>{item.key}</Text>
                <CheckBox
                  title='Click Here'
                  checked={this.state.checked}
                />
              </View>
            }
          />
        </View>
        <View style={{marginTop: 40}}>
          <Text style={styles.header}>Done tasks</Text>
          <FlatList
            data={dataSource}
            renderItem={
              ({item}) =>
              <View style={styles.doneItemContainer}>
                <Text style={styles.item}>{item.key}</Text>
              </View>
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    textAlign: 'center',
  },
  todoItemContainer: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'space-between',
   backgroundColor: 'darkorange',
   borderBottomWidth: 1,
   borderBottomColor: 'grey',
  },
  doneItemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'darkgreen',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
   },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);