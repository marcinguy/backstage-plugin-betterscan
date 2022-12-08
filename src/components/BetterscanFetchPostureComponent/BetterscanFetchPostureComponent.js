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
exports.BetterscanFetchPostureComponent = exports.DenseTable = void 0;
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
const styles_1 = require("@material-ui/core/styles");
const core_components_1 = require("@backstage/core-components");
const core_plugin_api_1 = require("@backstage/core-plugin-api");
const Alert_1 = __importDefault(require("@material-ui/lab/Alert"));
const useAsync_1 = __importDefault(require("react-use/lib/useAsync"));
const useStyles = (0, styles_1.makeStyles)({
    badge: {},
});
const DenseTable = ({ projects }) => {
    const classes = useStyles();
    const columns = [
        { title: 'Project', field: 'description' },
        { title: 'Badge', field: 'badge' },
    ];
    const data = projects.map(project => {
        return {
            description: project.name,
            badge: (<img src={"http://localhost:7007/api/proxy/betterscan/api/v1/project/" + project.permalink + "/badge.svg"} className={classes.badge}/>)
        };
    });
    return (<core_components_1.Table title="Your Projects" options={{ search: false, paging: false }} columns={columns} data={data}/>);
};
exports.DenseTable = DenseTable;
const BetterscanFetchPostureComponent = () => {
    const config = (0, core_plugin_api_1.useApi)(core_plugin_api_1.configApiRef);
    const backendUrl = config.getString('backend.baseUrl');
    console.log(backendUrl);
    const { value, loading, error } = (0, useAsync_1.default)(() => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:7007/api/proxy/betterscan/api/v1/projects`);
        const data = yield response.json();
        return data.projects;
    }), []);
    if (loading) {
        return <core_components_1.Progress />;
    }
    else if (error) {
        return <Alert_1.default severity="error">{error.message}</Alert_1.default>;
    }
    return <exports.DenseTable projects={value || []}/>;
};
exports.BetterscanFetchPostureComponent = BetterscanFetchPostureComponent;
