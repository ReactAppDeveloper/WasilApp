import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  StatusBar,
  Platform,
  Image,
} from 'react-native';
import {
  WasilNewQuranBannerSvg,
  WasilNewUserNameWSvg,
  WasilNewEmailWSvg,
  WasilNewPhoneWSvg,
  WasilNewRelationWSvg,
  WasilNewDescriptionWSvg,
  WasilNewUploadWSvg
} from '../../assets/icons';
import { Colors } from '../../theme';
const MAX_DESCRIPTION_LENGTH = 200;
import { launchImageLibrary} from 'react-native-image-picker';
const API_BASE_URL = 'https://islamicapp.vercel.app';


const RemembranceFormWhite = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    relationship: '',
    lovedOneName: '',
    gender: '',
    description: '',
    photo: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field, value) => {
    setForm(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
  if (!form.fullName.trim()) {
    Alert.alert('Required', 'Please enter your full name.');
    return;
  }

  if (!form.email.trim()) {
    Alert.alert('Required', 'Please enter your email address.');
    return;
  }

  if (!form.phone.trim()) {
    Alert.alert('Required', 'Please enter your phone number.');
    return;
  }

  if (!form.relationship.trim()) {
    Alert.alert('Required', 'Please enter your relationship.');
    return;
  }

  if (!form.lovedOneName.trim()) {
    Alert.alert('Required', "Please enter your loved one's name.");
    return;
  }

  if (!form.gender.trim()) {
    Alert.alert('Required', "Please enter your loved one's gender.");
    return;
  }

  if (!form.description.trim()) {
    Alert.alert('Required', 'Please enter a description.');
    return;
  }

  if (!form.photo?.uri) {
    Alert.alert('Required', 'Please upload a photo.');
    return;
  }

  setIsSubmitting(true);

  try {
    const formData = new FormData();

    formData.append('fullName', form.fullName.trim());
    formData.append('email', form.email.trim());
    formData.append('phone', form.phone.trim());
    formData.append('relationship', form.relationship.trim());
    formData.append('lovedOneName', form.lovedOneName.trim());
    formData.append('gender', form.gender.trim());
    formData.append('description', form.description.trim());

    formData.append('photo', {
      uri: form.photo.uri,
      type: form.photo.type || 'image/jpeg',
      name: form.photo.fileName || 'remembrance-photo.jpg',
    });

    console.log('Submitting remembrance...');

    const response = await fetch(
      `${API_BASE_URL}/api/remembrance`,
      {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      },
    );

    const data = await response.json();

    console.log('Remembrance response:', data);

    if (!response.ok || !data.success) {
      throw new Error(
        data.message || 'Unable to submit remembrance.',
      );
    }

    Alert.alert(
      'Submitted Successfully',
      'Your remembrance has been submitted successfully.',
      [
        {
          text: 'OK',
          onPress: () => {
            setForm({
              fullName: '',
              email: '',
              phone: '',
              relationship: '',
              lovedOneName: '',
              gender: '',
              description: '',
              photo: null,
            });
          },
        },
      ],
    );
  } catch (error) {
    console.log('Remembrance submission error:', error);

    Alert.alert(
      'Submission Failed',
      error.message || 'Unable to submit remembrance. Please try again.',
    );
  }
  finally {
  setIsSubmitting(false);
}
};

  const handleUploadPhoto = async () => {
  try {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
      includeBase64: false,
    });

    // User cancelled gallery
    if (result.didCancel) {
      return;
    }

    // Picker error
    if (result.errorCode) {
      Alert.alert(
        'Unable to select photo',
        result.errorMessage || 'Something went wrong.',
      );
      return;
    }

    const asset = result.assets?.[0];

    if (!asset) {
      return;
    }

    // -----------------------------
    // Check file type
    // -----------------------------

    const allowedTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
    ];

    const fileType = asset.type?.toLowerCase();

    if (fileType && !allowedTypes.includes(fileType)) {
      Alert.alert(
        'Invalid photo',
        'Please select a JPG or PNG image.',
      );
      return;
    }

    // -----------------------------
    // Check file size - 5 MB
    // -----------------------------

    const maxSize = 5 * 1024 * 1024;

    if (asset.fileSize && asset.fileSize > maxSize) {
      Alert.alert(
        'Image too large',
        'Please select an image smaller than 5 MB.',
      );
      return;
    }

    // -----------------------------
    // Save selected photo
    // -----------------------------

    updateField('photo', {
      uri: asset.uri,
      type: asset.type,
      fileName: asset.fileName,
      fileSize: asset.fileSize,
    });

  } catch (error) {
    console.log('Image picker error:', error);

    Alert.alert(
      'Error',
      'Unable to open the photo gallery.',
    );
  }
  };

  return (
    <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>

        <StatusBar backgroundColor={Colors.black} />
    
        <View style={styles.headerWrapper}>
            <WasilNewQuranBannerSvg style={styles.banner} />
              <View style={styles.textContainer}>

                <Text style={styles.description}>
                   Add a Beloved Soul
                  </Text>
                  
                  <Text style={styles.subtitletrans}>
                   Share the memory of your loved one and keep their legacy alive on our Wall of Remembrance
                  </Text>
      
            
              </View>
           
        </View>
  
        <View style={styles.sectionCard}>
        
        <Text style={styles.sectionTitle}>Your Information</Text>
        <View style={styles.divider} />

        <View style={styles.fieldContainer}>
          <View style={styles.labelRow}>

            <WasilNewUserNameWSvg/>

            <Text style={styles.label}>
              Full Name <Text style={styles.required}>*</Text>
            </Text>
          </View>

          <TextInput
            value={form.fullName}
            onChangeText={value => updateField('fullName', value)}
            placeholder="Enter your full name"
            placeholderTextColor="#BDBDBD"
            style={styles.input}
          />
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.labelRow}>

            <WasilNewEmailWSvg/>

            <Text style={styles.label}>
              Email Address <Text style={styles.required}>*</Text>
            </Text>
          </View>

          <TextInput
            value={form.email}
            onChangeText={value => updateField('email', value)}
            placeholder="Enter your email address"
            placeholderTextColor="#BDBDBD"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.labelRow}>
           
           <WasilNewPhoneWSvg/>

            <Text style={styles.label}>
              Phone Number <Text style={styles.required}>*</Text>
            </Text>
          </View>

          <TextInput
            value={form.phone}
            onChangeText={value => updateField('phone', value)}
            placeholder="Enter your phone number"
            placeholderTextColor="#BDBDBD"
            keyboardType="phone-pad"
            style={styles.input}
          />
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.labelRow}>
            <WasilNewRelationWSvg/>

            <Text style={styles.label}>
              Relationship to the Deceased{' '}
              <Text style={styles.required}>*</Text>
            </Text>
          </View>

          <TextInput
            value={form.relationship}
            onChangeText={value => updateField('relationship', value)}
            placeholder="Enter relationship (e.g., Parents, Child)"
            placeholderTextColor="#BDBDBD"
            style={styles.input}
          />
        </View>
        </View>

        <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Loved One's Information</Text>

        <View style={styles.divider} />

        <View style={styles.fieldContainer}>
          <View style={styles.labelRow}>
              
              <WasilNewUserNameWSvg/>
            <Text style={styles.label}>
              Full Name <Text style={styles.required}>*</Text>
            </Text>
          </View>

          <TextInput
            value={form.lovedOneName}
            onChangeText={value => updateField('lovedOneName', value)}
            placeholder="Enter your loved one's first name"
            placeholderTextColor="#BDBDBD"
            style={styles.input}
          />
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.labelRow}>
              
              <WasilNewUserNameWSvg/>

            <Text style={styles.label}>Gender</Text>
          </View>

          <TextInput
            value={form.gender}
            onChangeText={value => updateField('gender', value)}
            placeholder="Enter gender (e.g., Male, Female)"
            placeholderTextColor="#BDBDBD"
            style={styles.input}
          />
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.labelRow}>
              
              <WasilNewDescriptionWSvg/>

            <Text style={styles.label}>
              Description <Text style={styles.required}>*</Text>
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <TextInput
              value={form.description}
              onChangeText={value => {
                if (value.length <= MAX_DESCRIPTION_LENGTH) {
                  updateField('description', value);
                }
              }}
              placeholder="Share a few words about your loved one's life, character, and memories..."
              placeholderTextColor="#BDBDBD"
              multiline
              textAlignVertical="top"
              maxLength={MAX_DESCRIPTION_LENGTH}
              style={styles.descriptionInput}
            />

            <Text style={styles.characterCount}>
              {form.description.length}/{MAX_DESCRIPTION_LENGTH}
            </Text>
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.labelRow}>
          
            <WasilNewUploadWSvg />

            <Text style={styles.label}>
              Upload Photo <Text style={styles.required}>*</Text>
            </Text>
          </View>

          <TouchableOpacity
  activeOpacity={0.7}
  style={styles.uploadBox}
  onPress={handleUploadPhoto}>

  {form.photo ? (
    <>
      <Image
        source={{uri: form.photo.uri}}
        style={styles.selectedImage}
      />

      <Text style={styles.uploadTitle}>
        Tap to change photo
      </Text>
    </>
  ) : (
    <>
      <View style={styles.uploadIconCircle}>
        <WasilNewUploadWSvg />
      </View>

      <Text style={styles.uploadTitle}>
        Tap to upload photo
      </Text>

      <Text style={styles.uploadSubtitle}>
        JPG, PNG (Max 5MB)
      </Text>
    </>
  )}

          </TouchableOpacity>
        </View>

       <TouchableOpacity
  activeOpacity={0.8}
  style={[
    styles.submitButton,
    isSubmitting && {opacity: 0.6},
  ]}
  onPress={handleSubmit}
  disabled={isSubmitting}>
  <Text style={styles.submitText}>
    {isSubmitting ? 'Submitting...' : 'Submit'}
  </Text>
