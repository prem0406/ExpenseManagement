export enum TextColors {
  text_primary = 'text_primary',
  text_secondary = 'text_secondary',
}

type ColorOptions<T extends string | number | symbol> = {
  [key in T]: string;
};

// TYPE ===> [key in TextColors]: string;
const textColors: ColorOptions<keyof typeof TextColors> = {
  text_primary: '#FF0000',
  text_secondary: '#5A6572',
};

export const colors = {
  textColors,
};
