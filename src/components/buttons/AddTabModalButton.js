// AddTabModalButton
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const buttonStyle = {
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor: 'teal',
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 5,
};

function AddTabModalButton({ onOpen }) {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onOpen}>
      <Ionicons name="add" size={24} color="white" />
    </TouchableOpacity>
  );
}

export default AddTabModalButton;
