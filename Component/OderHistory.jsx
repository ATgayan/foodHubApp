import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderHistory = () => {
  return (
    <View  style={styles.table}>
      <View style={styles.tableRow}>
        <View style={styles.tableCell}>
          <Text style={styles.headercell}>Order Number</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.headercell}>Order Name</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.headercell}>Date</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.headercell}>Status</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>John</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>30</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>New York</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>Alice</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>25</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>Los Angeles</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#f3f2f2',
    borderRadius: 5,
    backgroundColor:'white',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#f8f5f5',
    padding: 10,
  },
  cellText: {
    textAlign: 'center',
  },
  headercell:{
    textAlign:'center',
    fontWeight:'800'
  }
});

export default OrderHistory;
