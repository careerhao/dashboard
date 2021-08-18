<template>
	<div :style="{'min-height':height,width:width, display: 'flex', 'justify-content': 'center'}" />
</template>

<script>
import * as echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
// Cannot edit this type of chart yet
import common from './common';

export default {
	name: 'BarChart',
    mixins: [common],
    props: {
        width: {
        	type: String,
        	default: '100%'
        },
        height: {
        	type: String,
        	default: '300px'
        },
    },
    data() {
        return {
            chart: null,
            preDefinedOptions: {
            title: {
                text: '',
            },
            legend: {
                data: ['Access', 'Email', 'Group', 'Video', 'Search','Google','Other']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Access',
                    type: 'bar',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'Email',
                    type: 'bar',
                    stack: 'Ads',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Group',
                    type: 'bar',
                    stack: 'Ads',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Video',
                    type: 'bar',
                    stack: 'Ads',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Search',
                    type: 'bar',
                    data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                    emphasis: {
                        focus: 'series'
                    },
                    markLine: {
                        lineStyle: {
                            type: 'dashed'
                        },
                        data: [
                            [{type: 'min'}, {type: 'max'}]
                        ]
                    }
                },
                {
                    name: 'Baidu',
                    type: 'bar',
                    barWidth: 5,
                    stack: 'Search',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                    name: 'Google',
                    type: 'bar',
                    stack: 'Search',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 132, 101, 134, 290, 230, 220]
                },
                {
                    name: 'Bing',
                    type: 'bar',
                    stack: 'Search',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [60, 72, 71, 74, 190, 130, 110]
                },
                {
                    name: 'Other',
                    type: 'bar',
                    stack: 'Search',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [62, 82, 91, 84, 109, 110, 120]
                }
            ]
            },
        }
    },
    beforeDestroy() {
        if (!this.chart) {
            return
		};

        this.chart.dispose();
        this.chart = null;
    },
    methods: {
        initChart() {
			if(!this.chart) {
				this.chart = echarts.init(this.$el, 'macarons');
			}
            this.chart.clear();
			this.chart.setOption(this.preDefinedOptions);
			// this.chart.resize();
    	},
  	}
}
</script>
