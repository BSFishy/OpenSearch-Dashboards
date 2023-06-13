/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable react/no-danger */

import React, { FunctionComponent } from 'react';

import { RenderingMetadata } from '../types';

interface Props {
  url: RenderingMetadata['uiPublicUrl'];
}

interface FontFace {
  family: string;
  variants: Array<{
    style: 'normal' | 'italic';
    weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    sources: string[];
    unicodeRange?: string;
    format?: string;
  }>;
}

export const Fonts: FunctionComponent<Props> = ({ url }) => {
  const sourceSans3: FontFace = {
    family: 'Source Sans 3',
    variants: [
      {
        style: 'italic',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqauLYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'italic',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqY-LYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'italic',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqa-LYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'italic',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqZOLYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'italic',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqaOLYxnN18YRxkHA.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'italic',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqaeLYxnN18YRxkHA.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'italic',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqZ-LYxnN18YRx.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'italic',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqauLYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'italic',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqY-LYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'italic',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqa-LYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'italic',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqZOLYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'italic',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqaOLYxnN18YRxkHA.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'italic',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqaeLYxnN18YRxkHA.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'italic',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqZ-LYxnN18YRx.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'italic',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqauLYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'italic',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqY-LYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'italic',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqa-LYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'italic',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqZOLYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'italic',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqaOLYxnN18YRxkHA.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'italic',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqaeLYxnN18YRxkHA.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'italic',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqZ-LYxnN18YRx.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'italic',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqauLYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'italic',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqY-LYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'italic',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqa-LYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'italic',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqZOLYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'italic',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqaOLYxnN18YRxkHA.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'italic',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqaeLYxnN18YRxkHA.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'italic',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqZ-LYxnN18YRx.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'italic',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqauLYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'italic',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqY-LYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'italic',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqa-LYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'italic',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqZOLYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'italic',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqaOLYxnN18YRxkHA.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'italic',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqaeLYxnN18YRxkHA.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'italic',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqZ-LYxnN18YRx.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'italic',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqauLYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'italic',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqY-LYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'italic',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqa-LYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'italic',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqZOLYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'italic',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqaOLYxnN18YRxkHA.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'italic',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqaeLYxnN18YRxkHA.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'italic',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqZ-LYxnN18YRx.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'italic',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqauLYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'italic',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqY-LYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'italic',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqa-LYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'italic',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqZOLYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'italic',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqaOLYxnN18YRxkHA.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'italic',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqaeLYxnN18YRxkHA.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'italic',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqZ-LYxnN18YRx.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'italic',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqauLYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'italic',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqY-LYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'italic',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqa-LYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'italic',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqZOLYxnN18YRxkHA.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'italic',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqaOLYxnN18YRxkHA.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'italic',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqaeLYxnN18YRxkHA.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'italic',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpMtKy2OAdR1K-IwhWudF-R3woqZ-LYxnN18YRx.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'normal',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wIaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'normal',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wsaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'normal',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wMaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'normal',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wwaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'normal',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wAaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'normal',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wEaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'normal',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3w8aZejZ5HZV8Q.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'normal',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wIaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'normal',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wsaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'normal',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wMaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'normal',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wwaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'normal',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wAaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'normal',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wEaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'normal',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3w8aZejZ5HZV8Q.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'normal',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wIaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'normal',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wsaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'normal',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wMaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'normal',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wwaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'normal',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wAaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'normal',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wEaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'normal',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3w8aZejZ5HZV8Q.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'normal',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wIaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'normal',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wsaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'normal',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wMaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'normal',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wwaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'normal',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wAaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'normal',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wEaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'normal',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3w8aZejZ5HZV8Q.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'normal',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wIaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'normal',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wsaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'normal',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wMaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'normal',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wwaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'normal',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wAaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'normal',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wEaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'normal',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3w8aZejZ5HZV8Q.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'normal',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wIaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'normal',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wsaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'normal',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wMaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'normal',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wwaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'normal',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wAaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'normal',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wEaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'normal',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3w8aZejZ5HZV8Q.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'normal',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wIaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'normal',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wsaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'normal',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wMaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'normal',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wwaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'normal',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wAaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'normal',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wEaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'normal',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3w8aZejZ5HZV8Q.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'normal',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wIaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'normal',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wsaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'normal',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wMaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'normal',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wwaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'normal',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wAaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'normal',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcesans3/v9/nwpStKy2OAdR1K-IwhWudF-R3wEaZejZ5HZV8ZRx.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
    ],
  };
  const sourceCodePro: FontFace = {
    family: 'Source Code Pro',
    variants: [
      {
        style: 'italic',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvZlMIXxw.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'italic',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvQlMIXxw.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'italic',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvYlMIXxw.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'italic',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvXlMIXxw.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'italic',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvblMIXxw.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'italic',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvalMIXxw.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'italic',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvUlMI.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'italic',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvZlMIXxw.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'italic',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvQlMIXxw.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'italic',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvYlMIXxw.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'italic',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvXlMIXxw.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'italic',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvblMIXxw.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'italic',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvalMIXxw.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'italic',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvUlMI.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'italic',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvZlMIXxw.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'italic',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvQlMIXxw.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'italic',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvYlMIXxw.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'italic',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvXlMIXxw.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'italic',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvblMIXxw.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'italic',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvalMIXxw.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'italic',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvUlMI.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'italic',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvZlMIXxw.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'italic',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvQlMIXxw.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'italic',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvYlMIXxw.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'italic',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvXlMIXxw.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'italic',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvblMIXxw.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'italic',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvalMIXxw.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'italic',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvUlMI.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'italic',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvZlMIXxw.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'italic',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvQlMIXxw.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'italic',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvYlMIXxw.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'italic',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvXlMIXxw.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'italic',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvblMIXxw.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'italic',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvalMIXxw.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'italic',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvUlMI.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'italic',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvZlMIXxw.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'italic',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvQlMIXxw.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'italic',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvYlMIXxw.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'italic',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvXlMIXxw.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'italic',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvblMIXxw.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'italic',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvalMIXxw.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'italic',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvUlMI.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'italic',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvZlMIXxw.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'italic',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvQlMIXxw.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'italic',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvYlMIXxw.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'italic',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvXlMIXxw.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'italic',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvblMIXxw.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'italic',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvalMIXxw.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'italic',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvUlMI.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'italic',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvZlMIXxw.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'italic',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvQlMIXxw.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'italic',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvYlMIXxw.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'italic',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvXlMIXxw.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'italic',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvblMIXxw.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'italic',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvalMIXxw.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'italic',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvUlMI.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'normal',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMOvWjMY.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'normal',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlOevWjMY.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'normal',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMevWjMY.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'normal',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPuvWjMY.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'normal',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMuvWjMY.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'normal',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlM-vWjMY.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'normal',
        weight: 200,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPevW.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'normal',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMOvWjMY.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'normal',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlOevWjMY.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'normal',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMevWjMY.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'normal',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPuvWjMY.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'normal',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMuvWjMY.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'normal',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlM-vWjMY.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'normal',
        weight: 300,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPevW.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'normal',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMOvWjMY.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'normal',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlOevWjMY.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'normal',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMevWjMY.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'normal',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPuvWjMY.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'normal',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMuvWjMY.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'normal',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlM-vWjMY.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'normal',
        weight: 400,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPevW.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'normal',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMOvWjMY.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'normal',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlOevWjMY.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'normal',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMevWjMY.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'normal',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPuvWjMY.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'normal',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMuvWjMY.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'normal',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlM-vWjMY.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'normal',
        weight: 500,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPevW.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'normal',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMOvWjMY.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'normal',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlOevWjMY.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'normal',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMevWjMY.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'normal',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPuvWjMY.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'normal',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMuvWjMY.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'normal',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlM-vWjMY.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'normal',
        weight: 600,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPevW.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'normal',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMOvWjMY.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'normal',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlOevWjMY.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'normal',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMevWjMY.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'normal',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPuvWjMY.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'normal',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMuvWjMY.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'normal',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlM-vWjMY.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'normal',
        weight: 700,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPevW.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'normal',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMOvWjMY.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'normal',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlOevWjMY.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'normal',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMevWjMY.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'normal',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPuvWjMY.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'normal',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMuvWjMY.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'normal',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlM-vWjMY.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      {
        style: 'normal',
        weight: 800,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPevW.woff2',
        ],
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
      {
        style: 'normal',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMOvWjMY.woff2',
        ],
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      {
        style: 'normal',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlOevWjMY.woff2',
        ],
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      {
        style: 'normal',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMevWjMY.woff2',
        ],
        unicodeRange: 'U+1F00-1FFF',
      },
      {
        style: 'normal',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPuvWjMY.woff2',
        ],
        unicodeRange: 'U+0370-03FF',
      },
      {
        style: 'normal',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMuvWjMY.woff2',
        ],
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      {
        style: 'normal',
        weight: 900,
        format: 'woff2',
        sources: [
          'https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlM-vWjMY.woff2',
        ],
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
    ],
  };

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        ${[sourceSans3, sourceCodePro]
          .flatMap(({ family, variants }) =>
            variants.map(({ style, weight, format, sources, unicodeRange }) => {
              const src = sources
                .map((source) =>
                  !source.startsWith(url)
                    ? `url('${source}') format('${format || source.split('.').pop()}')`
                    : `local('${source}')`
                )
                .join(', ');

              return `
        @font-face {
          font-family: '${family}';
          font-style: ${style};
          font-weight: ${weight};
          src: ${src};${
                unicodeRange
                  ? `
          unicode-range: ${unicodeRange};`
                  : ''
              }
        }`;
            })
          )
          .join('\n')}
        /*
        Single variable font.

        Note that you may want to do something like this to make sure you're serving
        constant fonts to older browsers:
        html {
          font-family: 'Inter UI', sans-serif;
        }
        @supports (font-variation-settings: normal) {
          html {
            font-family: 'Inter UI var', sans-serif;
          }
        }

        BUGS:
        - Safari 12.0 will default to italic instead of regular when font-weight
          is provided in a @font-face declaration.
          Workaround: Use 'Inter UI var alt' for Safari, or explicitly set
          \`font-variation-settings: 'slnt' DEGREE\`.

        @font-face {
          font-family: 'Inter UI var';
          font-weight: 100 900;
          font-style: oblique 0deg 10deg;
          src:
            url('${url}/fonts/inter_ui/Inter-UI.var.woff2') format('woff2-variations'),
            url('${url}/fonts/inter_ui/Inter-UI.var.woff2') format('woff2');
        }

        'Inter UI var alt' is recommended for Safari and Edge, for reliable italics.

        @supports (font-variation-settings: normal) {
          html {
            font-family: 'Inter UI var alt', sans-serif;
          }
        }

        @font-face {
          font-family: 'Inter UI var alt';
          font-weight: 100 900;
          font-style: normal;
          font-named-instance: 'Regular';
          src:
            url('${url}/fonts/inter_ui/Inter-UI-upright.var.woff2') format('woff2 supports variations(gvar)'),
            url('${url}/fonts/inter_ui/Inter-UI-upright.var.woff2') format('woff2-variations'),
            url('${url}/fonts/inter_ui/Inter-UI-upright.var.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Inter UI var alt';
          font-weight: 100 900;
          font-style: italic;
          font-named-instance: 'Italic';
          src:
            url('${url}/fonts/inter_ui/Inter-UI-italic.var.woff2') format('woff2 supports variations(gvar)'),
            url('${url}/fonts/inter_ui/Inter-UI-italic.var.woff2') format('woff2-variations'),
            url('${url}/fonts/inter_ui/Inter-UI-italic.var.woff2') format('woff2');
        }
        */
      `,
      }}
    />
  );
};
