import { Pressable, StyleSheet, Text } from "react-native";

interface IGoalItem {
    goal: string;
    handlePress(): void;
}

export const GoalItem = ({ goal, handlePress }: IGoalItem) => (
    <Pressable
        android_ripple={{
            color: '#acc'
        }}
        // For Iphone
        style={({ pressed }) => pressed ? {
            ...styles.goalItem,
            color: '#acc'
        }: styles.goalItem}
        onPress={handlePress}>
        <Text style={{
            padding: 8
        }}>{goal}</Text>
    </Pressable>
)

const styles = StyleSheet.create({
    goalItem: {
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#ccc',
    }
});
