import log from '@/utils/log';

export const debounce = (func, delay, doLeading = false) => {
    let timeout;
    let didLeading = false;

    return function debouncedFunc(...args) {
        const context = this;

        if(!didLeading && doLeading) {
            func.apply(context, args);
            didLeading = true;
        }

        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

export const isToday = date => {
    if(!date) {
        log.warn('isToday check failed, missing params');
        return;
    }

    // return date.toString().slice(0, 15) === new Date().toString().slice(0, 15) // Thu Aug 12 2021 ===  Wed Aug 18 2021
    return date.toString().slice(0, 10) === new Date().toString().slice(0, 10) // Thu Aug 12 === Wed Aug 18
}

export const isThisYear = date => {
    if(!date) {
        log.warn('isThisYear check failed, missing params');
        return;
    }

    return date.toString().slice(10, 15) ===  new Date().toString().slice(10, 15);
}

// export const isThisWeek = date => {
//     if(!date) {
//         log.warn('isThisWeek check failed, missing params');
//         return;
//     }

// }

export const dateTime = date => {
    let realDate = date;

    if(!date) {
        // now
        realDate = new Date();
    }

    return realDate.toLocaleString().replace(/:\d{1,2}$/,' ');
};

export const deepClone = source => {
    let target;
    if(typeof source === 'object') {
        target = Array.isArray(source) ? [] : {}

        for(let key in source) {
            if(source.hasOwnProperty(key)) {
                if(typeof source[key] !== 'object') {
                    target[key] = source[key]
                } else {
                    target[key] = deepClone(source[key])
                }
            } else {
                target = source
            }
        }
    }
    return target
}


const S4 = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1);
// Generate a pseudo-GUID by concatenating random hexadecimal.
export const guid = () => (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
