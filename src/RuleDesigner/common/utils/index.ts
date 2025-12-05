import { IBaseNames } from '../interface'

export const getCurrDepthByPathnames = (baseName: IBaseNames) => baseName.filter((i) => !isNaN(Number(i))).length
