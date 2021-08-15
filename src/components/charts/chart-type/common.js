import { debounce } from '@/utils/index.js'
import chartDataService from '@/services/chartData'

const filterOutChart = ['line-chart'];

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
    		resizeHandler: null,
			containerSizeObserver: null,
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
    this.destroyResize()
},

methods: {
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
		return chartDataService
			.getByUrl(url)
			.then(res => {
				// Filter out some chart that not set up yet
				if(!filterOutChart.includes[this.type]) {
					this.preDefinedOptions.series[0].data = res;
				}
			})
			.then(() => this.initChart())
			.catch(err => {
				console.warn('Something woring when trying to fetch chart data:', err)
			})
	},
	refresh() {
		this.fetchData(this.url)
	}
  }
}
