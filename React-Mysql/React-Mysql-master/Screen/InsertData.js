import React, { Component } from 'react';
import { View,Text, TextInput, Button } from 'react-native';

const url = 'http://192.168.1.11/backendApp/insertFilm.php'

class InsertData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            judul: '',
            gambar: '',
            deskripsi: ''
        }
    }
    
    sendData = () => {
        fetch(url,{
            method: 'POST',
            headers: {
                Accept: 'applicaton/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                judul: this.state.udul,
                deskripsi: this.state.deskripsi
            })
        })
        .then((response) => response.JSON)
        .then((json)=> alert(json))
        .catch((error)=> console.log(error))
    } 
    
    render() {
        return ( 
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> Insert Data</Text>
                <TextInput placeholder='ID FILM' onChangeText={(val)=>this.setState({id:val})}/>
                <TextInput placeholder='JUDUL' onChangeText={(val)=>this.setState({judul:val})}/>
                <TextInput placeholder='Deskripsi' onChangeText={(val)=>this.setState({deskripsi:val})} />
                <Button title='Submit' onPress={()=> this.sendData()}/>
            </View>
         );
    }  
}
 
export default InsertData;