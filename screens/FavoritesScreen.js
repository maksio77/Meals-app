import { StyleSheet, View, Text } from 'react-native';
import MealsList from "../components/MealsList/MealsList";
//import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from 'react-redux';

export default function FavoritesScreen() {
      //const favoriteMealsCtx = useContext(FavoritesContext);
      const favoritesMealsIds = useSelector(state => state.favoriteMeals.ids);

      const favoriteMeals = MEALS.filter(meal => favoritesMealsIds.includes(meal.id));

      if (favoriteMeals.length === 0) {
            return <View style={styles.root}>
                  <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
      }

      return <MealsList items={favoriteMeals}/>
}

const styles = StyleSheet.create({
      root: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      },
      text: {
            fontSize: 18, 
            fontWeight: 'bold',
            color: 'white',
      },
});