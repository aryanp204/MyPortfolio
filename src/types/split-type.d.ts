declare module 'split-type' {
  interface SplitTypeOptions {
    types?: string;
    tagName?: string;
    lineClass?: string;
    wordClass?: string;
    charClass?: string;
    splitClass?: string;
  }

  export default class SplitType {
    constructor(target: string | Element | NodeList | Array<Element>, options?: SplitTypeOptions);
    lines: HTMLElement[] | null;
    words: HTMLElement[] | null;
    chars: HTMLElement[] | null;
    split(options?: SplitTypeOptions): void;
    revert(): void;
  }
}
