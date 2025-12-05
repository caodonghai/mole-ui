import { RuleDesigner } from 'mole-ui';
import { fieldDataList } from './mock';

export default () => (
  <RuleDesigner
    fieldList={[...fieldDataList].slice(1)}
    required
    initValues={{
      type: 'CONDITION',
      operator: 'and',
      children: [
        {
          type: 'REGULAR',
          rule: {
            column: 'aa',
            dataType: 'string',
            operator: 'eq',
          },
        },
        {
          type: 'CONDITION',
          operator: 'and',
          children: [
            {
              type: 'REGULAR',
              rule: {
                column: 'bb',
                dataType: 'long',
                operator: 'eq',
              },
            },
            {
              type: 'REGULAR',
              rule: {
                column: 'bb',
                dataType: 'long',
                operator: 'in_range',
              },
            },
            {
              type: 'CONDITION',
              operator: 'and',
              children: [
                {
                  type: 'REGULAR',
                  rule: {
                    column: 'dd',
                    dataType: 'datetime',
                    operator: 'eq',
                  },
                },
                {
                  type: 'REGULAR',
                  rule: {
                    column: 'dd',
                    dataType: 'datetime',
                    operator: 'in_range',
                  },
                },
                {
                  type: 'CONDITION',
                  operator: 'and',
                  children: [
                    {
                      type: 'REGULAR',
                      rule: {
                        column: 'ddd',
                        dataType: 'boolean',
                        operator: 'eq',
                      },
                    },
                    {
                      type: 'REGULAR',
                      rule: {
                        column: 'id',
                        dataType: 'double',
                        operator: 'eq',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }}
  />
);
