import { StyleSheet } from 'react-native';
import Button from '../Button';
import { useFormContext } from 'react-hook-form';
import { GlobalStyles } from '../../constant/color';

const SubmitButton = () => {
    const { handleSubmit, formState: { errors } } = useFormContext();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <Button viewStyle={styles.viewStyle}
            textStyle={styles.textStyle}
            buttonText={'이미지 업로드'}
            onClickFunc={handleSubmit(onSubmit)}
        />
    )
};

export default SubmitButton;

const styles = StyleSheet.create({
    viewStyle: {
        height: 40.5,
        borderRadius: 15.5,
        width: "45%",
        backgroundColor: GlobalStyles.colors.accent500,
    },
    textStyle: {
        fontSize: 12.5,
        color: GlobalStyles.colors.white,
        textAlign: "center",
        lineHeight: 40.5,
    }
})
