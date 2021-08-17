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

export const dateTime = date => {
    let realDate = date;

    if(!date) {
        // now
        realDate = new Date();
    }

    return realDate.toISOString().slice(0, 19).replace('T', ' ');
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
