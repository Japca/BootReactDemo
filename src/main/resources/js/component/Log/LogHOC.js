import React, {Component} from 'react'

export default function (ComposedComponent) {
    class LogHOC extends Component {
        render() {
            console.info('!!! Before !!!')
            return (
                <ComposedComponent {...this.props}/>
            )
        }
    }
    console.info('!!! After !!!')
    return LogHOC
}
