import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@/components/ui/modal";
import { Text } from "@/components/ui/text";
import { IconX } from "@tabler/icons-react-native";
import React from "react";

type CustomModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode; // konten dinamis (form, teks, dsb)
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  showFooter?: boolean;
  action?: "default" | "primary" | "secondary" | "positive" | "negative";
};

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  onConfirm,
  confirmText = "OK",
  cancelText = "Cancel",
  showFooter = true,
  action,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="md" className="text-typography-950">
            {title}
          </Heading>
          <ModalCloseButton onPress={onClose}>
            <IconX size={20} color="#4B5563" className="text-gray-700" />
          </ModalCloseButton>
        </ModalHeader>

        <ModalBody>
          {description && (
            <Text size="sm" className="text-typography-500">
              {description}
            </Text>
          )}
          {children}
        </ModalBody>

        {showFooter && (
          <ModalFooter>
            <Button variant="outline" action="secondary" onPress={onClose}>
              <ButtonText>{cancelText}</ButtonText>
            </Button>
            <Button onPress={onConfirm || onClose} action={action}>
              <ButtonText>{confirmText}</ButtonText>
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
