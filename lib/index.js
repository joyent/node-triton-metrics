/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/*
 * Copyright (c) 2018, Joyent, Inc.
 */

/*
 * triton-metrics.
 */

var artedi = require('artedi');

var createMetricsManager = require('./metrics-manager').createMetricsManager;

module.exports = {
    createMetricsManager: createMetricsManager,
    // Expose the bucket generators so the node-triton-metrics user doesn't also
    // need to import artedi.
    exponentialBuckets: artedi.exponentialBuckets,
    linearBuckets: artedi.linearBuckets,
    logLinearBuckets: artedi.logLinearBuckets
};
