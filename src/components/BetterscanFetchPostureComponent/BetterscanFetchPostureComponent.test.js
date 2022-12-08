"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const react_2 = require("@testing-library/react");
const BetterscanFetchPostureComponent_1 = require("./BetterscanFetchPostureComponent");
const msw_1 = require("msw");
const node_1 = require("msw/node");
const test_utils_1 = require("@backstage/test-utils");
describe('BetterscanFetchPostureComponent', () => {
    const server = (0, node_1.setupServer)();
    // Enable sane handlers for network requests
    (0, test_utils_1.setupRequestMockHandlers)(server);
    // setup mock response
    beforeEach(() => {
        server.use(msw_1.rest.get('https://randomuser.me/*', (_, res, ctx) => res(ctx.status(200), ctx.delay(2000), ctx.json({}))));
    });
    it('should render', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, react_2.render)(<BetterscanFetchPostureComponent_1.BetterscanFetchPostureComponent />);
        expect(yield react_2.screen.findByTestId('progress')).toBeInTheDocument();
    }));
});
