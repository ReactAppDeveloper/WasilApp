import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Platform,
  Modal,
  Pressable,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import { Colors } from '../../../theme';
import {SearchSVG} from '../../../assets/icons';
const { width, height } = Dimensions.get('window');
const ITEM_WIDTH = (width - 48) / 2;
const DROPDOWN_HEIGHT = height < 700 ? 40 : 50;

const CustomDropdown = ({
  value,
  items,
  placeholder,
  width,
  onSelect,
  open,
  setOpen,
  align = 'left',
}) => {
  const selectedItem = items.find(item => item.value === value);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.dropdownBase,
          {
            width,
          },
        ]}
        onPress={() => setOpen(true)}
      >
        <Text
          numberOfLines={1}
          style={styles.dropdownText}
        >
          {selectedItem?.label || placeholder}
        </Text>

        <Text style={styles.arrow}>
          {open ? '▲' : '▼'}
        </Text>
      </TouchableOpacity>

      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setOpen(false)}
        >
          <Pressable
            style={[
              styles.dropdownModal,
              {
                width,
                alignSelf: align === 'right' ? 'flex-end' : 'flex-start',
                marginLeft: align === 'left' ? 16 : 0,
                marginRight: align === 'right' ? 16 : 0,
              },
            ]}
            onPress={e => e.stopPropagation()}
          >
            <FlatList
              data={items}
              keyExtractor={(item, index) =>
                item.value !== null && item.value !== undefined
                  ? String(item.value)
                  : `item-${index}`
              }
              showsVerticalScrollIndicator
              nestedScrollEnabled
              keyboardShouldPersistTaps="handled"
              renderItem={({ item }) => {
                const isSelected = item.value === value;

                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={[
                      styles.dropdownItem,
                      isSelected && styles.selectedDropdownItem,
                    ]}
                    onPress={() => {
                      onSelect(item.value);
                      setOpen(false);
                    }}
                  >
                    <Text
                      numberOfLines={1}
                      style={[
                        styles.dropdownItemText,
                        isSelected &&
                          styles.selectedDropdownItemText,
                      ]}
                    >
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
};

const AllSubCategories = ({ navigation }) => {

  const [subcategories, setSubcategories] = useState([]);
  const [filteredSubcategories, setFilteredSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState('');

  const [open1, setOpen1] = useState(false);
  const [selectedAll, setSelectedAll] = useState(null);

  const [allItems, setAllItems] = useState([
    { label: 'All', value: null },
    { label: 'Free', value: 'free' },
    { label: 'Popular', value: 'popular' },
    { label: 'Latest', value: 'latest' },
  ]);

  const [open2, setOpen2] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryItems, setCategoryItems] = useState([]);

  const [dropdown1Width, setDropdown1Width] = useState(100);
  const [dropdown2Width, setDropdown2Width] = useState(150);

  useEffect(() => {
    const fetchData = async () => {
      try {

        setLoading(true);

        const [subcatRes, catRes] = await Promise.all([
          axios.get('https://islamicapp.vercel.app/api/allislsubcategory'),
          axios.get('https://islamicapp.vercel.app/api/islamiccategories'),
        ]);

        setSubcategories(subcatRes.data);
        setFilteredSubcategories(subcatRes.data);

        const formattedCategories = [
          { label: 'All Stories', value: null },
          ...catRes.data.map((cat) => ({
            label: cat.categoryname,
            value: cat._id,
          })),
        ];

        setCategoryItems(formattedCategories);

        adjustDropdownWidths(allItems, formattedCategories);

        setLoading(false);

      } catch (error) {
        console.log('API Error', error);
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  const adjustDropdownWidths = (firstDropdown, secondDropdown) => {

    const calcWidth = (items) => {

      const longestLabel = items.reduce(
        (a, b) => (a.label.length > b.label.length ? a : b),
        { label: '' }
      ).label;

      const charWidth = 9;
      const padding = 45;

      const totalWidth = Math.min(
        width * 0.45,
        longestLabel.length * charWidth + padding
      );

      return totalWidth;
    };

    setDropdown1Width(calcWidth(firstDropdown));
    setDropdown2Width(calcWidth(secondDropdown));
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    applyFilters(searchText, value, selectedAll);
  };

  const handleAllChange = (value) => {
    setSelectedAll(value);
    applyFilters(searchText, selectedCategory, value);
  };

  const applyFilters = (search, category, sort) => {

    let filtered = [...subcategories];

    if (category !== null) {
      filtered = filtered.filter((item) => item.categoryId === category);
    }

    if (search.trim() !== '') {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort === 'free') {
      filtered = filtered.filter((item) => item.isfree === "true");
    }

    else if (sort === 'popular') {
      filtered = filtered.filter((item) => item.topchoice === "true");
    }

    else if (sort === 'latest') {
      filtered = filtered.filter((item) => item.newarrival === "true");
    }

    setFilteredSubcategories(filtered);
  };

  const handleSearch = (text) => {
    setSearchText(text);
    applyFilters(text, selectedCategory, selectedAll);
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={Colors.white} />
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.card}>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('StoryDetailScreen', { storyid: item._id })
        }
      >

        <View style={styles.imageContainer}>

          {item.path ? (
            <Image
              source={{ uri: item.path }}
              style={styles.image}
            />
          ) : (
            <View style={styles.placeholder} />
          )}

        </View>

      </TouchableOpacity>

      <View style={styles.textRow}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
      </View>

    </View>
  );

  return (

    <View style={styles.screen}>

      <View style={styles.searchContainer}>
       <View>
                   <SearchSVG />
                 </View>

        <TextInput
          placeholder="Search stories..."
          placeholderTextColor={Colors.wasilgreentext}
          style={styles.searchInput}
          value={searchText}
          onChangeText={handleSearch}
        />

      </View>

     <View style={styles.dropdownRow}>

  {/* LEFT DROPDOWN */}
  <CustomDropdown
    value={selectedAll}
    items={allItems}
    placeholder="All"
    width={dropdown1Width}
    open={open1}
    align="left"
    setOpen={(value) => {
      setOpen1(value);

      if (value) {
        setOpen2(false);
      }
    }}
    onSelect={handleAllChange}
  />

  {/* RIGHT DROPDOWN */}
  <CustomDropdown
    value={selectedCategory}
    items={categoryItems}
    placeholder="All Stories"
    width={dropdown2Width}
    open={open2}
    align="right"
    setOpen={(value) => {
      setOpen2(value);

      if (value) {
        setOpen1(false);
      }
    }}
    onSelect={handleCategoryChange}
  />

</View>

      <FlatList
        data={filteredSubcategories}
        keyExtractor={(item) => item._id}
        numColumns={2}
        nestedScrollEnabled
        contentContainerStyle={styles.container}
        renderItem={renderItem}
        columnWrapperStyle={styles.row}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No stories found
          </Text>
        }
      />

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.wasilgreenthemecolor,
  },
  searchContainer: {
    marginHorizontal: 16,
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 45,
    borderWidth: 1,
    borderColor: Colors.wasilgreenborder,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
  },
  searchInput: {
        flex:1,
        paddingBottom:Platform.OS==='ios'?4:10,
        fontSize: 14,
        color: Colors.white,
        fontFamily:Platform.OS === 'ios' ? "Asul-Bold" : "AsulBold"
  },
  dropdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    zIndex: 1000,
  },
 
  dropdownContainerBase: {
    borderColor: '#E0E0E0',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 4,
    elevation: 3,
  },
  dropdownText: {
    fontSize: 13,
    color: '#000',
  },
  container: {
    padding: 16,
    paddingTop: 15,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  card: {
    width: ITEM_WIDTH,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#eee',
    width: '100%',
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  placeholder: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  textRow: {
    marginTop: 8,
  },
  title: {
    fontSize: 13,
    color: Colors.white,
    fontFamily: "Poppins-Light",
  },
  emptyText: {
    height: '100%',
    marginTop:200,
    fontSize: 15,
    alignSelf: 'center',
    color: Colors.white,
    fontFamily: 'Poppins-Light',
  },
  loaderContainer: {
    backgroundColor:Colors.wasilgreenthemecolor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownBase: {
  borderColor: '#E0E0E0',
  borderRadius: 25,
  backgroundColor: Colors.wasilgreenthemecolorsecond,
  height: DROPDOWN_HEIGHT,
  justifyContent: 'center',
  paddingHorizontal: 14,
  elevation: 2,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},

dropdownText: {
  flex: 1,
  fontSize: 13,
  color: Colors.white,
  fontFamily: Platform.OS === 'ios'
    ? 'Asul-Bold'
    : 'AsulBold',
},

arrow: {
  fontSize: 10,
  color: Colors.white,
  marginLeft: 8,
},

modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.15)',
  justifyContent: 'flex-start',
  paddingTop: 125,
},

dropdownModal: {
  backgroundColor: Colors.wasilgreenthemecolorsecond,
  borderRadius: 15,
  maxHeight: 350,
  elevation: 8,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.2,
  shadowRadius: 6,
  overflow: 'hidden',
},
dropdownItem: {
  minHeight: 48,
  paddingHorizontal: 16,
  justifyContent: 'center',
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: '#E0E0E0',
},

selectedDropdownItem: {
  backgroundColor: Colors.wasilgreenthemecolorsecond,
},

dropdownItemText: {
  fontSize: 14,
  color: Colors.white,
  fontFamily: Platform.OS === 'ios'
    ? 'Asul-Bold'
    : 'AsulBold',
},

selectedDropdownItemText: {
  color: Colors.wasilgreentext,
},
});

export default AllSubCategories;