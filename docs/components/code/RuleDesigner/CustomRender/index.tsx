import { RuleDesigner } from '../../../../../src';

import { fieldDataList } from '../mock';
import SwitchGroup from './SwitchGroup';


export default () => {
  const renderValueCom = (Component, config) => {
    return (
      <SwitchGroup
        options={[
          { label: '自定义', value: 'custom' },
          {
            label: '系统变量',
            value: 'system',
            treeData: [
              {
                label: '当前用户',
                value: '${_SESSION_PERSON}',
              },
              {
                label: '当前用户所在部门',
                value: '${_SESSION_DEPARTMENT}',
              },
              {
                label: '当前用户所在公司',
                value: '${_SESSION_COMPANY}',
              },
            ],
          },
        ]}
        baseComponent={Component}
        {...config}
      />
    );
  };

  return (
    <RuleDesigner
      fieldList={fieldDataList}
      renderValueCom={renderValueCom}
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
              value: ['465456546'],
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
                  value: [213],
                },
              },
              {
                type: 'REGULAR',
                rule: {
                  column: 'bb',
                  dataType: 'long',
                  operator: 'in_range',
                  value: [321, 321313],
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
                      // value: ['2024/03/11 14:06:31'],
                    },
                  },
                  {
                    type: 'REGULAR',
                    rule: {
                      column: 'dd',
                      dataType: 'datetime',
                      operator: 'in_range',
                      // value: ['2024/03/11 14:06:39', '2024/03/11 14:06:44'],
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
                          value: [1332312],
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
};
