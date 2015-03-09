var APP = APP || {};
APP.DB = (function() {
    var db,
        cfg = {
            name: "Twitter.db",
            version: 3,
            description: "Twitter database",
            size: 1 * 1024 * 1024
        };
    var request = indexedDB.open(cfg.name, cfg.version);
    var init = function(success) {
        if (!db) {
            request.addEventListener('success', function(e) {
                console.log('database' + cfg.name + 'ok');
                console.log(e);
                db = e.target.result;
                success();

            });

            request.addEventListener('upgradeneeded', function(e) {
                console.log('updating database');
                db = e.target.result;
                var tweets = db.createObjectStore('tweets', {
                    keyPath: 'id',
                    autoIncrement: false
                });
                console.log(tweets);
            });

            request.addEventListener('error', function(e) {
                console.log('error opening' + cfg.name + 'database');
            });

        } else {
            success();
        }

    };

    var insert = function(tweet) {
        init(function() {
            var transaction = db.transaction(['tweets'], "readwrite");
            var store = transaction.objectStore('tweets');
            var request = store.add(tweet);
        });

    };
    var get = function(id,success){
    	init(function() {
            var transaction = db.transaction(['tweets'], "readonly");
            var store = transaction.objectStore('tweets');
            var getRequest = store.get(id);
            getRequest.addEventListener('success',function(e){
            	success(e.target.result);

            });
        });

    };
    return {
        insert: insert,
        get:get
    };

})();
