import React, { useEffect } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StatusBar,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import { Text, Layout } from "@ui-kitten/components";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { loginUser } from "../redux/actions";
import { IMAGES } from "../common";

const { height } = Dimensions.get("window");
export function Login({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    if (email === "") {
      ToastAndroid.show("please enter your email", 2000);
    }
    if (password === "") {
      ToastAndroid.show("please enter your password", 2000);
    }
    if (email !== "" && password !== "") {
      dispatch(loginUser({ email, password }));
    }
  };
  const { status, loading } = useSelector(({ authRdx }) => authRdx);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status) {
      navigation.navigate("Home");
    }
  }, [status]);
  return (
    <Layout style={styles.view}>
      <StatusBar hidden />
      <Layout style={styles.header}>
        <Image source={IMAGES.logo} style={styles.header} />
      </Layout>
      <Layout style={styles.circleView}>
        <Image source={IMAGES.efakka} style={styles.imageStyle} />
      </Layout>
      <Text style={styles.loginText}>Login</Text>
      <Layout style={styles.textInputView} level="3">
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              value={value}
              placeholder="Your email"
              placeholderTextColor="grey"
              // keyboardType={'number-pad'}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(text) => {
                onChange(text);
              }}
              style={styles.inputStyle}
            />
          )}
          name="email"
          defaultValue=""
        />
      </Layout>
      <Layout style={styles.textInputView} level="3">
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              value={value}
              placeholder="Password"
              secureTextEntry
              placeholderTextColor="grey"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(text) => {
                onChange(text);
              }}
              style={styles.inputStyle}
            />
          )}
          name="password"
          defaultValue=""
        />
      </Layout>
      <TouchableOpacity onPress={() => {}} style={styles.forgetPassword}>
        <Text style={styles.forgetPasswordText}>Forgot you password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.loginButton}>
        {loading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Text appearance="alternative" category="s1" status="control">
            Login
          </Text>
        )}
      </TouchableOpacity>
      <Layout style={styles.accountQuestion}>
        <Text appearance="hint" style={styles.haveAccount}>
          Don't have an Account ?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}>
          <Text style={styles.signUpText}> Sign Up</Text>
        </TouchableOpacity>
      </Layout>
    </Layout>
  );
}
const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  header: {
    backgroundColor: "red",
    width: "100%",
    height: height * 0.33,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  circleView: {
    width: 100,
    height: 100,
    backgroundColor: "#FFFFFF",
    bottom: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 70,
    height: 70,
    // borderRadius: 50,
  },
  loginText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -20,
    marginBottom: 20,
  },
  textInputView: {
    // backgroundColor: '#F2F2F2',
    width: "80%",
    height: 50,
    borderRadius: 15,
    elevation: 0.5,
    marginBottom: 10,
  },
  inputStyle: {
    marginLeft: 10,
    flex: 1,
  },
  forgetPassword: {
    width: "80%",
    marginBottom: 20,
  },
  forgetPasswordText: {
    color: "blue",
  },
  loginButton: {
    backgroundColor: "#003C51",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 50,
    borderRadius: 15,
    elevation: 0.5,
    marginBottom: 10,
  },
  accountQuestion: {
    flexDirection: "row",
  },
  haveAccount: {
    color: "grey",
  },
  signUpText: {
    color: "blue",
    fontWeight: "bold",
  },
});
