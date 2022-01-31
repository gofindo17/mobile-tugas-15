import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <View>
                    <Button title='View Data' onPress={()=>this.props.navigation.push('View')}/>
                </View>
                <View>
                    <Button title='Insert Data' onPress={()=> this.props.navigation.push('Insert')} />
                </View>
            </View>
         );
    }
}
 
export default HomeScreen;