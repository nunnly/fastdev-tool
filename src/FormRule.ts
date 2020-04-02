/**
 * @description 继承自 Array , 快速添加认证规则工具
 */
export class FormRule extends Array {
  validName: string = "";
  constructor(validName: string = "") {
    super();
    this.validName = validName;
  }

  /**
   * @description 添加必填校验到当前对象, 子类可以覆盖该方法
   */
  required() {
    this.push({
      required: true,
      message: `${this.validName}不能为空`
    });
    return this;
  }

  /**
   * @description 限制输入长度, 固定当前字段的长度
   * @param length
   */
  len(length: number) {
    this.push({
      len: length,
      message: `${this.validName} 长度必须等于 ${length}`
    });
    return this;
  }

  /**
   * @description 定义当前字段的最大长度
   * @param length
   */
  max(length: number) {
    this.push({
      max: length,
      message: `${this.validName}最大长度不超过${length}`
    });
    return this;
  }

  /**
   * @description 定义当前字段的最小长度
   */
  min(length: number) {
    this.push({
      min: length,
      message: `${this.validName}最小长度不少于${length}`
    });
    return this;
  }

  /**
   * @description 定义当前字段是枚举类型, 只能输入/选择其中的一种
   * @param list
   */
  enum(list: any[]) {
    this.push({
      type: "enum",
      enum: list,
      message: `${this.validName}只能是 ${list.toString()} 中的一种`
    });
    return this;
  }
}

export function rule(name: string): FormRule {
  return new FormRule(name);
}
