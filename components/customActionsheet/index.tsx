import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
} from "@/components/ui/actionsheet";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { View } from "@/components/ui/view";
import { VStack } from "@/components/ui/vstack";
import { IconX } from "@tabler/icons-react-native";
import React, { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";

interface CustomActionsheetProps {
  showActionsheet: boolean;
  handleClose?: () => void;
  titleActionsheet?: string;
  children?: ReactNode;
  showDivider?: boolean;
}

const CustomActionsheet: React.FC<CustomActionsheetProps> = ({
  showActionsheet,
  handleClose = () => {},
  titleActionsheet = "Judul",
  children,
  showDivider = true,
}) => {
  return (
    <Actionsheet
      isOpen={showActionsheet}
      onClose={handleClose}
      snapPoints={[50]} // Tambahkan snapPoints untuk behavior yang lebih baik
    >
      <ActionsheetBackdrop onPress={handleClose} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>

          {/* Header */}
          <HStack className="w-full items-center justify-between py-3">
            <View className="w-5" />
            <Heading className="text-center flex-1">{titleActionsheet}</Heading>

            <TouchableOpacity onPress={handleClose}>
              <Icon as={IconX} size="xl" />
            </TouchableOpacity>
          </HStack>

          {showDivider && <Divider className="my-0.5 w-full" />}

          <VStack space="xl" className="w-full py-4">
            {children}
          </VStack>
        </ActionsheetContent>
      </KeyboardAvoidingView>
    </Actionsheet>
  );
};

export default CustomActionsheet;
