"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@superset-ui/core");

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var _default = {
  controlPanelSections: [{
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [['groupby'], ['columns'], ['metric'], ['adhoc_filters'], ['custom_filters'], ['row_limit']]
  }, {
    label: (0, _core.t)('Chart Options'),
    expanded: true,
    controlSetRows: [['y_axis_format', null], ['color_scheme', 'label_colors']]
  }],
  controlOverrides: {
    y_axis_format: {
      label: (0, _core.t)('Number format'),
      description: (0, _core.t)('Choose a number format')
    },
    groupby: {
      label: (0, _core.t)('Source'),
      multi: false,
      validators: [_core.validateNonEmpty],
      description: (0, _core.t)('Choose a source')
    },
    columns: {
      label: (0, _core.t)('Target'),
      multi: false,
      validators: [_core.validateNonEmpty],
      description: (0, _core.t)('Choose a target')
    }
  }
};
exports.default = _default;