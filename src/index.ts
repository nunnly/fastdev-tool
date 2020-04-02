import {config} from './config';
import {Dict} from './Dict';
import {rule, FormRule} from './FormRule';


export {config} from './config';
export {Fetch} from './decorator';
export {Dict} from './Dict';
export {rule, FormRule} from './FormRule';
export const dict = new Dict();

export interface FastDevToolOptions{
  fetchErrorHandle: (e: Error) => void;
}


function install (Vue:any, options:FastDevToolOptions){
  Vue.prototype.$rule = rule;
  Vue.prototype.$dict = dict;
  if(options.fetchErrorHandle){
    config.fetchErrorHandle = options.fetchErrorHandle;
  }
}

export default {
  install
}
