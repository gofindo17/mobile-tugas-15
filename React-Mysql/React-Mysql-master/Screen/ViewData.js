import React, { Component } from 'react'
import { View, Text, FlatList, Image } from 'react-native'

const url = 'http://192.168.1.11/backendApp/getFilm.php'
class ViewData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataapi: []
        }
    }

    componentDidMount() {
        this.getData(url).then(data =>{
            this.setState({dataapi: data})
        })
    }

    getData = async () => {
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
    render() { 
        return ( 
            <View style={{flex:1}}>
                <FlatList 
                    data = {this.state.dataapi}
                    renderItem={({item,index}) => (
                        <View style={{
                            backgroundColor: '#212121',
                            marginTop: 10,
                            marginHorizontal: 10,
                            padding: 20,
                            borderRadius: 5
                        }}>
                            <Image source={{uri: ''}} />
                            <Text style={{color: 'white'}}>{item.id_film}</Text>
                            <Text style={{color: 'white'}}>{item.judul}</Text>
                            <Text style={{color: 'white'}}>{item.deskripsi}</Text>
                        </View>
                    )}
                />
            </View>
         );
    }
}
 
export default ViewData;