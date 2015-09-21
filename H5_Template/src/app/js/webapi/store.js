var baobab = require('./baobab');
var ds = require('./ds');
var Promise = require('native-promise-only');
var _ = {
    findIndex: require('lodash/array/findIndex'), //索引值
    first: require('lodash/array/first'),   // 输出第一个元素
    last: require('lodash/array/last')     // 输出最后一个元素
};

ds.getLocales().then(function (d) {
    console.log(d)
});

exports.data = baobab;


exports.findIndex = function findIndex(wid) {
    return _.findIndex(store.get('details'), function (detail) {
        return detail.id == wid;
    });
};
exports.indexFromLast = function indexFromLast(wid) {
    var index = findIndex(wid),
        len = idsLength();
    if (index === -1) {
        return len;
    }
    return len - index - 1;
};
exports.length = function idsLength() {
    return store.get('details').length;
};
var LOAD_THRESHOLD_NUM = 5;
exports.loadIds = function loadIds(cid) {
    var ids = store.get('ids'),
        unLoadedIds = _getUnloadedWids(),
        params = {
            cid: cid
        },
        loadIdsPromise;
    if (ids.length === 0) {
        params.up = 1;
    } else {
        params.id = ids[ids.length - 1];
    }
    if (!loadIds.loading) {
        loadIds.loading = true;
        if (unLoadedIds.length <= LOAD_THRESHOLD_NUM) {
            loadIdsPromise = ds.getIds(params).then(function (ids) {
                store.select('ids').push(ids);
                store.commit();
            });
        } else {
            loadIdsPromise = Promise.resolve();
        }
        return loadIdsPromise.then(function () {
            var unLoadedIds = _getUnloadedWids().slice(0, LOAD_THRESHOLD_NUM);
            return unLoadedIds.map(function (wid) {
                return ds.getDetail(wid);
            }).reduce(function (s, p) {
                return s.then(function () {
                    return p.then(function (detail) {
                        store.select('details').push(detail);
                    });
                })
            }, Promise.resolve());
        }).then(function () {
            loadIds.loading = false;
        });
    }
}

function _getUnloadedWids(ids, details) {
    var ids = store.get('ids'),
        details = store.get('details'),
        lastDetail = _.last(details),
        lastLoadedId = lastDetail ? lastDetail.id : undefined,
        idx = _.findIndex(ids, function (id) {
                return id == lastLoadedId;
            }) + 1;
    return ids.slice(idx);
}