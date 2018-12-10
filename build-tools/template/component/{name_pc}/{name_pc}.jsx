import React{{#if functional}}{{else}}, { Component }{{/if}} from 'react';
import styles from './{{name_pc}}.module.scss';

{{#if functional}}
const {{name_pc}} = () => (
  <div className={styles.{{name_cc}} }>{{name_pc}}</div>
);
{{else}}
class {{name_pc}} extends Component {
  render() {
    return <div className={styles.{{name_cc}} }>{{name_pc}}</div>;
  }
}
{{/if}}

{{name_pc}}.propTypes = {};

export default {{name_pc}};
