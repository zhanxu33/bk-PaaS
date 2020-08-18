/**
 * Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 * Copyright (C) 2017-2019 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

export default {
    name: 'select',
    type: 'bk-select',
    displayName: '下拉选框',
    icon: 'bk-drag-select',
    group: '表单',
    order: 1,
    events: [{
        name: 'selected', tips: '选择列表时调用，多选时，回调参数均为数组（value, option(s)）'
    }, {
        name: 'toggle', tips: '切换下拉折叠状态时调用，回调参数（Boolean）'
    }, {
        name: 'change', tips: '选项发生变化时调用，回调参数（newValue, oldValue）'
    }, {
        name: 'clear', tips: '清空已选项时调用，回调参数（oldValue）'
    }],
    styles: ['size', 'padding', 'margin', 'display', 'font', 'border', 'backgroundColor'],
    props: {
        value: {
            type: ['string', 'array', 'number'],
            val: '',
            tips: '当前被选中的值'
        },
        multiple: {
            type: 'boolean',
            val: true,
            tips: '是否多选'
        },
        'show-select-all': {
            type: 'boolean',
            val: true,
            tips: '是否显示全选选项，仅当开启multiple时生效'
        },
        'scroll-height': {
            type: 'number',
            val: 216,
            tips: '下拉列表滚动高度'
        },
        placeholder: {
            type: 'string',
            val: '',
            tips: '未选择数据时的空白提示'
        },
        disabled: {
            type: 'boolean',
            val: false
        },
        readonly: {
            type: 'boolean',
            val: false
        },
        loading: {
            type: 'boolean',
            val: false,
            tips: '是否加载中'
        },
        clearable: {
            type: 'boolean',
            val: false,
            tips: '是否允许清空'
        },
        searchable: {
            type: 'boolean',
            val: false,
            tips: '是否显示搜索框'
        },
        'search-ignore-case': {
            type: 'boolean',
            val: false,
            tips: '搜索选项时是否忽略大小写'
        },
        'popover-min-width': {
            type: 'number',
            val: 0,
            tips: '设置下拉列表的最小宽度, 默认的列表宽度跟组件保持一致'
        },
        'popover-width': {
            type: 'number',
            val: 0,
            tips: '设置下拉列表的宽度, 默认的列表宽度跟组件保持一致'
        },
        'font-size': {
            type: 'string',
            val: '',
            tips: '设置下拉已选择及列表的字体大小'
        },
        'ext-cls': {
            type: 'string',
            tips: '配置自定义样式类名，传入的类会被加在组件最外层的 DOM 上'
        },
        'ext-popover-cls': {
            type: 'string',
            tips: '配置自定义样式类名，传入的类会被加在下拉菜单的 DOM .bk-select-dropdown-content 上'
        },
        'z-index': {
            type: 'number',
            val: 2500,
            tips: '弹出层的 z-index'
        },
        slots: {
            name: 'bk-option',
            type: ['option', 'remote'],
            remoteValidate (data) {
                if (!Array.isArray(data)) return '返回值需要是数组'
                const errData = data.find((item) => (!item.hasOwnProperty('id') || !item.hasOwnProperty('name')))
                if (errData) return '返回值每个元素需要含有id和name字段'
            },
            val: [
                { id: 1, name: '爬山' },
                { id: 2, name: '跑步' },
                { id: 3, name: '打球' },
                { id: 4, name: '跳舞' },
                { id: 5, name: '健身' },
                { id: 6, name: '骑车' }
            ],
            attrs: [
                { 'key': 'id', 'value': 'id' },
                { 'key': 'name', 'value': 'name' },
                { 'key': 'key', 'value': 'id' }
            ]
        }
    }
}
