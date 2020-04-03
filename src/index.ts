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
  if(options.dict){
    Object.entries((key:string, value:IDict[])=> {
      dict.addDict(key, value)
    })
  }
}

export default {
  install
}
