import React, { Component, PropTypes } from 'react'
import {
    WebView,
    requireNativeComponent,
    NativeModules
} from 'react-native'

const { CustomWebViewManager } = NativeModules;

export default class CustomWebView extends Component {
    static propTypes = {
        ...WebView.propTypes,
        finalUrl: PropTypes.string,
        onNavigationCompleted: PropTypes.func,
    };

    static defaultProps = {
        finalUrl: 'https://www.naver.com/',
    };

    _onNavigationCompleted = event => {
        const { onNavigationCompleted } = this.props;
        onNavigationCompleted && onNavigationCompleted(event);
    };

    render() {
        return (
            <WebView
                {...this.props}
                nativeConfig={{
                    component: RCTCustomWebView,
                    props: {
                        finalUrl: this.props.finalUrl,
                        onNavigationCompleted: this._onNavigationCompleted,
                    },
                    viewManager: CustomWebViewManager,
                }}
            />
        );
    }
}
const RCTCustomWebView = requireNativeComponent(
    'RCTCustomWebView',
    CustomWebView,
    {
        ...WebView.extraNativeComponentConfig,
        nativeOnly: {
            ...WebView.extraNativeComponentConfig.nativeOnly,
            onScrollToBottom: true,
        },
    },
);