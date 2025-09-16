import React from "react";
import { View, Text, Image, TextInput, Pressable, StyleSheet } from "react-native";

export default function CheckoutScreen() {
  return (
    <View style={styles.container}>
      {/* Sản phẩm */}
      <View style={styles.productRow}>
        <Image
          source={{ uri: "https://salt.tikicdn.com/cache/280x280/ts/product/57/61/7d/8c09b7f31a21c64cf01fb9b31c764820.jpg" }}
          style={styles.productImage}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text numberOfLines={2} style={styles.productTitle}>
            Nguyên hàm tích phân và ứng dụng
          </Text>
          <Text style={styles.provider}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.price}>141.800 đ</Text>
          <Text style={styles.oldPrice}>141.800 đ</Text>
          <View style={styles.qtyRow}>
            <Pressable style={styles.qtyBtn}><Text>-</Text></Pressable>
            <Text style={styles.qtyText}>1</Text>
            <Pressable style={styles.qtyBtn}><Text>+</Text></Pressable>
            <Text style={styles.buyLater}>Mua sau</Text>
          </View>
        </View>
      </View>

      {/* Mã giảm giá */}
      <View style={styles.discountRow}>
        <TextInput placeholder="Mã giảm giá" style={styles.discountInput} />
        <Pressable style={styles.applyBtn}>
          <Text style={styles.applyText}>Áp dụng</Text>
        </Pressable>
      </View>

      {/* Phiếu quà tặng */}
      <View style={styles.giftRow}>
        <Text style={{ fontSize: 13 }}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
        <Text style={{ fontSize: 13, color: "blue" }}>Nhập tại đây?</Text>
      </View>

      {/* Tạm tính */}
      <View style={styles.subtotalRow}>
        <Text style={styles.subtotalLabel}>Tạm tính</Text>
        <Text style={styles.subtotalPrice}>141.800 đ</Text>
      </View>

      {/* Thành tiền */}
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Thành tiền</Text>
        <Text style={styles.totalPrice}>141.800 đ</Text>
      </View>

      {/* Nút đặt hàng */}
      <Pressable style={styles.orderBtn}>
        <Text style={styles.orderText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  productRow: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
  },
  productImage: {
    width: 80,
    height: 100,
    resizeMode: "cover",
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  provider: {
    fontSize: 12,
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
  oldPrice: {
    fontSize: 12,
    color: "#999",
    textDecorationLine: "line-through",
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  qtyBtn: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyText: {
    marginHorizontal: 8,
  },
  buyLater: {
    marginLeft: 15,
    color: "blue",
    fontSize: 13,
  },
  discountRow: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
  discountInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    height: 40,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  applyBtn: {
    backgroundColor: "#0d47a1",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  applyText: {
    color: "white",
    fontWeight: "bold",
  },
  giftRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
  },
  subtotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
  },
  subtotalLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
  subtotalPrice: {
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 10,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
  },
  orderBtn: {
    backgroundColor: "red",
    padding: 15,
    marginTop: 15,
    alignItems: "center",
  },
  orderText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
  