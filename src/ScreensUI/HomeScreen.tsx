import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from "react-native";
import Dropdown from "../component/Dropdown";
import Checkbox from "../component/Checkbox";
import TextInputMoney from "../component/TextInputMoney";
import ContinueButton from "../component/Button";
import RadioBtn from "../component/RadioBtn";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/navigation";
import React, { useState } from "react";

type AddBenefitsNavProp = NativeStackNavigationProp<
  RootStackParamList,
  "AddBenefits"
>;

const HomeScreen = () => {
  const navigation = useNavigation<AddBenefitsNavProp>();

  const [showFirst, setShowFirst] = useState(true);
  const toggle = () => setShowFirst((v) => !v);

  const [text, setText] = useState(" Step 1 of 1");

  const toggleText = () => {
    setText((prev) => (prev === "Step 1 of 1" ? "Step 2 of 2" : "Step 1 of 1"));
  };

  const handleClick = () => {
    toggle();
    toggleText();
  };

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <View style={styles.container}>
        <View style={styles.imgcontainer}>
          <Image
            source={require("../../assets/img1.webp")}
            style={styles.img}
          />
          <Image
            source={require("../../assets/img2.webp")}
            style={styles.img}
          />
          <Image
            source={require("../../assets/img3.webp")}
            style={styles.img}
          />
          <Image
            source={require("../../assets/img4.webp")}
            style={styles.img}
          />
        </View>
        <View style={styles.imgcontainer}>
          <Image
            source={require("../../assets/img5.webp")}
            style={styles.img}
          />
        </View>
        <Text style={styles.txtheaderStyle}>Get an online quick quote</Text>
        <Text style={styles.txtdesStyle}>Life Insurance</Text>
        <Text style={styles.txtdesStyle}>Income Protection*</Text>
        <Text style={styles.txtdesStyle}>Critical Illness Insurance</Text>
        <Text style={styles.txtdesStyle}>
          Total & Permanent Disability Insurance
        </Text>
        <Text style={styles.txtdeslineStyle}>
          Learn more about the above options{" "}
        </Text>
        <Text style={styles.txtdesStyle}>{text}</Text>
        {showFirst ? (
          <View style={styles.innercontainer}>
            <Text style={styles.txtdesBoldStyle}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              placeholder="Type here..."
              value={"DD/MM/YYYY"}
            />
            <Text style={styles.txtdesBoldStyle}>Your Sex</Text>
            <RadioBtn labelData1={"Male"} labelData2={"Female"} />
            <Text style={styles.txtdesBoldStyle}>Do You Smoke</Text>
            <RadioBtn labelData1={"Yes"} labelData2={"No"} />
            <Text style={styles.txtdesBoldStyle}>Occupation</Text>
            <Dropdown />
            <Checkbox />
            <Text style={styles.txtdesBoldStyle}>
              Annual income(Excluding Superannuation){" "}
            </Text>
            <TextInputMoney />
            <ContinueButton onPress={handleClick} label={"CONTINUE"} />
          </View>
        ) : (
          <View style={styles.innercontainer}>
            {/* onChangeText={setText} */}
            <Text style={styles.txtdesBoldStyle}>First Name</Text>
            <TextInput style={styles.input} placeholder="" value={""} />
            <Text style={styles.txtdesBoldStyle}>Last Name</Text>
            <TextInput style={styles.input} placeholder="" value={""} />
            <Text style={styles.txtdesBoldStyle}>Phone</Text>
            <TextInput style={styles.input} placeholder="" value={""} />
            <Text style={styles.txtdesBoldStyle}>Email</Text>
            <TextInput style={styles.input} placeholder="" value={""} />
            <Text style={styles.txtdesBoldStyle}>Postcode</Text>
            <TextInput style={styles.input} placeholder="" value={""} />
            <Text style={{ fontSize: 16, lineHeight: 24 }}>
              By providing your contact details and voluntarily clicking on
              calculate my quote button, you agree that the PDS and FSG has been
              provided to you and you consent to us contacting you (by phone,
              email, mail or SMS) in relation to this quote and the products and
              services we offer. You voluntarily consent and agree for us to
              offer, invite you to apply, or contact you by phone (where we have
              your valid consent), mail, email, SMS or other electronic messages
              about the products and services we offer. Your consent shall
              remain in effect in accordance with relevant law or until you tell
              us otherwise. You can opt out of this marketing at any time – see
              our Privacy Policy for how to do this. It also includes
              information about how we collect, use, secure and disclose your
              personal information.{"\n"}
            </Text>
            <ContinueButton
              onPress={() => navigation.navigate("AddBenefits")}
              label={"CALCULATE MY QUOTE"}
            />
          </View>
        )}
        ;<Text style={styles.txtdesBoldStyle}>Need more info?</Text>
        <Text style={{ fontSize: 16, lineHeight: 24 }}>
          {"\u2022"} Download the PDS and FSG{"\n"}
          {"\u2022"} Read Your KeyFacts{"\n"}
          {"\u2022"} Only Variable Age-Stepped Premiums are available online.
          {"\n"}
          For the alternative premium option(Variable Premium) or premium
          illustration, please call 131825. You can also download our key facts
          on premium(PDF) for more information.
        </Text>
        <View style={styles.bottomcontainer}>
          <View>
            <Image
              source={require("../../assets/tallogo.svg")}
              style={styles.imgbottom}
            />
            <Image
              source={require("../../assets/digicert.png")}
              style={styles.imgbottom}
            />
          </View>
          <View>
            <Text style={styles.txtWhitedesBoldStyle}>
              Financial Services Guide
            </Text>
            <Text style={styles.txtWhitedesBoldStyle}>Privacy Policy</Text>
            <Text style={styles.txtWhitedesBoldStyle}>Security</Text>

            <Text style={styles.txtdeslinebottomStyle}>
              *Income Protection cover up to 70% of your monthly income up to
              $30K/month. Subject to assessment (underwriting) criteria. Not
              available for all applicants.{"\n"}
              {"\n"}
              The information provided on this website is general advice only
              and does not take into account your individual needs, objectives
              or financial situation. Before you decide to buy or to continue to
              hold an insurance product, you must read the relevant Product
              Disclosure Statement (PDS). The PDS contains important information
              which will help you understand the product including what’s
              covered and what’s not covered and to decide whether it is
              appropriate for you. The Target Market Determination (TMD) for the
              product is also available. Life insurance issued by TAL Life
              Limited ABN 70 050 109 450 AFSL 237848. Promoted and distributed
              by TAL Direct Pty Limited (of Level 16, 363 George Street, Sydney
              NSW 2000) ABN 39 084 666 017 AFSL 243260.TAL Direct and TAL Life
              are part of the TAL Dai-ichi Life Australia Pty Limited ABN 97 150
              070 483 group of companies.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "#f7f3f3ff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 12,
    paddingRight: 20,
  },
  innercontainer: {
    flex: 1,
    width: "100%",
    marginTop: 10,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    backgroundColor: "#FFFFFF",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bottomcontainer: {
    width: "100%",
    //flexDirection:'row',
    marginTop: 20,
    backgroundColor: "#000000",
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 15,
    paddingRight: 10,
  },

  imgcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginTop: 12,
    // If your RN version < 0.71, remove gap and use marginRight below
    gap: 12,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: "cover",
    backgroundColor: "#eee",
  },
  imgbottom: {
    width: 200,
    height: 90,
    resizeMode: "cover",
    marginTop: 30,
  },

  scroll: {
    flex: 1, // make ScrollView fill the screen
    backgroundColor: "#fafafa",
  },
  content: {
    padding: 0, // inner padding of the scroll content
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    width: "100%",
    padding: 10,
    fontSize: 16,
    marginEnd: 10,
    marginTop: 10,
  },
  txtheaderStyle: {
    fontSize: 20,
    borderColor: "#000000",
    marginTop: 40,
    fontWeight: "bold",
  },
  txtdesStyle: {
    fontSize: 16,
    borderColor: "#000000",
    marginTop: 20,
  },
  txtdesBoldStyle: {
    fontSize: 16,
    borderColor: "#000000",
    marginTop: 20,
    fontWeight: "bold",
  },
  txtWhitedesBoldStyle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 20,
    fontWeight: "bold",
  },

  txtdeslineStyle: {
    fontSize: 16,
    borderColor: "#000000",
    marginTop: 20,
    textDecorationLine: "underline",
    textDecorationColor: "green",
    textDecorationStyle: "solid", // 'solid', 'double', 'dotted', 'dashed'
  },
  txtdeslinebottomStyle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 20,
  },
});

export default HomeScreen;
