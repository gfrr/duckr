import React, {PropTypes} from 'react'

Authenticate.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired
}

export default function Authenticate(props) {
  return(
    <div>
      {'Authenticate'}
      <button></button>
      {error ? <p>{error}</p> : null}
    </div>
  )
}
