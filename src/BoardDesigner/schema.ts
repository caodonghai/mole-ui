import { DragSchema } from './interface';

const dragList: DragSchema[] = [
  {
    title: '1*X',
    list: [
      { key: '12', title: '1x1', column: 1, row: 1 },
      { key: '23', title: '1x2', column: 1, row: 2 },
      { key: '34', title: '1x3', column: 1, row: 3 },
      { key: '45', title: '1x4', column: 1, row: 4 },
    ],
  },
  {
    title: '2*X',
    list: [
      { key: '21', title: '2x1', column: 2, row: 1 },
      { key: '22', title: '2x2', column: 2, row: 2 },
      { key: '23', title: '2x3', column: 2, row: 3 },
      { key: '24', title: '2x4', column: 2, row: 4 },
    ],
  },
  {
    title: '3*X',
    list: [
      { key: '31', title: '3x1', column: 3, row: 1 },
      { key: '32', title: '3x2', column: 3, row: 2 },
      { key: '33', title: '3x3', column: 3, row: 3 },
      { key: '34', title: '3x4', column: 3, row: 4 },
    ],
  },
  {
    title: '4*X',
    list: [
      { key: '41', title: '4x1', column: 4, row: 1 },
      { key: '42', title: '4x2', column: 4, row: 2 },
      { key: '43', title: '4x3', column: 4, row: 3 },
      { key: '44', title: '4x4', column: 4, row: 4 },
    ],
  },
];

export default dragList;
