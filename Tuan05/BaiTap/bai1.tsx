import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          source={{
            uri: "https://cdn.tgdd.vn/Products/Images/42/227541/oppo-f17-044820-024810-600x600.jpg",
          }}
          style={styles.productImage}
        />
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.productTitle}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>

        <View style={styles.ratingRow}>
          <Text style={styles.star}>★★★★★</Text>
          <Text style={styles.review}>(Xem 828 đánh giá)</Text>
        </View>

        <Text style={styles.price}>1.790.000 đ</Text>
        <Text style={styles.oldPrice}>1.790.000 đ</Text>

        <Text style={styles.promo}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>

        <Pressable style={styles.colorBtn}>
          <Text style={styles.colorText}>4 MÀU - CHỌN MÀU</Text>
          <Text style={styles.arrow}>›</Text>
        </Pressable>
      </View>
      <View style={styles.footerBox}>
        <Pressable style={styles.buyBtn}>
          <Text style={styles.buyText}>CHỌN MUA</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  imageBox: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  productImage: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  infoBox: {
    flex: 3,
    padding: 15,
    backgroundColor: "white",
    marginTop: 8,
  },
  productTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  star: {
    color: "gold",
    fontSize: 16,
    marginRight: 5,
  },
  review: {
    fontSize: 13,
    color: "#555",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
    marginTop: 5,
  },
  oldPrice: {
    fontSize: 13,
    color: "#999",
    textDecorationLine: "line-through",
    marginBottom: 10,
  },
  promo: {
    color: "red",
    fontSize: 13,
    marginVertical: 10,
  },
  colorBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginTop: 5,
    alignItems: "center",
  },
  colorText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  arrow: {
    fontSize: 18,
  },
  footerBox: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginTop: 8,
  },
  buyBtn: {
    backgroundColor: "red",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 4,
  },
  buyText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
