module.exports = {
    transpileDependencies: [
        'vuetify'
    ],
    "pluginOptions": {
        "electronBuilder": {
            "nodeIntegration": true, // this may or may not be necessary - you can try without it
            externals: ['node-forge', 'win-ca'] // this excludes the node-pty from the front end
        }
    }
}