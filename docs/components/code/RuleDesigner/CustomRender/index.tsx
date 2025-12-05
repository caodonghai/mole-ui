import { RuleDesigner, IRuleDesignerProps } from 'mole-ui';
import _ from 'lodash-es';

import { fieldDataList } from '../mock';
import { IValueSwitchGroup } from './interface';
import SwitchGroup from './SwitchGroup';
import { switchGroupConfigs } from './const';
import { useMemo } from 'react';


interface ICustomRenderProps extends IRuleDesignerProps {
  valueSwitctGroup?: IValueSwitchGroup[];
  filterByDataType?: boolean;
  /**
   * 隐藏切换组件
   */
  hiddenSwitchGroup?: boolean;
}

export default (props: ICustomRenderProps) => {

  const {
    valueSwitctGroup = [],
    hiddenSwitchGroup,
    filterByDataType = true,
    ...rest
  } = props;


  const switchOptions = useMemo(
    () => [
      ...valueSwitctGroup,
      { label: '自定义', value: 'custom' },
      ...switchGroupConfigs,
    ],
    [valueSwitctGroup],
  );

  const renderValueCom = (Component, config) => {
    return (
      <SwitchGroup
        options={switchOptions}
        filterByDataType={filterByDataType}
        baseComponent={Component}
        hiddenSwitchGroup={hiddenSwitchGroup}
        fillDefaultValue={rest.fillDefaultValue}
        {...config}
      />
    );
  };

  return (
    <RuleDesigner
      fieldList={fieldDataList}
      disabledField
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
