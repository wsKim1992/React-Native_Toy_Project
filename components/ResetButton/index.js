import { StyleSheet } from "react-native";
import Button from "../Button";
import { useFormContext } from "react-hook-form";
import { variables } from '../../constant/variables';
import { GlobalStyles } from "../../constant/color";

const ResetButton = () => {
    const { reset, defaultValues } = useFormContext();
    const resetFunc = () => {
        reset({ ...defaultValues }, {
            keepErrors: false,
            keepDirty: false,
            keepDefaultValues: false
        })
    }
    return (
        <Button
            viewStyle={styles.viewStyle}
            textStyle={styles.textStyle}
            buttonText="리셋"
            onClickFunc={resetFunc}
        />
    )
}

export default ResetButton;

const styles = StyleSheet.create({
    viewStyle: {
        height: 40.5,
        borderRadius: 15.5,
        width: "45%",
        backgroundColor: GlobalStyles.colors.primary100,
    },
    textStyle: {
        fontSize: 12.5,
        color: GlobalStyles.colors.white,
        textAlign: "center",
        lineHeight: 40.5,
    }
})
