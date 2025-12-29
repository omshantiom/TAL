import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text, View,TextInput,Image } from 'react-native';
import RadioBtn from './src/component/RadioBtn';
import Dropdown from './src/component/Dropdown';
import Checkbox from './src/component/Checkbox';
import TextInputMoney from './src/component/TextInputMoney';
import ContinueButton from './src/component/ContinueButton';

export default function App() {
  return (
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
   
      <View style={styles.container}>

      <View style={styles.imgcontainer}>
      <Image source={require('./assets/img1.webp')} style={styles.img} />
      <Image source={require('./assets/img2.webp')} style={styles.img} />
      <Image source={require('./assets/img3.webp')} style={styles.img} />
      <Image source={require('./assets/img4.webp')} style={styles.img} />
      </View>
      <View style={styles.imgcontainer}>
       <Image source={require('./assets/img5.webp')} style={styles.img} />
      </View>
      <Text  style = {styles.txtheaderStyle}>Get an online quick quote</Text>
      <Text  style = {styles.txtdesStyle}>Life Insurance</Text>
      <Text  style = {styles.txtdesStyle}>Income Protection*</Text>
      <Text  style = {styles.txtdesStyle}>Critical Illness Insurance</Text>
      <Text  style = {styles.txtdesStyle}>Total & Permanent Disability Insurance</Text>
      <Text  style = {styles.txtdeslineStyle}>Learn more about the above options</Text>
      <Text  style = {styles.txtdesStyle}>Step 1 of 2</Text>
     
      <View style={styles.innercontainer}>
      <Text  style = {styles.txtdesBoldStyle}>Date of Birth</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={"DD/MM/YYYY"}
        //onChangeText={setText}
      />
      <Text  style = {styles.txtdesBoldStyle}>Your Sex</Text>
      <RadioBtn/>
      <Text  style = {styles.txtdesBoldStyle}>Do You Smoke</Text>
      <RadioBtn/>
      <Text  style = {styles.txtdesBoldStyle}>Occupation</Text>
      <Dropdown/>
      <Checkbox/>
      <Text  style = {styles.txtdesBoldStyle}>Annual income(Excluding Superannuation) </Text>
      <TextInputMoney/>
      <ContinueButton onPress={function (): void {
          throw new Error('Function not implemented.');
        } }/>
      </View>
 
       <Text  style = {styles.txtdesBoldStyle}>Need more info?</Text>

       <Text style={{ fontSize: 16, lineHeight: 24 }}>
      {'\u2022'} Download the PDS and FSG{'\n'}
      {'\u2022'} Read Your KeyFacts{'\n'}
      {'\u2022'} Only Variable Age-Stepped Premiums are available online.{'\n'}
      For the alternative premium option(Variable Premium) or premium illustration, please call 131825.
      You can also download our key facts on premium(PDF) for more information. 
       </Text>
 
         <View  style={styles.bottomcontainer}>
          <View>
       
       <Image source={require('./assets/tallogo.svg')} style={styles.imgbottom} />
       <Image source={require('./assets/digicert.png')} style={styles.imgbottom} />
</View>
  <View>
         <Text  style = {styles.txtWhitedesBoldStyle}>Financial Services Guide</Text>
         <Text  style = {styles.txtWhitedesBoldStyle}>Privacy Policy</Text>
         <Text  style = {styles.txtWhitedesBoldStyle}>Security</Text>

         <Text  style = {styles.txtdeslinebottomStyle}>*Income Protection cover up to 70% of your monthly income up to $30K/month. Subject to assessment (underwriting) criteria. Not available for all applicants.{'\n'}{'\n'}
                                                        The information provided on this website is general advice only and does not take into account your individual needs, objectives or financial situation. Before you decide to buy or to continue to hold an insurance product, you must read the relevant Product Disclosure Statement (PDS). The PDS contains important information which will help you understand the product including what’s covered and what’s not covered and to decide whether it is appropriate for you. The Target Market Determination (TMD) for the product is also available. Life insurance issued by TAL Life Limited ABN 70 050 109 450 AFSL 237848. Promoted and distributed by TAL Direct Pty Limited (of Level 16, 363 George Street, Sydney NSW 2000) ABN 39 084 666 017 AFSL 243260.TAL Direct and TAL Life are part of the TAL Dai-ichi Life Australia Pty Limited ABN 97 150 070 483 group of companies.</Text>
</View>
         </View>

    </View>
   
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#f7f3f3ff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 12,
    paddingRight:20
  },
   innercontainer: {
    flex: 1,
    width:'90%',
    marginTop:10,
    paddingLeft:8,
    paddingRight:8,
    backgroundColor: '#FFFFFF',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
    bottomcontainer: {
    width:'100%',
    //flexDirection:'row',
    marginTop:10,
    backgroundColor: '#000000',
    paddingTop:50,
    paddingBottom:50,
    paddingLeft:15,
    paddingRight:10
  },
  
imgcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginTop:12,
    // If your RN version < 0.71, remove gap and use marginRight below
    gap: 12,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: 'cover',
    backgroundColor: '#eee',
  },
 imgbottom: {
    width: 200,
    height: 90,
    resizeMode: 'cover',
    marginTop:30
  },

 scroll: {
    flex: 1,           // make ScrollView fill the screen
    backgroundColor: '#fafafa',
  },
 content: {
    padding: 0,       // inner padding of the scroll content
  },
input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width:'100%',
    padding: 10,
    fontSize: 16,
    marginEnd:10,
    marginTop:10
  },
  txtheaderStyle :{
    fontSize:20,
    borderColor: '#000000',
    marginTop:40,
    fontWeight:'bold'
  },
  txtdesStyle :{
    fontSize:16,
    borderColor: '#000000',
    marginTop:20,
  },
   txtdesBoldStyle :{
    fontSize:16,
    borderColor: '#000000',
    marginTop:20,
    fontWeight:'bold'
  },
   txtWhitedesBoldStyle :{
    fontSize:16,
    color:'#FFFFFF',
    marginTop:20,
    fontWeight:'bold'
  },
  
  txtdeslineStyle :{
    fontSize:16,
    borderColor: '#000000',
    marginTop:20,
    textDecorationLine: 'underline',
    textDecorationColor: 'green',
    textDecorationStyle: 'solid', // 'solid', 'double', 'dotted', 'dashed'
  },
  txtdeslinebottomStyle :{
    fontSize:16,
    color:'#FFFFFF',
    marginTop:20,
  }
});