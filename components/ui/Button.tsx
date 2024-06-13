import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface IButton {
    handlePress(): void;
    title: string;
};

export const Button = ({handlePress, title }: IButton) => (
    <TouchableOpacity
        style={[style.btn]}
        onPress={handlePress}>
        <Text style={{ color: '#fff' }}> {title}</Text>
    </TouchableOpacity>
)

const style = StyleSheet.create({
    btn: {
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        paddingHorizontal: 5,
        height: 40
    }
})