import React from 'react'

export default class screen extends React.Component {
  render () {
    return (
      <div id={this.props.id}>
        {this.props.cNumber}
      </div>
    )
  }
}
