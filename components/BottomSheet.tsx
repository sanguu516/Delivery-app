import { View, Text, Button, StyleSheet } from "react-native";
import React, { Ref, forwardRef, useCallback, useMemo } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheet,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const BottomSheet = forwardRef<BottomSheetModal>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  const { dismiss } = useBottomSheetModal();
  return (
    <BottomSheetModal
      handleIndicatorStyle={{ display: "none" }}
      backgroundStyle={{ borderRadius: 0, backgroundColor: Colors.lightGrey }}
      ref={ref}
      snapPoints={snapPoints}
      overDragResistanceFactor={0}
      backdropComponent={renderBackdrop}
    >
      <View style={styles.contentContainer}>
        <View style={styles.toggle}>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.acticeText}>배달</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleInactive}>
            <Text style={styles.inactiveText}>찾다</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subheader}>지역 설정</Text>
        <Link href={"/"} asChild>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons
                name="location-outline"
                size={20}
                color={Colors.medium}
              />
              <Text style={{ flex: 1 }}>현재 위치 사용</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={Colors.primary}
              />
            </View>
          </TouchableOpacity>
        </Link>

        <Text style={styles.subheader}>도착 시간</Text>
        <TouchableOpacity>
          <View style={styles.item}>
            <Ionicons
              name="stopwatch-outline"
              size={20}
              color={Colors.medium}
            />
            <Text style={{ flex: 1 }}>현재</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
          <Text style={styles.buttonText}>확인</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 32,
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  acticeText: {
    color: "#fff",
    fontWeight: "700",
  },
  toggleInactive: {
    // backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  inactiveText: {
    color: Colors.primary,
    fontWeight: "700",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    margin: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  subheader: {
    fontSize: 16,
    fontWeight: "600",
    margin: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#fff",
    padding: 16,
    borderColor: Colors.grey,
    borderBottomWidth: 1,
  },
});
export default BottomSheet;
