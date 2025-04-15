import { 
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView 
} from "react-native"
import { moderateScale, scale } from "react-native-size-matters"
import { appName } from "../../constants/base"
import { useEffect, useState } from "react"

const Welcome = () => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get("window").width)
  const [screenHeight, setScreenHeight] = useState(Dimensions.get("window").height)

  const isSmallScreen = screenWidth < 375

  useEffect(() => {
    const dimensionsHandler = () => {
      setScreenWidth(Dimensions.get('window').width);
      setScreenHeight(Dimensions.get('window').height);
    };

    const subscription = Dimensions.addEventListener('change', dimensionsHandler);

    return () => {
      subscription.remove();
    };

  }, []);
  
  const renderContent = () => (
    <View style={styles.contentContainer}>
      <Image
        source={require("../../assets/authentication/interview.png")}
        style={[styles.logo, { width: screenWidth * 0.8, height: screenHeight * 0.35 }]}
      />
      <Text style={[styles.header, { fontSize: isSmallScreen ? moderateScale(30) : moderateScale(40) }]}>
        {appName}'a Hoşgeldiniz
      </Text>
      <Text style={[styles.description, { fontSize: isSmallScreen ? moderateScale(16) : moderateScale(20) }]}>
        İşletmenizi Kolayca Yönetin: Para Yönetimi, Envanter, Kargo ve Pazaryeri Bir Arada!
      </Text>
      <View style={[styles.buttonContainer, { gap: moderateScale(10) }]}>
        <TouchableOpacity onPress={() => console.log("Giriş Yap")}>
          <Text style={[styles.buttonLogin, { width: screenWidth * 0.8 }]}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Kayıt Ol")}>
          <Text style={[styles.buttonRegister, { width: screenWidth * 0.8 }]}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      {isSmallScreen ? (
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          {renderContent()}
        </ScrollView>
      ) : (
        renderContent()
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: moderateScale(10),
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: moderateScale(10),
    width: "100%",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: moderateScale(20),
    width: "100%",
  },
  logo: {
    resizeMode: "contain",
    marginBottom: moderateScale(20),
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: moderateScale(20),
  },
  description: {
    textAlign: "center",
    color: "#666",
    marginBottom: moderateScale(20),
  },
  buttonLogin: {
    backgroundColor: "#181818",
    color: "#fff",
    padding: scale(10),
    borderRadius: moderateScale(12),
    textAlign: "center",
    fontSize: moderateScale(25),
    height: scale(50),
    textAlignVertical: "center",
  },
  buttonRegister: {
    backgroundColor: "#afafaf",
    color: "#000",
    padding: scale(10),
    borderRadius: moderateScale(12),
    textAlign: "center",
    fontSize: moderateScale(25),
    height: scale(50),
    textAlignVertical: "center",
  },
})

export default Welcome

