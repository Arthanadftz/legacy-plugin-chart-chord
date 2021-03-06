"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@superset-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Chord = _interopRequireDefault(require("./Chord"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
const ReactComponent = (0, _core.reactify)(_Chord.default);

const Chord = ({
  className,
  ...otherProps
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, /*#__PURE__*/_react.default.createElement(ReactComponent, otherProps));
};

Chord.defaultProps = {
  otherProps: {}
};
Chord.propTypes = {
  className: _propTypes.default.string.isRequired,
  otherProps: _propTypes.default.objectOf(_propTypes.default.any)
};

var _default = (0, _core.styled)(Chord)`
  .superset-legacy-chart-chord svg #circle circle {
    fill: none;
    pointer-events: all;
  }
  .superset-legacy-chart-chord svg .group path {
    fill-opacity: 0.6;
  }
  .superset-legacy-chart-chord svg path.chord {
    stroke: #000;
    stroke-width: 0.25px;
  }
  .superset-legacy-chart-chord svg #circle:hover path.fade {
    opacity: 0.2;
  }
`;

exports.default = _default;