/**
 * # Replace keys within a string
 *
 * # Standalone example:
 *
 * ```javascript
 * replaceFormatter('The quick brown fox jumps over the lazy {animal}.', {
 *   animal: 'dog',
 * })
 * ```
 *
 * ## LocalizedText example:
 *
 * ```javascript
 * <LocalizedText
 *   id="translation.selector"
 *   formatters={[
 *     {
 *       formatter: replaceFormatter,
 *       args: {
 *         animal: 'dog',
 *       },
 *     },
 *   ]},
 * />
 * ```
 *
 * @param src The source string that you want to replace the values in
 * @param replacements An object containing the selector and the value for the replacement
 * @returns The source string but with the replaced values
 */
const replaceFormatter = (src, replacements) =>
  Object.keys(replacements).reduce(
    (text, key) => text.replace(new RegExp(`{${key}}`, 'gi'), replacements[key].toString()),
    src,
  );

export default replaceFormatter;
