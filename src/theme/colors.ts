export enum TextColors {
  text_primary = 'text_primary',
  text_secondary = 'text_secondary',
  text_On_Dark = 'text_On_Dark',
}

type ColorOptions<T extends string | number | symbol> = {
  [key in T]: string;
};

//TODO: this will be replaced by newTextColors
// TYPE ===> [key in TextColors]: string;
const textColors: ColorOptions<keyof typeof TextColors> = {
  text_primary: '#212121',
  text_secondary: '#757575',
  text_On_Dark: '#FFFFFF',
};

const newTextColors = {
  primary_color_dark: '#0288D1',
  primary_color_light: '#B3E5FC',
  primary_color: '#03A9F4',
  text_icons: '#FFFFFF',
  accent_color: '#009688',
  divider_color: '#BDBDBD',
  text_primary: '#212121',
  text_secondary: '#757575',
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
  newTextColors,
};
