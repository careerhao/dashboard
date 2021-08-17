import { get } from '@/utils/fetch';
import log from '@/utils/log';

export default {
  getByUrl(url) {
    // return get('project');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                [
                    { value: 40, name: 'Industries' },
                    { value: 38, name: 'Technology' },
                    { value: 32, name: 'Forex' },
                    { value: 30, name: 'Gold' },
                    { value: 22, name: 'Forecasts' }
                  ]
            )
        }, 1000)
    })
  },
  getBySql(sentence) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(projects.items.find(proj => proj.id === projectId))
        }, 1000)
    })
  }
};