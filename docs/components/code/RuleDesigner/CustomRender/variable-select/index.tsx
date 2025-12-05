import React, { useEffect } from 'react'
import { TreeSelect } from 'antd'
import { TreeSelectProps } from 'antd/es/tree-select'
import * as _ from 'lodash-es'

import './index.scss'

const getCurData = (list = [], value, key = 'value', childKey = 'children'): any => {
  let curData
  _.forEach(list, (item) => {
    if (curData) return
    if (item[key] === value) {
      curData = item
    }
    if (item?.[childKey]) {
      if (getCurData(item?.[childKey], value, key, childKey)) {
        curData = getCurData(item?.[childKey], value, key, childKey)
      }
    }
  })
  return curData
}
interface IVariableSelectProps extends TreeSelectProps<any> {
  doubleSelect?: boolean
  curValues?: any
  fillDefaultValue?: boolean
  treeData?: any[]
}

const setDeletItemForTree = (value, treedata) => {
  if (!value) return treedata
  const tree = _.cloneDeep(treedata)
  if (value.includes(':')) {
    const parantValue = value.split(':')[0]
    const subValue = value.split(':')[1]
    const item = _.find(tree, (t) => t.value === parantValue)
    if (item) {
      if (!_.find(item.children, (c) => c.value === value)) {
        item.children.push({ label: `[${subValue}]已删除`, value, disabled: true })
      }
    } else {
      tree.push({ label: `[${value}]已删除`, value, disabled: true })
    }
  } else {
    if (!_.find(tree, (c) => c.value === value)) {
      tree.push({ label: `[${value}]已删除`, value, disabled: true })
    }
  }
  return tree
}

export const VariableSelect = (props: IVariableSelectProps) => {
  const { onChange, value, doubleSelect = false, treeData = [], curValues = {}, fillDefaultValue, ...rest } = props

  const handlerChange = (v, index) => {
    let nextV = value ?? []

    nextV[index] = v

    nextV = nextV?.some((ne) => !_.isNil(ne)) ? nextV : []

    onChange?.(nextV as any, null as any, null as any)
  }

  const [isDelete, setIsDelete] = React.useState<boolean>(false)
  
  useEffect(() => {
    if (value !== undefined) {
      setIsDelete(!!(!getCurData(treeData as any, value?.[0], 'value', 'children')))
    }
  }, [value?.[0]])

  useEffect(() => {
    if (value === undefined && treeData && treeData.length === 1 && fillDefaultValue) {
      if (!treeData[0].disabled) {
        onChange?.([treeData[0].value] as any, null as any, null as any)
      } else if (treeData[0]?.children?.length === 1) {
        onChange?.([treeData[0].children?.[0]?.value] as any, null as any, null as any)
      }
    }
  }, [curValues.column])

  const newTreeData = setDeletItemForTree(value?.[0], treeData)
  return (
    <div style={{ display: 'flex' }}>
      <TreeSelect
        showSearch
        treeNodeFilterProp="label"
        className={isDelete ? 'tree-select-delete' : ''}
        style={{ width: 205 }}
        popupClassName="variable-select-tree-popup"
        popupMatchSelectWidth
        value={value?.[0]}
        onChange={(v) => handlerChange(v, 0)}
        onClear={() => onChange?.(undefined as any, null as any, null as any)}
        treeData={newTreeData}
        maxTagCount={2}
        maxTagTextLength={1}
        {...rest}
      />
      {!!doubleSelect && (
        <>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              width: 20,
              justifyContent: 'center',
            }}
          >
            ~
          </span>
          <TreeSelect
            showSearch={{
              treeNodeFilterProp: 'label',
            }}
            className={isDelete ? 'tree-select-delete' : ''}
            style={{ width: 205 }}
            classNames={{
              popup: {
                root: 'variable-select-tree-popup',
              },
            }}
            popupMatchSelectWidth
            value={value?.[1]}
            treeData={newTreeData}
            onChange={(v) => handlerChange(v, 1)}
            onClear={() =>
              onChange?.(undefined as any, null as any, null as any)
            }
            maxTagCount={2}
            maxTagTextLength={1}
            {...rest}
          />
        </>
      )}
    </div>
  );
}

export default VariableSelect
