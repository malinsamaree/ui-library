declare namespace StyleCssNamespace {
  export interface IStyleCss {
    "spinner-wrapper": string;
    spinnerWrapper: string;
  }
}

declare const StyleCssModule: StyleCssNamespace.IStyleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleCssNamespace.IStyleCss;
};

export = StyleCssModule;
