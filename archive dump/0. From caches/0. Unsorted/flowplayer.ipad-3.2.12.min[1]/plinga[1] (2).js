// use js inheritance to ease diff platforms

var HV_INIT_DO = false;

HV = {
    me: {},
    friendIds: new Array(),
    friendsArr: new Array(),
    verifyLoaded: null,
    flash_need_refresh: false,
    simple_request: function(url, post_data, callback, dataType)
    {
        $.ajax({
            type: "POST",
            url: url,
            data: post_data,
            dataType: dataType,
            success: callback
        });
    },
    init: function()
    {
        HV.getOwnerData();
        HV.getFriends();
    },
    loadGame: function(flashUrl, flashVars)
    {
        var params = {
            quality: "high",
            wmode: "transparent",
            allowscriptaccess: "always",
            allowFullScreen: "true",
            menu: "false"
        };

        var attributes = {
            id: "flashcontent"
        };
        swfobject.embedSWF(flashUrl, "flashcontent", "760", "600", "9.0.0", "", flashVars, params, attributes);
    },
    reload: function()
    {
        //HV.load_flash_content();
        plingaRpc.reload();
    },
    // 发新鲜事的方法
    publish_feed: function(args, _callback)
    {
        var bundleData = {};

        bundleData["title"] = args.title || feedDefaultTitle;
        bundleData["body"] = args.body || feedDefaultBody;

        plingaRpc.post(bundleData);
    },
    send_notice: function(args, _callback)
    {
        var bundleData = {};

        bundleData["title"] = args.title || feedDefaultTitle;
        bundleData["body"] = args.body || feedDefaultBody;

        plingaRpc.sendMessage(bundleData);
    },
    sendActivity: function(args, _callback)
    {
        HV.publish_feed(args, _callback);
    },
    getOwnerData: function()
    {
        var ownerData = plingaRpc.getOwner();
        var uid = ownerData.uid;
        if (ownerData.guest == true) {
            uid = "guest." + uid;
        }
        HV.me = {"uid": uid, "name": ownerData.firstname, "pic": ownerData.thumbnailurl};

        return HV.me;
    },
    getFriends: function()
    {
        var datas = plingaRpc.getFriends();
        var friendIds = [];
        var friendsData = [];

        friendsData.push(HV.getOwnerData());

        for (var i in datas)
        {
            friendIds.push(datas[i].uid);
            friendsData.push({"uid": datas[i].uid, "name": datas[i].firstname, "pic": datas[i].thumbnailurl});
        }

        HV.friendIds = friendIds;
        HV.friendsData = friendsData;
    },
    showFriends: function() {
        plingaRpc.invite();
    },
    camera: function(pic, message)
    {
        var args = {};
        args.title = "";
        args.body = message;
        args.src = pic;

        HV.publish_feed(args);
    },
    showPayPage: function()
    {
        plingaRpc.initCoins();
    },
    showGameAd: function(obj) {
        var level = obj.level || 0;
        var playtime = obj.times * 5 || 0;
        plingaRpc.requestOnGameAd({level: level, playTime: playtime});
    }
};
function plingaRpc_pauseGame() {
    var payflash = getFlashMovieObject('flashcontent');
    if ((payflash != "undefined" && null == payflash.pauseSound)) {
    }
    var method = 'pauseSound';
    try {
        execFlashCallback(method, true);
    } catch (ex) {
        return 0;
    }
    return 1;
}
function plingaRpc_resumeGame() {
    var payflash = getFlashMovieObject('flashcontent');
    if ((payflash != "undefined" && null == payflash.resumeSound)) {
    }
    var method = 'resumeSound';
    try {
        execFlashCallback(method, true);
    } catch (ex) {
        return 0;
    }
    return 1;
}
