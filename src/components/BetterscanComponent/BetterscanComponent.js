"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetterscanComponent = void 0;
/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const core_components_1 = require("@backstage/core-components");
const BetterscanFetchPostureComponent_1 = require("../BetterscanFetchPostureComponent");
const BetterscanComponent = () => (<core_components_1.Page themeId="tool">
    <core_components_1.Header title="Welcome to Betterscan!" subtitle="Security Automation Software">
      <core_components_1.HeaderLabel label="Owner" value="Team X"/>
      <core_components_1.HeaderLabel label="Lifecycle" value="Alpha"/>
    </core_components_1.Header>
    <core_components_1.Content>
      <core_components_1.ContentHeader title="Security Posture">
        <core_components_1.SupportButton>A description of your plugin goes here.</core_components_1.SupportButton>
      </core_components_1.ContentHeader>
      <core_1.Grid container spacing={3} direction="column">
        <core_1.Grid item>
          <core_components_1.InfoCard title="Security Posture">
            <core_1.Typography variant="body1">
              Below you can see project scanned with Betterscan.io platform and badges
            </core_1.Typography>
          </core_components_1.InfoCard>
        </core_1.Grid>
        <core_1.Grid item>
          <BetterscanFetchPostureComponent_1.BetterscanFetchPostureComponent />
        </core_1.Grid>
      </core_1.Grid>
    </core_components_1.Content>
  </core_components_1.Page>);
exports.BetterscanComponent = BetterscanComponent;
