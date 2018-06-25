/* jshint maxlen:false */

var config = { // eslint-disable-line no-unused-vars
    hosts: {
        domain: '{{ DOMAIN }}',
        muc: 'conference.{{ DOMAIN }}', // FIXME: use XEP-0030
        focus: 'focus.{{ DOMAIN }}', // defaults to 'focus.ok'
        bridge: 'jitsi-videobridge.{{ DOMAIN }}',
    },
    useNicks: false,
    bosh: '//{{ DOMAIN }}/http-bind', // FIXME: use xep-0156 for that
    clientNode: 'http://jitsi.org/jitsimeet', // The name of client node advertised in XEP-0115 'c' stanza
    
    // Desktop sharing
    // The ID of the jidesha extension for Chrome.
    desktopSharingChromeExtId: '{{ CHROME_EXT_ID }}',
    // Whether desktop sharing should be disabled on Chrome.
    desktopSharingChromeDisabled: {{ CHROME_SHARE_DISABLED }},
    // The media sources to use when using screen sharing with the Chrome
    // extension.
    desktopSharingChromeSources: [ 'screen', 'window', 'tab' ],
    // Required version of Chrome extension
    desktopSharingChromeMinExtVersion: '0.1',
    // Whether desktop sharing should be disabled on Firefox.
    desktopSharingFirefoxDisabled: false,
};
