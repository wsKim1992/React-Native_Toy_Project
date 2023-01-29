import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
} from "react-native";
import { observer } from "mobx-react-lite";
import { GlobalStyles } from "../constant/color";
import { useForm, Controller, FormProvider } from "react-hook-form";

import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import ResetButton from "../components/ResetButton";
import { variables } from '../constant/variables'

const ImageCropPage = ({ route }) => {
    const { pictureData } = route.params;
    const { uploadFormRules: { titleRule, priceRule } } = variables;
    const [title, setTitle] = React.useState("");
    const methods = useForm({
        defaultValues: {
            title: 'my picture',
            price: "0",
            date: Date.now()
        }
    });
    const { watch } = methods;
    watch();
    return (
        <View style={styles.container}>
            <View style={styles.backgroundStyle}>
                <View style={styles.titleTextBox}>
                    <Text style={styles.titleText}>
                        이미지의 정보를 입력해 주세요
                    </Text>
                </View>
                <View style={styles.formBox}>
                    <FormProvider {...methods}>
                        <Input
                            name="title"
                            defaultValue=""
                            labelText="사진 이름"
                            placeholderText="사진 이름을 입력 해주세요"
                            rules={{ ...titleRule }}
                        />
                        <Input
                            name="price"
                            defaultValue=""
                            labelText="사진 가격"
                            placeholderText="사진의 가격을 입력해 주세요"
                            rules={{ ...priceRule }}
                            keyboardType={"numeric"}
                        />
                        <View style={styles.buttonBox}>
                            <SubmitButton />
                            <ResetButton />
                        </View>
                    </FormProvider>
                </View>
            </View>
        </View>
    );
};

export default ImageCropPage;

const styles = StyleSheet.create({
    container: { flex: 1 },
    backgroundStyle: {
        flex: 1,
        opacity: 1,
        backgroundColor: GlobalStyles.colors.white,
    },
    buttonBox: {
        alignSelf: "stretch",
        height: 45.5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    formBox: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingHorizontal: 35.5,
    },
    imageFrameStyle: {
        flex: 1,
        height: 330,
        alignItems: "center",
        justifyContent: "center",
    },
    imageStyle: {
        flex: 1,
        height: "100%",
    },
    titleTextBox: {
        alignSelf: "stretch",
        height: 120.5,
        backgroundColor: GlobalStyles.colors.accent500,
        opacity: 0.75,
        alignItems: "center",
        justifyContent: "center",
    },
    titleText: {
        fontSize: 35.5,
        color: GlobalStyles.colors.white,
    },
});
