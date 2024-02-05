import React from "react";
import { StyleSheet , View, Text} from "react-native";

const MusicList = () => {
    return(
        <View style={styles.container}>
            <Text>Music List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});

export default MusicList;