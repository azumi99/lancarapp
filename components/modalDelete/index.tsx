import { Box } from "@/components/ui/box"
import { Button, ButtonText } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { HStack } from "@/components/ui/hstack"
import {
    Modal,
    ModalBackdrop,
    ModalBody,
    ModalContent,
    ModalHeader
} from "@/components/ui/modal"
import React from "react"

interface ModalDeleteProps {
    showModal: boolean
    setShowModal: (visible: boolean) => void
    action?: () => void;
}
const ModalDelete: React.FC<ModalDeleteProps> = ({ showModal, setShowModal, action }) => {
    return (
        <Modal
            isOpen={showModal}
            onClose={() => {
                setShowModal(false)
            }}
            size="md"

        >
            <ModalBackdrop />
            <ModalContent className="rounded-2xl">
                <ModalHeader>
                    <Heading size="md" className="text-typography-950">
                        Hapus Transaksi ini?
                    </Heading>
                    {/* <ModalCloseButton>
                        <Icon
                            as={CloseIcon}
                            size="md"
                            className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
                        />
                    </ModalCloseButton> */}
                </ModalHeader>
                <ModalBody>
                    {/* <Text size="sm" className="text-typography-500">
                        Elevate user interactions with our versatile modals. Seamlessly
                        integrate notifications, forms, and media displays. Make an impact
                        effortlessly.
                    </Text> */}
                </ModalBody>
                <HStack className="w-full justify-between">
                    <Box className="w-1/2 pr-1">
                        <Button
                            variant="outline"
                            action="secondary"
                            onPress={() => setShowModal(false)}
                            className="w-full rounded-xl"
                        >
                            <ButtonText>Tidak, Kembali</ButtonText>
                        </Button>
                    </Box>

                    <Box className="w-1/2 pl-1">
                        <Button
                            onPress={() => setShowModal(false)}
                            className="w-full rounded-xl"
                            action="negative"
                        >
                            <ButtonText>Ya, Hapus</ButtonText>
                        </Button>
                    </Box>
                </HStack>

            </ModalContent>
        </Modal>
    );
};

export default ModalDelete;