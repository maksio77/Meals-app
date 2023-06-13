import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

export default function MealsList({ items }) {
      function reanderMealItem(itemData) {
            const item = itemData.item;

            const mealItemProps = {
                  id: item.id,
                  title: item.title,
                  imageUrl: item.imageUrl,
                  affordability: item.affordability,
                  complexity: item.complexity,
                  duration: item.duration,
            }
            return <MealItem {...mealItemProps}/>
      }

      return(
            <View style={styles.container}>
                  <FlatList 
                        data={items} 
                        keyExtractor={item => item.id} 
                        renderItem={reanderMealItem}
                  />
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            padding: 16,
      },
});