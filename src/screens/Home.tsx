import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";

const Home = () => {
  return (
    <View className="w-full h-full bg-black justify-end  items-center  ">
      <View className="mb-20 space-y-5">
        <View className="flex-row justify-center space-x-4 items-center font-medium text-4xl">
          <TouchableOpacity
            onPress={() => {}}
            className="p-4 bg-[#9F9F9F] rounded-full justify-center items-center  w-20 h-20"
          >
            <Text className="text-black text-center text-4xl">AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            className="p-4 bg-[#9F9F9F]  rounded-full justify-center items-center  w-20 h-20"
          >
            <Text className="text-black text-center text-4xl">+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            className="p-4 bg-[#9F9F9F] rounded-full justify-center items-center  w-20 h-20"
          >
            <Text className="text-black text-center text-4xl">%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            className="p-4 bg-[#F69A06] rounded-full justify-center items-center  w-20 h-20"
          >
            <Text className="text-white text-center text-4xl">±</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center space-x-4 items-center font-medium text-4xl">
          <TouchableOpacity
            onPress={() => {}}
            className="p-4 bg-white rounded-full justify-center items-center  w-20 h-20"
          >
            <Text className="text-black text-center text-4xl">7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            className="p-4 bg-white rounded-full justify-center items-center  w-20 h-20"
          >
            <Text className="text-black text-center text-4xl">8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            className="p-4 bg-white rounded-full justify-center items-center  w-20 h-20"
          >
            <Text className="text-black text-center text-4xl">9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            className="p-4 bg-[#F69A06] rounded-full justify-center items-center  w-20 h-20"
          >
            <Text className="text-white text-center text-4xl">*</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center space-x-4 items-center font-medium text-4xl">
          <TouchableOpacity
            onPress={() => {}}
            className="p-4 bg-white rounded-full justify-center items-center  w-20 h-20"
          >
            <Text className="text-black text-center text-4xl">4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            className="p-4 bg-white rounded-full justify-center items-center  w-20 h-20"
          >
            <Text className="text-black text-center text-4xl">5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            className="p-4 bg-white rounded-full justify-center items-center  w-20 h-20"
          >
            <Text className="text-black text-center text-4xl">6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            className="p-4 bg-[#F69A06] rounded-full justify-center items-center  w-20 h-20"
          >
            <Text className="text-white text-center text-4xl">-</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center space-x-4 items-center font-medium text-4xl">
          <TouchableOpacity
            onPress={() => {}}
            className="p-4 bg-white rounded-full justify-center items-center  w-20 h-20"
          >
            <Text className="text-black text-center text-4xl">1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            className="p-4 bg-white rounded-full justify-center items-center  w-20 h-20"
          >
            <Text className="text-black text-center text-4xl">2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            className="p-4 bg-white rounded-full justify-center items-center  w-20 h-20"
          >
            <Text className="text-black text-center text-4xl">3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            className="p-4 bg-[#F69A06] rounded-full justify-center items-center  w-20 h-20"
          >
            <Text className="text-white text-center text-4xl">+</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center space-x-4 items-center font-medium text-4xl">
          <TouchableOpacity
            onPress={() => {}}
            className="p-4 bg-white rounded-full justify-center items-start  w-44 h-20"
          >
            <Text className="text-black text-center text-4xl">0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            className="p-4 bg-white rounded-full justify-center items-center  w-20 h-20"
          >
            <Text className="text-black text-center text-4xl">.</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            className="p-4 bg-[#F69A06] rounded-full justify-center items-center  w-20 h-20"
          >
            <Text className="text-white text-center text-4xl">+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
