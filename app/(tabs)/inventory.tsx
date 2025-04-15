import {
  StyleSheet,
  Text,
    TouchableOpacity,
    View,
} from 'react-native';
import InventoryItem from '../../components/inventory-item';
import { resultInventory } from '../../types/inventory/inventory';
import { Ionicons } from '@expo/vector-icons';



const Inventory = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}></View>
          <Text style={styles.headerTitle}>Envanter</Text>
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.searchIconContainer}>
                <Ionicons name="search-outline" size={24} color="#000" />
              </TouchableOpacity>
            </View>
        </View>
        <View>
          <InventoryItem item={resultInventory} />
          <InventoryItem item={resultInventory} />
          <InventoryItem item={resultInventory} />
          <InventoryItem item={resultInventory} />
          <InventoryItem item={resultInventory} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    gap: 24
  },
  header: {
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerLeft: {
    width: 40,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerRight: {
    width: 40,
    alignItems: "flex-end",
  },
  searchIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
})

export default Inventory;