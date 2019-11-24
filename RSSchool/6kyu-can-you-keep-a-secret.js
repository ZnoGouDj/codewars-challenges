// There's no such thing as private properties on a coffeescript object! But, maybe there are?

// Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

// getSecret() which returns the secret
// setSecret() which sets the secret
// obj = createSecretHolder(5)
// obj.getSecret() # returns 5
// obj.setSecret(2)
// obj.getSecret() # returns 2

class obj {
    constructor(secret) {
        this.sec = secret;
    }

    getSecret() {
        return this.sec;
    }

    setSecret(val) {
        this.sec = val;
    }
}

function createSecretHolder(secret) {
    let x = new obj(secret);
    return x;
}

//top
function createSecretHolder(secret) {
    return {
        getSecret: function () { return secret; },
        setSecret: function (v) { secret = v; }
    };
}

//top2
function createSecretHolder(secret) {
    var _secret = secret;
    return {
        setSecret: function (s) {
            _secret = s;
        },
        getSecret: function () {
            return _secret;
        }
    };
}
