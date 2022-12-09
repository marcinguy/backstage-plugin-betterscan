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
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableColumn, Progress } from '@backstage/core-components';
import { useApi, configApiRef } from '@backstage/core-plugin-api';
import Alert from '@material-ui/lab/Alert';
import useAsync from 'react-use/lib/useAsync';

const useStyles = makeStyles({
  badge: {
  },
});

type Project = {
  description: string;
  permalink: string;
};

type DenseTableProps = {
  projects: Project[];
};

export const DenseTable = ({ projects }: DenseTableProps) => {
  const classes = useStyles();

  const columns: TableColumn[] = [
    { title: 'Project', field: 'description' },
    { title: 'Badge', field: 'badge' },
  ];
  const config = useApi(configApiRef);
  const backendUrl = config.getString('backend.baseUrl');
  const data = projects.map(project => {
    return {
      description: project.name,
      badge: (React.createElement("img", { src: backendUrl+"/api/proxy/betterscan/api/v1/project/" + project.permalink + "/badge.svg", className: classes.badge }))

    };
  });

  return (
    <Table
      title="Your Projects"
      options={{ search: true, paging: true }}
      columns={columns}
      data={data}
    />
  );
};
export const BetterscanFetchPostureComponent = () => {
  const config = useApi(configApiRef); 
  const backendUrl = config.getString('backend.baseUrl');
  const url = backendUrl + "/api/proxy/betterscan/api/v1/projects"
  const { value, loading, error } = useAsync(async (): Promise<Project[]> => {
    const response = await fetch(url);
    const data = await response.json();
    return data.projects;
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return <DenseTable projects={value || []} />;
};
