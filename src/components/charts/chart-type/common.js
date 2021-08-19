import { debounce } from '@/utils/index.js'
import chartDataService from '@/services/chartData'

// Dynamic import echart components still taking 3.0+ mb.
// Solution: Using cdn, check /public/index.html <script> for echarts
// import * as echarts from 'echarts/core';
// import {
//     BarChart,
//     PieChart,
// } from 'echarts/charts';
// import {
//     TitleComponent,
//     TooltipComponent,
//     ToolboxComponent,
//     LegendComponent,
//     GridComponent,
//     MarkLineComponent,
// } from 'echarts/components';
// // Svg for multi charts import, canvas for single complex chart
// import {
//     SVGRenderer
// } from 'echarts/renderers';


// echarts.use(
//     [TitleComponent, TooltipComponent,ToolboxComponent, LegendComponent, MarkLineComponent, GridComponent, PieChart,, BarChart, SVGRenderer]
// );

export default {
	props: {
		name: {
			type: String,
			require: false,
		},
		url: {
			type: String,
			required: false,
		},
		fetchBySql: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
    data() {
    	return {
			chart: null,
    		resizeHandler: null,
			containerSizeObserver: null,
			loadingChart: false,
    }
},

mounted() {
	this.preDefinedOptions.title.text = this.name;

    this.resizeHandler = debounce(() => {
      	if (this.chart) {
        		this.chart.resize()
      	}
    }, 100);

	this.initResize();
	this.fetchData(this.url)
},

beforeDestroy() {
	this.destroyResize();
	
	if (!this.chart) {
		return
	};

	this.chart.dispose();
	this.chart = null;
},

methods: {
	initChart() {
		if(!this.chart) {
			this.chart = echarts.init(this.$el, 'macarons', {renderer: 'svg'});
		}
		this.chart.clear();
		this.chart.setOption(this.preDefinedOptions);
		// this.chart.resize();
	},
    initResize() {
		// see: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
    	// echarts resize api need to be called by parent element rather than window
      	const parent = this.$el.parentElement.parentElement;

		// Options for the observer (which mutations to observe)
		const config = {
    		attributes: true,
    		// childList: true,
    		// subtree: true
  		};

  		// Create an observer instance linked to the callback function
		this.containerSizeObserver = new MutationObserver(this.resizeHandler);

		// Start observing the target node for configured mutations
		this.containerSizeObserver.observe(parent, config);

    },
    destroyResize() {
    	this.containerSizeObserver.disconnect();
	},
	fetchData(url) {
		this.loadingChart = true;
		return chartDataService
			.getByUrl(url)
			.then(res => {
				this.preDefinedOptions.series[0].data = res;
			})
			.then(() => this.initChart())
			.catch(err => {
				console.warn('Something woring when trying to fetch chart data:', err)
			})
			.finally(() => this.loadingChart = false)
	},
	refresh() {
		this.fetchData(this.url)
	}
  }
}
