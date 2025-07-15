import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper } from "@/components/ui/actionsheet";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { FormControl, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";
import { View } from "@/components/ui/view";
import { VStack } from "@/components/ui/vstack";
import { IconX } from "@tabler/icons-react-native";
import React from 'react';
import { KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";

interface ActionFormProps {
    showActionsheet: boolean;
    handleClose: () => void;
    value?: string;
    onChange?: (value: string) => void;
}

const ActionForm: React.FC<ActionFormProps> = ({ showActionsheet, handleClose, value, onChange }) => {
    return (
        <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
            <ActionsheetBackdrop />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ActionsheetContent>
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>
                    <HStack className="w-full items-center justify-between py-3 px-4">
                        <View className="w-5" />
                        <Heading className="text-center flex-1">Nama Buku</Heading>
                        <TouchableOpacity onPress={handleClose}>
                            <Icon as={IconX} size={'xl'} />
                        </TouchableOpacity>
                    </HStack>
                    <Divider className="my-0.5 w-[100vh]" />
                    <VStack space="xl" className="w-full py-4">
                        <FormControl size="md">
                            <FormControlLabel>
                                <FormControlLabelText>Nama Buku</FormControlLabelText>
                            </FormControlLabel>
                            <Input size="lg" variant="outline" className="rounded-xl" >
                                <InputField value={value} onChangeText={onChange} />
                            </Input>
                        </FormControl>
                        <Button onPress={handleClose} className="bg-blue-500 rounded-xl w-full" size="md" variant="solid" action="primary">
                            <ButtonText>Save</ButtonText>
                        </Button>
                    </VStack>
                </ActionsheetContent>
            </KeyboardAvoidingView>
        </Actionsheet>
    )
}

export default ActionForm;
