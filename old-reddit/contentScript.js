function navigateToOldReddit() {
    let url = window.location.href;
    if (url.indexOf('www') > -1) {
        url = url.replace('www', 'old');
        window.location.assign(url);
    }
}
navigateToOldReddit();