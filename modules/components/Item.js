import React, { Component, PropTypes } from 'react'

export default class Item extends Component {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}>
        {this.props.text}
      </li>
    )
  }
}

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  closed: PropTypes.bool.isRequired
}
