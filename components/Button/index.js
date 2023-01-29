import { Pressable, View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constant/color';

const Button = ({ buttonText, viewStyle, textStyle, onClickFunc }) => {
    return (
        <Pressable style={viewStyle} onPress={onClickFunc} android_ripple={GlobalStyles.colors.accent500}>
            <View style={styles.defaultViewStyle}>
                <Text style={[styles.defaultTextStyle, textStyle]}>{buttonText}</Text>
            </View>
        </Pressable>
    )
}

export default Button;

const styles = StyleSheet.create({
    defaultViewStyle: {
        flex: 1,
    },
    defaultTextStyle: {
        fontSize: 12.5,
        color: GlobalStyles.colors.white
    }
})