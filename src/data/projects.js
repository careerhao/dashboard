export const projects = {
    'items':[
    {
        id: '00000000-0000-0000-0000-000000000000',
        name: 'Charts',
        isDarkCharts: false,
        layout: [
            {
              "x": 0,
              "y": 0,
              "w": 4,
              "h": 8,
              "i": "0",
              "chart": {
                "id": "chart_id_1",
                "name": "Pie",
                "type": "pie-chart",
                "url": "www.testurl.com/api/",
                "fetchBySql": false
              },
              "moved": false
            },
            {
              "x": 0,
              "y": 8,
              "w": 4,
              "h": 9,
              "i": "1",
              "chart": {
                "id": "chart_id_2",
                "name": "Line Chart",
                "type": "line-chart",
                "url": "www.testurl.com/api/",
                "fetchBySql": false
              },
              "moved": false
            },
            {
              "x": 4,
              "y": 0,
              "w": 4,
              "h": 8,
              "i": "2",
              "chart": {
                "id": "chart_id_3",
                "name": "",
                "type": "rose-pie-chart",
                "url": "www.testurl.com/api/",
                "fetchBySql": false
              },
              "moved": false
            },
            {
              "x": 8,
              "y": 0,
              "w": 4,
              "h": 9,
              "i": "3",
              "chart": {
                "id": "00000004-0000-0000-0000-000000000000",
                "name": "",
                "type": "bar-chart",
                "url": "www.testurl.com/api/"
              },
              "moved": false
            },
            {
              "x": 8,
              "y": 9,
              "w": 4,
              "h": 9,
              "i": "4",
              "chart": {
                "id": "00000001-0000-0000-0000-000000000000",
                "name": "Pie Chart1",
                "type": "pie-chart",
                "url": "www.testurl.com/api/"
              },
              "moved": false
            },
            {
              "x": 0,
              "y": 17,
              "w": 4,
              "h": 10,
              "i": "5",
              "chart": {
                "id": "00000004-0000-0000-0000-000000000000",
                "name": "",
                "type": "bar-chart",
                "url": "www.testurl.com/api/"
              },
              "moved": false
            },
            {
              "x": 4,
              "y": 18,
              "w": 8,
              "h": 9,
              "i": "6",
              "chart": {
                "id": "00000003-0000-0000-0000-000000000000",
                "name": "Line Chart",
                "type": "line-chart",
                "url": "www.testurl.com/api/"
              },
              "moved": false
            },
            {
              "x": 4,
              "y": 8,
              "w": 4,
              "h": 10,
              "i": "7",
              "chart": {
                "id": "00000002-0000-0000-0000-000000000000",
                "name": "Pie Chart2",
                "type": "rose-pie-chart",
                "url": "www.testurl.com/api/"
              },
              "moved": false
            }
          ],
        chartOptions: [
            {
                id: '00000000-0000-0000-0000-000000000000',
                categories: [
                    {   id: '00000001-0000-0000-0000-000000000000',
                        type: 'pie-chart',
                        name: 'Pie Chart1',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-simple.webp?_v_=1627897138964',
                        darkThumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb-dark/pie-simple.webp?_v_=1627897138964'
                    },
                    {
                        id: '00000002-0000-0000-0000-000000000000',
                        type: 'rose-pie-chart',
                        name: 'Pie Chart2',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-roseType-simple.webp?_v_=1627897138964',
                        darkThumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb-dark/pie-roseType-simple.webp?_v_=1627897138964',
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
                        type: 'line-chart',
                        name: 'Line Chart',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack.webp?_v_=1627897138964',
                        darkThumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb-dark/area-stack.webp?_v_=1627897138964'
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
                        type: 'bar-chart',
                        name: 'Bar Chart',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-stack.webp?_v_=1627897138964',
                        darkThumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb-dark/bar-stack.webp?_v_=1627897138964'
                        
                    }
                ],
                value: 'Bar Chart',
                icon: 'el-icon-data-analysis'
            },
        ],
    },
    {
        id: '00000000-0000-0000-0000-000000000001',
        name: 'Dark Charts',
        isDarkCharts: true,
        layout: [
            {
              "x": 0,
              "y": 0,
              "w": 4,
              "h": 8,
              "i": "0",
              "chart": {
                "id": "chart_id_1",
                "name": "Pie",
                "type": "pie-chart",
                "url": "www.testurl.com/api/",
                "fetchBySql": false
              },
              "moved": false
            },
            {
              "x": 0,
              "y": 8,
              "w": 4,
              "h": 9,
              "i": "1",
              "chart": {
                "id": "chart_id_2",
                "name": "Line Chart",
                "type": "line-chart",
                "url": "www.testurl.com/api/",
                "fetchBySql": false
              },
              "moved": false
            },
            {
              "x": 4,
              "y": 0,
              "w": 4,
              "h": 8,
              "i": "2",
              "chart": {
                "id": "chart_id_3",
                "name": "",
                "type": "rose-pie-chart",
                "url": "www.testurl.com/api/",
                "fetchBySql": false
              },
              "moved": false
            },
            {
              "x": 8,
              "y": 0,
              "w": 4,
              "h": 9,
              "i": "3",
              "chart": {
                "id": "00000004-0000-0000-0000-000000000000",
                "name": "",
                "type": "bar-chart",
                "url": "www.testurl.com/api/"
              },
              "moved": false
            },
            {
              "x": 8,
              "y": 9,
              "w": 4,
              "h": 9,
              "i": "4",
              "chart": {
                "id": "00000001-0000-0000-0000-000000000000",
                "name": "Pie Chart1",
                "type": "pie-chart",
                "url": "www.testurl.com/api/"
              },
              "moved": false
            },
            {
              "x": 0,
              "y": 17,
              "w": 4,
              "h": 10,
              "i": "5",
              "chart": {
                "id": "00000004-0000-0000-0000-000000000000",
                "name": "",
                "type": "bar-chart",
                "url": "www.testurl.com/api/"
              },
              "moved": false
            },
            {
              "x": 4,
              "y": 18,
              "w": 8,
              "h": 9,
              "i": "6",
              "chart": {
                "id": "00000003-0000-0000-0000-000000000000",
                "name": "Line Chart",
                "type": "line-chart",
                "url": "www.testurl.com/api/"
              },
              "moved": false
            },
            {
              "x": 4,
              "y": 8,
              "w": 4,
              "h": 10,
              "i": "7",
              "chart": {
                "id": "00000002-0000-0000-0000-000000000000",
                "name": "Pie Chart2",
                "type": "rose-pie-chart",
                "url": "www.testurl.com/api/"
              },
              "moved": false
            }
          ],
        chartOptions: [
            {
                id: '00000000-0000-0000-0000-000000000000',
                categories: [
                    {   id: '00000001-0000-0000-0000-000000000000',
                        type: 'pie-chart',
                        name: 'Pie Chart1',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-simple.webp?_v_=1627897138964',
                        darkThumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb-dark/pie-simple.webp?_v_=1627897138964'
                    },
                    {
                        id: '00000002-0000-0000-0000-000000000000',
                        type: 'rose-pie-chart',
                        name: 'Pie Chart2',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-roseType-simple.webp?_v_=1627897138964',
                        darkThumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb-dark/pie-roseType-simple.webp?_v_=1627897138964',
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
                        type: 'line-chart',
                        name: 'Line Chart',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack.webp?_v_=1627897138964',
                        darkThumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb-dark/area-stack.webp?_v_=1627897138964'
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
                        type: 'bar-chart',
                        name: 'Bar Chart',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-stack.webp?_v_=1627897138964',
                        darkThumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb-dark/bar-stack.webp?_v_=1627897138964'
                        
                    }
                ],
                value: 'Bar Chart',
                icon: 'el-icon-data-analysis'
            },
        ],
    },
    {
        id: '00000000-0000-0000-0000-000000000002',
        name: 'Project3',
        isDarkCharts: false,
        layout: [
            {"x":0,"y":0,"w":5,"h":8,"i":"0", "chart" : {
                "id": "chart_id_1",
                "name": "Pie",
                "type": "pie-chart",
                "url": "www.testurl.com/api/",
                "fetchBySql": false,
            }},
            {"x":0,"y":10,"w":10,"h":8,"i":"1", "chart" : {
                "id": "chart_id_2",
                "name": "Line Chart",
                "type": "line-chart",
                "url": "www.testurl.com/api/",
                "fetchBySql": false,
            }},
            {"x":6,"y":8,"w":6,"h":8,"i":"2", "chart" : {
                "id": "chart_id_3",
                "name": "",
                "type": "rose-pie-chart",
                "url": "www.testurl.com/api/",
                "fetchBySql": false,
            }},
        ],
        chartOptions: [
            {
                id: '00000000-0000-0000-0000-000000000000',
                categories: [
                    {   id: '00000001-0000-0000-0000-000000000000',
                        type: 'pie-chart',
                        name: 'Pie Chart1',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-simple.webp?_v_=1627897138964',
                        darkThumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb-dark/pie-simple.webp?_v_=1627897138964'
                    },
                    {
                        id: '00000002-0000-0000-0000-000000000000',
                        type: 'rose-pie-chart',
                        name: 'Pie Chart2',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-roseType-simple.webp?_v_=1627897138964',
                        darkThumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb-dark/pie-roseType-simple.webp?_v_=1627897138964',
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
                        type: 'line-chart',
                        name: 'Line Chart',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack.webp?_v_=1627897138964',
                        darkThumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb-dark/area-stack.webp?_v_=1627897138964'
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
                        type: 'bar-chart',
                        name: 'Bar Chart',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-stack.webp?_v_=1627897138964',
                        darkThumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb-dark/bar-stack.webp?_v_=1627897138964'
                        
                    }
                ],
                value: 'Bar Chart',
                icon: 'el-icon-data-analysis'
            },
        ],
    },
]};