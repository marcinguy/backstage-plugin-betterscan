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
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { BetterscanFetchPostureComponent } from '../BetterscanFetchPostureComponent';

export const BetterscanComponent = () => (
  <Page themeId="tool">
    <Header title="Welcome to Betterscan!" subtitle="Security Automation Software">
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="Security Posture">
        <SupportButton>A description of your plugin goes here.</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="Security Posture">
            <Typography variant="body1">
              Below you can see project scanned with Betterscan.io platform and badges
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>
          <BetterscanFetchPostureComponent />
        </Grid>
      </Grid>
    </Content>
  </Page>
);
