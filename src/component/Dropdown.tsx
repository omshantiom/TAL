
import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState([
    { label: 'Accountant', value: 'Accountant' },
    { label: 'Developer', value: 'Developer' },
    { label: 'Tester', value: 'Tester' },
  ]);

  return (
    <View style={{ paddingTop: 16, zIndex: 1000, width:'100%' }}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Start typing to search ex: Accountant"
        searchable
        searchPlaceholder="Start typing to search ex: Accountant"
        zIndex={1000}
        zIndexInverse={3000}
      />
    </View>
  );
};

export default Dropdown;
