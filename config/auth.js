module.exports = {
    'facebookAuth' : {
        'clientID'      : '327203661179854',
        'clientSecret'  : 'tagit',
        'callbackURL'     : 'http://localhost:5000/api/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'
    },
    'googleAuth' : {
        'clientID'         : '317827366745-tkf2ndf7ujaeur4mu26bvi5u4l2ts6li.apps.googleusercontent.com',
        'clientSecret'     : 'tagit',
        'callbackURL'      : 'http://localhost:5000/auth/google/callback'
    }
};