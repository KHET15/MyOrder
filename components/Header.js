import React from 'react'; // นำเข้า React เพื่อใช้ในการสร้างคอมโพเนนต์
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; // นำเข้า component ที่จำเป็นจาก React Native
import { Ionicons } from '@expo/vector-icons'; // นำเข้าไอคอนจาก Ionicons

// ฟังก์ชัน Header ใช้เพื่อแสดงแถบหัวข้อ (header) ของแอป
export default function Header({ title, onBack }) {
  return (
    // ใช้ View เป็น container หลักสำหรับแถบหัวข้อ
    <View style={styles.header}>
      {/* ปุ่มย้อนกลับ */}
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        {/* แสดงไอคอนลูกศรย้อนกลับจาก Ionicons */}
        <Ionicons name="chevron-back" size={24} color="#333" />
      </TouchableOpacity>
      
      {/* ชื่อหน้าจอที่แสดงในแถบหัวข้อ */}
      <Text style={styles.headerTitle}>{title}</Text>
      {/* ช่องว่างที่ใช้สำหรับจัดตำแหน่งไอคอนให้ไม่ติดขอบขวา */}
      <View style={{ width: 24 }} />
    </View>
  );
}

// กำหนดสไตล์ของแถบหัวข้อ (Header)
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', // วางคอมโพเนนต์ภายในแถว
    alignItems: 'center', // จัดให้ทุกคอมโพเนนต์ภายในแถบอยู่ในแนวตั้ง
    justifyContent: 'space-between', // จัดให้มีช่องว่างระหว่างปุ่มย้อนกลับและชื่อหน้าจอ
    backgroundColor: '#FFCC33', // กำหนดพื้นหลังเป็นสีส้ม
    paddingVertical: 30, // เว้นพื้นที่ด้านบนและด้านล่าง 15px
    paddingHorizontal: 20, // เว้นพื้นที่ด้านซ้ายและขวา 20px
    marginTop: -10,
  },
  backButton: {
    padding: 4, // เพิ่มพื้นที่กดของปุ่มย้อนกลับ
  },
  headerTitle: {
    fontSize: 25, // ขนาดฟอนต์ของชื่อหน้าจอ
    fontWeight: '600', // น้ำหนักฟอนต์หนา
    color: '#FFFFFF', // สีของข้อความในแถบหัวข้อเป็นสีขาว
    flex: 1, // ทำให้ชื่อหน้าจอขยายเต็มพื้นที่
    textAlign: 'center', // จัดข้อความให้อยู่กลาง
  },
});
