export type Mode = 'encoding' | 'decoding';

export interface AppArguments {
    mode: Mode;
    imagePath: string;
    outputFileName: string;
    pathMessage?: string;
    directMessage?: string;
}

export type ArgumentName = keyof AppArguments;
