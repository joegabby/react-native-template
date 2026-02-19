import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

// Define a type for each dropdown item
type DropdownItem = {
  label: string;
  value: string;
};

type Props = {
  data: DropdownItem[];
  placeholder: string;
  value: (val: string) => void; // Callback to parent with selected value
};

export default function CustomDropdown({ data, placeholder, value }: Props) {
  const [selectedValue, setSelectedValue] = useState<DropdownItem | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (item: DropdownItem) => {
    setSelectedValue(item);
    setIsDropdownOpen(false);
    value(item.value);
  };

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => setIsDropdownOpen(true)}
        className="justify-between flex-row w-full h-[60px] items-center pr-4"
      >
        <Text className="text-xs p-4 font-poppins_regular">
          {selectedValue ? (
            selectedValue.label
          ) : (
            <Text className="text-[#707070]">{placeholder}</Text>
          )}
        </Text>

        {isDropdownOpen ? (
            <Ionicons name="chevron-up" size={16} color="#43525A" /> 
        ) : (
            <Ionicons name="chevron-down" size={16} color="#43525A" />
        )}
      </TouchableOpacity>

      {/* Dropdown modal */}
      <Modal
        transparent={true}
        visible={isDropdownOpen}
        animationType="fade"
        onRequestClose={() => setIsDropdownOpen(false)}
      >
        <TouchableWithoutFeedback onPress={() => setIsDropdownOpen(false)}>
          <View className="bg-[#000000dd] h-screen items-center justify-center">
            <View className="bg-white w-[313px] max-h-[400px] rounded-lg overflow-hidden">
              <FlatList
                data={data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleSelect(item)}>
                    <Text className="py-[20px] px-[15px] font-poppins_regular text-xs">
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
}
