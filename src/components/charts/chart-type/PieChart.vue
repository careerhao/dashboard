<template>
	<div :style="{'min-height':height,width:width, display: 'flex', 'justify-content': 'center'}" />
</template>

<script>
import * as echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
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
				text: '',
				left: 'center'
			},
			// tooltip: {
			// 	trigger: 'item'
			// },
			legend: {
				orient: 'vertical',
				left: 'left',
			},
			series: [
				{
					type: 'pie',
					radius: '50%',
					data: [],
                	animationDuration: 2600,
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
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
			this.chart.resize();
    	},
  	}
}
</script>
