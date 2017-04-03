var config = {
    aws: {
        key: '<YOUR-KEY-HERE>',
        secret: '<YOUR-SECRET-HERE>',
        region: 'us-east-1',
        s3: {
            production: 'example.com',
            development: 'dev.example.com',
            staging: 'staging.example.com',
            rootFilePath: '/'
        }
    },
    api: {
        base_url: 'http://localhost:3001/'
    }
};

module.exports = config;
