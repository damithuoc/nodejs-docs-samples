// Copyright 2015-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

require(`../../system-test/_setup`);

const path = require(`path`);

const cmd = `node hostedmodels.js`;
const cwd = path.join(__dirname, `..`);
const text = `good night`;

test(`should predict`, (t) => {
  return runAsync(`${cmd} "${text}"`, cwd)
    .then((stdout) => {
      t.is(stdout.includes(`Sentiment for "${text}": positive`), true);
    });
});
