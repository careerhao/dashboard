export const projects = {
    'items':[
    {
        id: '00000000-0000-0000-0000-000000000000',
        name: 'Project1',
        layout: [
            {"x":0,"y":0,"w":4,"h":6,"i":"0"},
            {"x":2,"y":0,"w":4,"h":4,"i":"1"},
            {"x":4,"y":0,"w":3,"h":5,"i":"2"},
        ],
        chartOptions: [
            {
                id: '00000000-0000-0000-0000-000000000000',
                categories: [
                    {   id: '00000001-0000-0000-0000-000000000000',
                        type: 'pie',
                        name: 'Pie Chart1',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-simple.webp?_v_=1627897138964'
                    },
                    {
                        id: '00000002-0000-0000-0000-000000000000',
                        type: 'rose-pie',
                        name: 'Pie Chart2',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-roseType-simple.webp?_v_=1627897138964'
                    }
                ],
                value: 'Pie Chart',
                icon: 'el-icon-pie-chart',
            },
            {
                id: '00000000-0000-0000-0000-000000000002',
                categories: [
                    {
                        id: '00000003-0000-0000-0000-000000000000',
                        type: 'line',
                        name: 'Line Chart',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack.webp?_v_=1627897138964'
                    }
                ],
                value: 'Line Chart',
                icon: 'el-icon-data-line',
            },
            {
                id: '00000000-0000-0000-0000-000000000003',
                categories: [
                    {
                        id: '00000004-0000-0000-0000-000000000000',
                        type: 'bar',
                        name: 'Bar Chart',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-stack.webp?_v_=1627897138964'
                    }
                ],
                value: 'Bar Chart',
                icon: 'el-icon-data-analysis'
            },
        ],
        charts: [
            {
                title: {
                    text: '某站点用户访问来源',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        center: ['50%', '50%'],
                        data: [
                            {value: 1048, name: '搜索引擎'},
                            {value: 735, name: '直接访问'},
                            {value: 580, name: '邮件营销'},
                            {value: 484, name: '联盟广告'},
                            {value: 300, name: '视频广告'}
                        ],
                    }
                ]
            }
        ]
    },
    {
        id: '00000000-0000-0000-0000-000000000001',
        name: 'Jroject2',
        layout: [
            {"x":0,"y":0,"w":4,"h":6,"i":"0"},
            {"x":2,"y":0,"w":4,"h":4,"i":"1"},
            {"x":4,"y":0,"w":3,"h":5,"i":"2"},
        ],
        chartOptions: [
            {
                id: '00000000-0000-0000-0000-000000000000',
                categories: [
                    {   id: '00000001-0000-0000-0000-000000000000',
                        type: 'pie',
                        name: 'Pie Chart1',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-simple.webp?_v_=1627897138964'
                    },
                    {
                        id: '00000002-0000-0000-0000-000000000000',
                        type: 'rose-pie',
                        name: 'Pie Chart2',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-roseType-simple.webp?_v_=1627897138964'
                    }
                ],
                value: 'Pie Chart',
                icon: 'el-icon-pie-chart',
            },
            {
                id: '00000000-0000-0000-0000-000000000002',
                categories: [
                    {
                        id: '00000003-0000-0000-0000-000000000000',
                        type: 'line',
                        name: 'Line Chart',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack.webp?_v_=1627897138964'
                    }
                ],
                value: 'Line Chart',
                icon: 'el-icon-data-line',
            },
            {
                id: '00000000-0000-0000-0000-000000000003',
                categories: [
                    {
                        id: '00000004-0000-0000-0000-000000000000',
                        type: 'bar',
                        name: 'Bar Chart',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-stack.webp?_v_=1627897138964'
                    }
                ],
                value: 'Bar Chart',
                icon: 'el-icon-data-analysis'
            },
        ],
    },
    {
        id: '00000000-0000-0000-0000-000000000002',
        name: 'Prject3',
        layout: [
            {"x":0,"y":0,"w":4,"h":6,"i":"0"},
            {"x":2,"y":0,"w":4,"h":4,"i":"1"},
            {"x":4,"y":0,"w":3,"h":5,"i":"2"},
        ],
        chartOptions: [
            {
                id: '00000000-0000-0000-0000-000000000000',
                categories: [
                    {   id: '00000001-0000-0000-0000-000000000000',
                        type: 'pie',
                        name: 'Pie Chart1',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-simple.webp?_v_=1627897138964'
                    },
                    {
                        id: '00000002-0000-0000-0000-000000000000',
                        type: 'rose-pie',
                        name: 'Pie Chart2',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-roseType-simple.webp?_v_=1627897138964'
                    }
                ],
                value: 'Pie Chart',
                icon: 'el-icon-pie-chart',
            },
            {
                id: '00000000-0000-0000-0000-000000000002',
                categories: [
                    {
                        id: '00000003-0000-0000-0000-000000000000',
                        type: 'line',
                        name: 'Line Chart',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack.webp?_v_=1627897138964'
                    }
                ],
                value: 'Line Chart',
                icon: 'el-icon-data-line',
            },
            {
                id: '00000000-0000-0000-0000-000000000003',
                categories: [
                    {
                        id: '00000004-0000-0000-0000-000000000000',
                        type: 'bar',
                        name: 'Bar Chart',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-stack.webp?_v_=1627897138964'
                    }
                ],
                value: 'Bar Chart',
                icon: 'el-icon-data-analysis'
            },
        ],
    },
    {
        id: '00000000-0000-0000-0000-000000000003',
        name: 'Project4',
        layout: [
            {"x":0,"y":0,"w":4,"h":6,"i":"0"},
            {"x":2,"y":0,"w":4,"h":4,"i":"1"},
            {"x":4,"y":0,"w":3,"h":5,"i":"2"},
        ],
        chartOptions: [
            {
                id: '00000000-0000-0000-0000-000000000000',
                categories: [
                    {   id: '00000001-0000-0000-0000-000000000000',
                        type: 'pie',
                        name: 'Pie Chart1',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-simple.webp?_v_=1627897138964'
                    },
                    {
                        id: '00000002-0000-0000-0000-000000000000',
                        type: 'rose-pie',
                        name: 'Pie Chart2',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-roseType-simple.webp?_v_=1627897138964'
                    }
                ],
                value: 'Pie Chart',
                icon: 'el-icon-pie-chart',
            },
            {
                id: '00000000-0000-0000-0000-000000000002',
                categories: [
                    {
                        id: '00000003-0000-0000-0000-000000000000',
                        type: 'line',
                        name: 'Line Chart',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack.webp?_v_=1627897138964'
                    }
                ],
                value: 'Line Chart',
                icon: 'el-icon-data-line',
            },
            {
                id: '00000000-0000-0000-0000-000000000003',
                categories: [
                    {
                        id: '00000004-0000-0000-0000-000000000000',
                        type: 'bar',
                        name: 'Bar Chart',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-stack.webp?_v_=1627897138964'
                    }
                ],
                value: 'Bar Chart',
                icon: 'el-icon-data-analysis'
            },
        ],
    },
]};