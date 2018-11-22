import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { AUTH} from '../actions/auth';

export class User extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <form>
          <input onChange={(e) => this.setState({name: e.target.value})}/>
        </form>
        <button onClick={() => this.props.User({name: this.state.name})}>Click me</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  User : (userData) => AUTH(userData)
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
