import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'; // fonction qui permet de connecter un conposant au store
import { AUTH } from '../actions/auth';

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

const mapStateToProps = (state) => ({ // permet de changer les states en props pour les utiliser dans le composant
  ...state // toujours la même écriture
})

const mapDispatchToProps = { // sert a dispacher les actions dans le store et donc changer les states avec les reducers
  User : (userData) => AUTH(userData),
}

export default connect(mapStateToProps, mapDispatchToProps)(User) // connecte le composant au store - prend 2 arguments (toujours les mêmes) : la fonction mapStateToProps, mapDispatchToProps -  Pas obligatoire de les utiliser
