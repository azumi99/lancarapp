import "expo-router";

declare module "expo-router" {
    export function useRouter(): {
        push(path: string): void;
        replace(path: string): void;
        back(): void;
    };
}
