import React from 'react';
import PropTypes from 'prop-types';
import highlight from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

class CodeExample extends React.Component {

  componentDidMount() {
    highlight.registerLanguage('javascript', javascript);
    highlight.highlightBlock(this.element);
  }

  render() {
    return (
      <pre ref={ref => { this.element = ref }}>
        <code>
          {this.props.children}
        </code>
      </pre>
    );
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
}

export default CodeExample;
