import React, { Component } from 'react'
import loading from './loading.gif'

export class LoadingSpinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={loading} alt={loading} height={"30px"} />
      </div>
    )
  }
}

export default LoadingSpinner
