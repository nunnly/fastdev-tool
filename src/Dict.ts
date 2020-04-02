
export interface AOption {
  /**
   * Disable this option
   * @default false
   * @type boolean
   */
  disabled?: boolean;

  /**
   * Same usage as value. If Vue request you to set this property, you can set it to value of option, and then omit value property.
   * @type string
   */
  key: string;

  /**
   * title of Select after select this Option
   * @type string
   */
  title: string;

  /**
   * default to filter with this property
   * @type string | number
   */
  value: string | number;

  /**
   * additional class to option
   * @type string
   */
  class?: string;
}


interface IDict {
  key: string;
  value: string;
  code?: string;
  [key: string]: any;
}

export class Dict {
  dictMap: Map<string, IDict[]> = new Map();
  getDict(dictName: string): IDict[] {
    const dict = this.dictMap.get(dictName);
    if (dict === undefined) {
      throw new Error(`词典${dictName}不存在`);
    } else {
      return dict;
    }
  }
  addDict(dictName: string, dict: IDict[], force: boolean = false): IDict[] {
    if (this.dictMap.has(dictName) && !force) {
      throw new Error(`${dictName} 词典已存在`);
    }
    this.dictMap.set(dictName, dict);
    return dict;
  }
  /**
   * 返回 select 对应的词典options, 方便快速添加
   * @param dictName
   */
  getSelectOptions(dictName: string): AOption[] {
    return this.getDict(dictName).map(v => {
      return {
        title: v.key,
        value: v.value,
        key: v.key
      };
    });
  }

  getDictText(dictName: string, key: string | number): string {
    const dict = this.getDict(dictName).find(v => v.key === key);
    if (dict) {
      return dict.value;
    } else {
      // console.warn(`找不到词典 ${dictName}, key: ${key}`);
      return "";
    }
  }
}
