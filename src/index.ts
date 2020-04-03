import {config} from './config';
import {Dict, IDict} from './Dict';
import {rule, FormRule} from './FormRule';


export {config} from './config';
export {Fetch} from './decorator';
export {Dict} from './Dict';
export {rule, FormRule} from './FormRule';
export const dict = new Dict();

export interface FastDevToolOptions{
  fetchErrorHandle?: (e: Error) => void;
  dict?: {
    [key: string]: IDict
  }[]
}


function install (Vue:any, options:FastDevToolOptions){
  Vue.prototype.$rule = rule;
  Vue.prototype.$dict = dict;
  if(options.fetchErrorHandle){
    config.fetchErrorHandle = options.fetchErrorHandle;
  }
  const dicts = options.dict;
  if(dicts){
    Object.keys(dicts).forEach(key=> {
        // @ts-ignore
      dict.addDict(key, dicts[key])
    })
  }
}

export default {
  install
}
