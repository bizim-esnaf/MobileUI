import { 
  Image,
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import { appName } from '../../constants/base';
import { useState } from 'react';

const Welcome = () => {

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/(authentication)/interview.png')} style={styles.logo} />
      <Text style={styles.header}>{appName}'a Hoşgeldiniz</Text>
      <Text style={styles.description}>İşletmenizi Kolayca Yönetin: Para Yönetimi, Envanter, Kargo ve Pazaryeri Bir Arada!</Text>
      <View style={styles.container, {gap: moderateScale(10)}}>
        <TouchableOpacity
          onPress={() => console.log('Giriş Yap')}>
          <Text style={styles.buttonLogin}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('Kayıt Ol')}>
          <Text style={styles.buttonRegister}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: moderateScale(10),
    fontFamily: 'acre-medium',

  },
  logo: {
    width: scale(400),
    height: scale(400),
    resizeMode: 'contain',
  },
  header: {
    fontSize: moderateScale(40),
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: moderateScale(20),
  },
  description: {
    fontSize: moderateScale(20),
    textAlign: 'center',
    color: '#666',
    marginBottom: moderateScale(20),
    fontFamily: 'acre-medium',
  },
  buttonLogin: {
    backgroundColor: '#181818',
    color: '#fff',
    padding: scale(10),
    borderRadius: moderateScale(scale(12)),
    textAlign: 'center',
    fontSize: moderateScale(25),
    width: scale(300),
    height: scale(50),
    fontFamily: 'acre-medium',
  },
  buttonRegister: {
    backgroundColor: '#afafaf',
    color: '#000',
    padding: scale(10),
    borderRadius: moderateScale(scale(12)),
    textAlign: 'center',
    fontSize: moderateScale(25),
    width: scale(300),
    height: scale(50),
    fontFamily: 'acre-medium',
  },
})

export default Welcome;