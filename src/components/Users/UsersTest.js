import {Component} from "react";
import PropTypes from 'prop-types'

const createMarkup = (html) => {
    return {__html: html}
}

class UsersTest extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log(props, state, 'test')
    // }

    constructor(props) {
        super(props);
        this.state = {
            value: 'test'
        }
        this.htmlCode = `<div> Hello world </div>`
        this.updateValue = this.updateValue.bind(this)
    }

    updateValue() {
        this.setState({
            value: 'test1111'
        })
    }

    render() {
        return (
            <>
                <div>{this.props.value} {this.props.name}</div>
                <div>Hello</div>
                <div>{this.state.value}</div>
                <div dangerouslySetInnerHTML={createMarkup(this.htmlCode)}/>
                <button onClick={this.updateValue}>Click me</button>
            </>
        )
    }
}

UsersTest.defaultProps = {
    name: 'Stranger'
};


UsersTest.propTypes = {
    value: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}

export default UsersTest
