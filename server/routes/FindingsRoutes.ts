/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { IRouter } from 'opensearch-dashboards/server';
import { schema } from '@osd/config-schema';
import { NodeServices } from '../models/interfaces';
import { API } from '../utils/constants';

export function setupFindingsRoutes(services: NodeServices, router: IRouter) {
  const { findingsService } = services;

  router.get(
    {
      path: `${API.GET_FINDINGS}`,
      validate: {
        query: schema.object({
          detectorType: schema.maybe(schema.string()),
          detectorId: schema.maybe(schema.string()),
          sortOrder: schema.maybe(schema.string()),
          size: schema.maybe(schema.number()),
        }),
      },
    },
    findingsService.getFindings
  );
}
