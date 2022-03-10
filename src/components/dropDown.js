import * as React from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Menu, Divider, Provider} from 'react-native-paper';
import {Page} from '../data';

const DropDownMenu = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          // padding: 50,
          flexDirection: 'column',
          // justifyContent: 'center',
        }}>
        <ScrollView>
          <SafeAreaView>
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={<Button onPress={openMenu}>Show menu</Button>}>
              <Menu.Item
                onPress={() => {
                  Page = 1;
                }}
                title="Item 1"
              />
              <Menu.Item onPress={() => {}} title="Item 2" />
              <Menu.Item onPress={() => {}} title="Item 3" />
              <Menu.Item onPress={() => {}} title="Item 4" />
              <Menu.Item onPress={() => {}} title="Item 5" />
              <Menu.Item onPress={() => {}} title="Item 6" />
              <Menu.Item onPress={() => {}} title="Item 7" />
              <Menu.Item onPress={() => {}} title="Item 8" />
              <Menu.Item onPress={() => {}} title="Item 9" />
              <Menu.Item onPress={() => {}} title="Item 10" />
              <Menu.Item onPress={() => {}} title="Item 11" />
              <Menu.Item onPress={() => {}} title="Item 12" />
              <Menu.Item onPress={() => {}} title="Item 13" />
              {/* Break here */}
              <Menu.Item onPress={() => {}} title="Item 14" />
              <Menu.Item onPress={() => {}} title="Item 15" />
              <Menu.Item onPress={() => {}} title="Item 16" />
            </Menu>
          </SafeAreaView>
        </ScrollView>
      </View>
    </Provider>
  );
};

export default DropDownMenu;
