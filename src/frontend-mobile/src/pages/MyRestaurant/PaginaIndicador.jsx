import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Dot } from 'lucide-react-native';

const PaginaIndicador = ({ currentPage }) => {
  const renderDot = (index) => {
    const size = 50;

    return (
      <Dot
        size={size}
        color={index === currentPage ? '#930000' : '#bdc3c7'}
      />
    );
  };

  return (
    <View style={styles.container}>
      {renderDot(0)}
      {renderDot(1)}
      {renderDot(2)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PaginaIndicador;
