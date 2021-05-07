import React from "react";
import {StyleSheet, Text, Button, View} from "react-native";
import {AppCard} from "../components/AppCard";

export const TodoScreen =({goBack, todo, onRemove})=>{
    return (
        <View>
            <AppCard style={styles.card}>
            <Text style={styles.title}>{todo.title}</Text>
            <Button title="Редач" />
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="Назад" color="#757575" onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button
                    title="Удалить"
                    color="#e53935"
                    onPress={() => onRemove(todo.id)}
                    />
                </View>
            </View>
        </View>
        
    );
};
 const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    card: {
        marginBottom: 20,
        padding:15
    },
    button: {
        width: "40%"
    },
    title:{
        fontSize:20
    }
 });