#import "RCTCustomWebViewManager.h"
#import "RCTCustomWebView.h"

@interface RCTCustomWebViewManager ( )<RCTWebViewDelegate>

@end

@implementation RCTCustomWebViewManager{}

RCT_EXPORT_MODULE()

- (UIView *)view
{
    RCTCustomWebView *webView = [RCTCustomWebView new];
    webView.delegate = self;
    return webView;
}

@end