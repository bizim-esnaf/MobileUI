import { StyleSheet, View, FlatList, Text, Image } from "react-native"
import { ResultInventory, stockStatus } from "../types/inventory/inventory"

interface ProductListProps {
  item: ResultInventory
}

export default function InventoryItem({ item }: ProductListProps) {
  // Create a merged product data with stock information
  const productsWithStock = item.product.map((product) => {
    const stockInfo = item.stock.find((s) => s.productId === product.id)
    const lastAction = item.actions
      .filter((a) => a.productId === product.id)
      .sort((a, b) => b.date.getTime() - a.date.getTime())[0]

    const daysSinceLastAction = lastAction
      ? Math.floor((new Date().getTime() - lastAction.date.getTime()) / (1000 * 60 * 60 * 24))
      : 0

    return {
      ...product,
      stockQuantity: stockInfo?.quantity || 0,
      stockStatus: stockInfo?.status || stockStatus.outOfStock,
      lastUpdated:
        daysSinceLastAction === 0
          ? "Today"
          : daysSinceLastAction === 1
            ? "Yesterday"
            : `${daysSinceLastAction} days ago`,
    }
  })

  const renderItem = ({ item }: { item: typeof productsWithStock[0] }) => {
    const mainImage =
      item.images && item.images.length > 0
        ? { uri: item.images[0].url }
        : require("../assets/authentication/interview.png");
  
    const formattedPrice = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: item.price.currency,
      minimumFractionDigits: 2,
    }).format(item.price.price);
  
    const isInStock = item.stockStatus === stockStatus.inStock || item.stockStatus === stockStatus.limitedStock;
  
    return (
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={mainImage} style={styles.image} defaultSource={require("../assets/authentication/interview.png")} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={[styles.stockText, isInStock ? styles.inStock : styles.outOfStock]}>
            {item.stockQuantity > 0 ? `${item.stockQuantity} in stock` : item.stockStatus}
          </Text>
          <Text style={styles.updatedText}>Last updated: {item.lastUpdated}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{formattedPrice}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={productsWithStock}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",

},
  listContent: {
    padding: 2,
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    width: "93%",
    marginBottom: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  imageContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  stockText: {
    fontSize: 14,
    marginBottom: 2,
  },
  inStock: {
    color: "green",
  },
  outOfStock: {
    color: "red",
  },
  updatedText: {
    fontSize: 12,
    color: "#888",
  },
  priceContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingLeft: 8,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
})
