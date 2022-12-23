/** 下两个方法，设置输入框字符限制及显示，普通输入框默认限长50，并不显示字数
 *  textarea输入框默认显示限制字数
 * */

export function defMaxlength(type, maxlength) {
  if (maxlength) {
    return maxlength;
  } else {
    if (!type || type === "text" || type === "input" || type === "number") {
      return 50;
    }
  }
}

export function defShowWordLimited(type, showWordLimited) {
  return showWordLimited || type === "textarea";
}
