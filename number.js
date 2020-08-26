import _isNumber from 'lodash/isNumber';
/**
 * 数值千分位逗号分隔（小数不分隔），超过指定小数位数会被四舍五入
 * @param {number} num
 * @returns {string}
 */
export function thousandsSeparators(num, maximumFractionDigits = 3) {
  if (!_isNumber(num) || Number.isNaN(num)) return '';

  return new Intl.NumberFormat(undefined, { maximumFractionDigits }).format(num);
}

/**
 * Truncate extra decimals
 *  e.g.
 *    100.126, 0 => 100
 *    100.126, 2 => 100.12
 *    100.126, 4 => 100.126
 *    -100.126, 4 => -100.126
 * @param {number} num
 * @param {number} n
 * @returns {number}
 */
export function decimalTruncation(num, n = 0) {
  if (!_isNumber(num)) return Number.NaN;
  if (n === 0) return num | 0;
  return Math.floor(num * 10 ** n) / 10 ** n;
}

/**
 * format thousands number
 * @param {number} num
 * @param {boolean} [allowNegativeNumber=true] - if false, it returns 0 if num is negative
 * @param {number} [decimalDigits=3] - truncation occurs when the maximum decimal number is exceeded
 * @returns {string} return '-' if not number
 */
export function showNumber(num, allowNegativeNumber = true, decimalDigits = 3) {
  const truncatedNumber = decimalTruncation(num, decimalDigits);
  return (
    thousandsSeparators(
      allowNegativeNumber ? truncatedNumber : Math.max(truncatedNumber, 0),
      decimalDigits,
    ) || '-'
  );
}

/**
 * 显示固定N位小数，末尾截断（而非四舍五入）
 * @param {number} num
 * @param {number} decimal 与P网一直，8位小数
 */
export function showNumberDecimal(num, decimal = 8) {
  if (!_isNumber(num)) return '-';
  // 注意不能直接使用 `num.toFixed(decimal)` ,它会四舍五入，不满足要求！
  const isNaNNum = (Number.parseInt(num * 10 ** decimal) / 10 ** decimal).toFixed(decimal);
  if (isNaN(isNaNNum)) {
    return 0;
  } else {
    return isNaNNum;
  }
}
