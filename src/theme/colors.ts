export enum TextColors {
  text_primary = 'text_primary',
  text_secondary = 'text_secondary',
  text_On_Dark = 'text_On_Dark',
}

type ColorOptions<T extends string | number | symbol> = {
  [key in T]: string;
};

// TYPE ===> [key in TextColors]: string;
const textColors: ColorOptions<keyof typeof TextColors> = {
  text_primary: '#000000',
  text_secondary: '#5A6572',
  text_On_Dark: '#FFFFFF',
};

export enum BackgroundColors {
  mainColor = 'mainColor',
}

type BackgroundOptions<T extends string | number | symbol> = {
  [key in T]: string;
};

const backgroundColors: BackgroundOptions<keyof typeof BackgroundColors> = {
  mainColor: '#007567',
};

export const colors = {
  textColors,
  backgroundColors,
};
