import {config} from './config';
import {Dict} from './Dict';
import {rule, FormRule} from './FormRule';


export {config} from './config';
export {Fetch} from './decorator';
export {Dict} from './Dict';
export {rule, FormRule} from './FormRule';

export interface FastDevToolOptions{
  fetchErrorHandle: (e: Error) => void;
}

export function install (Vue:any, options:FastDevToolOptions){
  Vue.prototype.$rule = rule;
  Vue.prototype.$dict = new Dict();
  if(options.fetchErrorHandle){
    config.fetchErrorHandle = options.fetchErrorHandle;
  }
}
