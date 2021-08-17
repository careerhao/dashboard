<template>
	<div :style="{'min-height':height,width:width, display: 'flex', 'justify-content': 'center'}" />
</template>

<script>
import * as echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
// Cannot edit this type of chart yet
import common from './common';

export default {
	name: 'PieChart',
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
                    text: ''
                },
                // tooltip: {
                //     trigger: 'axis',
                //     axisPointer: {
                //         type: 'cross',
                //         label: {
                //             backgroundColor: '#6a7985'
                //         }
                //     }
                // },
                legend: {
                    data: ['Email', 'Group', 'Video', 'Access', 'Search']
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
                        boundaryGap: false,
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
                        name: 'Email',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'Group',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'Video',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'Access',
                        type: 'line',
                        stack: 'total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: 'Search',
                        type: 'line',
                        stack: 'total',
                        label: {
                            show: true,
                            position: 'top'
                        },
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        animationDuration: 2000,
                        animationEasing: 'quadraticOut'
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
