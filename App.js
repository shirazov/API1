import { StatusBar } from 'expo-status-bar';
import React,{useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
const[recname,setInputRecName] = useState('Recipes');
const[inst,setInputInst] = useState('Recipes');

const getRecipes = async () => {
    const req = await fetch("https://api.spoonacular.com/recipes/random?number=1&apiKey=056d68f8de9f444fb7d529fe513fd63e");
    const res = await req.json();
    console.log(res);
    const regex = /(<([^>]+)>)/ig;
    const result = res.recipes[0].instructions.replace(regex, '');
    setInputInst(result);
    
    }

return (
<View style={styles.container}>
<View style={styles.NavBar}>
<Text style={styles.rec}>{recname}</Text>
</View>
<TouchableOpacity style={styles.btn} onPress={() => getRecipes()}>
<Text style={styles.txt}>Find recipes</Text>
</TouchableOpacity>
<Text>{inst}</Text>
<StatusBar style="auto" />
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems:'center'
},
rec: {color: '#fff', 
    fontSize:25,
    marginTop: 5,
    borderRadius:10,
    },
btn: {
width: '98%',
position: 'absolute',
bottom:14,
height:40,
backgroundColor:'#42a55f',
justifyContent: 'center',
alignItems: 'center',
borderRadius: 10
},
txt: {
color: '#fff',
fontSize:20
},
NavBar: {
width:'100%',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#42a77f',
paddingBottom: 10,
borderBottomLeftRadius: 20,
borderBottomRightRadius: 20
},
});