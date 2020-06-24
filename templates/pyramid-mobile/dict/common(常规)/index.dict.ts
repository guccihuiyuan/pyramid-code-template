import {IDict} from "@/dicts/index";

// 组织机构类型
export enum E{{fileName}} {
  EXAMPLE1 = '1',
  EXAMPLE2 = '2'
}
export const {{fileName}}: IDict[] = [
  {
    value: E{{fileName}}.EXAMPLE1,
    label: '示例一',
  },
  {
    value: E{{fileName}}.EXAMPLE2,
    label: '示例二',
  }
];
