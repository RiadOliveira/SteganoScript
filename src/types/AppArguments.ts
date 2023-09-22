export type Mode = 'encoding' | 'decoding';

export interface AppArguments {
    mode: Mode;
    imagePath: string;
    messagePath?: string;
    directMessage?: string;
    help?: true;
}

export type ArgumentName = keyof AppArguments;
