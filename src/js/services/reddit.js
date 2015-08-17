'use strict';

module.exports = function(shariff) {
    var url = encodeURIComponent(shariff.getURL());
    return {
        popup: true,
        shareText: {
            'de': 'reddit das',
            'en': 'reddit this'
        },
        name: 'reddit',
        faName: 'fa-reddit',
        title: {
            'de': 'Bei reddit teilen',
            'en': 'Share on reddit',
        },
        shareUrl: 'https://www.reddit.com/submit?url=' + url + shariff.getReferrerTrack()
    };
};