</TouchableOpacity>
        </View>
    
    </ScrollView>
  );
};

export default RemembranceFormWhite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  contentContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 50,
  },

   headerWrapper: {
      top:10,
      width: "100%",
      height: 120,
      right:1,
      alignItems: 'center',  
      position: 'relative',
      justifyContent: 'center',
      flexDirection:"column"
    },
     banner: {
      width: '100%',
    },
    textContainer: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center', 
    },
  
    description: {
      width:300,
      fontSize: 25,
      color: Colors.wasilnewthemecolorsecond,
      textAlign:"center",
      fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular",
    },
    
    subtitletrans: {
      fontSize: 12,
      width:250,
      top:8,
      color: Colors.secondary,
      textAlign:"center",
      fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular",
    },

  sectionCard: {
    top:30,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E4E4',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingTop: 26,
    paddingBottom: 15,
    marginBottom: 15,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.03,
    shadowRadius: 2,
  },

  sectionTitle: {
    fontSize: 18,
    color: '#27232A',
    fontFamily: Platform.OS === 'ios' ? 'Asul-Regular' : 'AsulRegular',
    bottom: 5,
  },

  divider: {
    height: 1,
    backgroundColor: '#E3E3E3',
    marginTop: 9,
    marginBottom: 16,
  },

  fieldContainer: {
    marginBottom: 20,
  },

  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  iconPlaceholder: {
    width: 26,
    marginRight: 8,
    fontSize: 23,
    color: '#29272B',
    textAlign: 'center',
  },

  label: {
    flex: 1,
    fontSize: 16,
    left:5,
    top:1,
    color: '#302D32',
    fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular",
  },

  required: {
    color: '#FF2D2D',
  },

  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    fontSize: 17,
    color: '#333333',
    backgroundColor: '#FFFFFF',
  },

  inputText: {
    fontSize: 17,
    color: '#333333',
  },

  placeholderText: {
    fontSize: 17,
    color: '#BDBDBD',
  },

  descriptionContainer: {
    height: 196,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },

  descriptionInput: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 35,
    fontSize: 17,
    lineHeight: 25,
    color: '#333333',
  },

  characterCount: {
    position: 'absolute',
    right: 10,
    bottom: 8,
    fontSize: 13,
    color: '#222222',
  },

  uploadBox: {
    height: 138,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#D2B9FF',
    borderRadius: 12,
    backgroundColor: '#FCF9FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  uploadIconCircle: {
    width: 47,
    height: 47,
    borderRadius: 24,
    backgroundColor: '#F0E8FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 7,
  },

  uploadIcon: {
    fontSize: 28,
    color: '#6C3CC4',
    fontWeight: '500',
  },

  uploadTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222222',
    marginBottom: 2,
  },

  uploadSubtitle: {
    fontSize: 12,
    color: '#B5B5B5',
  },

  submitButton: {
    height: 50,
    borderRadius: 14,
    backgroundColor: '#6B38C5',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },

  submitText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily:Platform.OS === 'ios' ? "Nunito Sans 7pt" : "NunitoSansRegular",
  },
  selectedImage: {
  width: 70,
  height: 70,
  borderRadius: 35,
  marginBottom: 7,
},
});