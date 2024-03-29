type CSSOMString = string;
type FontFaceLoadStatus = 'unloaded' | 'loading' | 'loaded' | 'error';
type FontFaceSetStatus = 'loading' | 'loaded';

interface FontFace extends FontFaceDescriptors {
  new (family: string, source: string | ArrayBuffer, descriptors?: FontFaceDescriptors): FontFace;
  readonly status: FontFaceLoadStatus;
  readonly loaded: Promise<FontFace>;
  variationSettings: CSSOMString;
  display: CSSOMString;
  load(): Promise<FontFace>;
}

interface FontFaceDescriptors {
  family: CSSOMString;
  style: CSSOMString;
  weight: CSSOMString;
  stretch: CSSOMString;
  unicodeRange: CSSOMString;
  variant: CSSOMString;
  featureSettings: CSSOMString;
}

interface FontFaceSet extends Iterable<FontFace> {
  readonly status: FontFaceSetStatus;
  readonly ready: Promise<FontFaceSet>;
  add(font: FontFace): void;
  check(font: string, text?: string): Boolean; // throws exception
  load(font: string, text?: string): Promise<FontFace[]>;
  delete(font: FontFace): void;
  clear(): void;
}

declare global {
  const FontFace: FontFace;

  interface Document {
    fonts: FontFaceSet;
  }
}

export function loadFonts() {
  if (typeof window !== 'undefined') {
    if ('fonts' in document) {
      if (window.sessionStorage.fontsLoaded) {
        document.documentElement.classList.add('fonts-loaded-criteria');
        document.documentElement.classList.add('fonts-loaded-greycliff');
        return;
      }

      document.fonts.load('oblique bold 1em Criteria').then(() => {
        document.documentElement.classList.add('fonts-loaded-criteria');

        document.fonts.load('normal normal 1em GreyCliff').then(() => {
          document.documentElement.classList.add('fonts-loaded-greycliff');

          // Optimization for Repeat Views
          window.sessionStorage.fontsLoaded = true;
        });
      });
    }
  }
}
