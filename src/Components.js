import React,{ Component, Fragment }from 'react'
import { connect } from 'react-redux'
import actions from './redux/actions'

class Children extends Component {

    changeText() {
        this.props.dispatch(actions.setText('Novo texto'))
    }
    
    render() {
        return (
            <Fragment>
                <button onClick={() => this.changeText()}>Mudar texto</button>
            </Fragment>
        )
    }
}

const ChildrenConnected = connect()(Children)


class App extends Component {
    render() {
        return (
            <Fragment>
                <h1>{this.props.text}</h1>
                <ChildrenConnected />
            </Fragment>
        )
    }
}

export default connect(state => ({ text: state.text }))(App)

