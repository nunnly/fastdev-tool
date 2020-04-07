import {config} from './config';
import {Dict, IDict} from './Dict';
import {rule, FormRule} from './FormRule';
import Auth from "./Auth";

export {config} from './config';
export {Fetch} from './decorator';
export {Dict} from './Dict';
export {Auth} from './Auth';
export {rule, FormRule} from './FormRule';
export const dict = new Dict();
export const auth = new Auth();

export interface FastDevToolOptions{
  fetchErrorHandle?: (e: Error) => void;
  dict?: {
    [key: string]: IDict
  }[]
}


function install (Vue:any, options:FastDevToolOptions){
  Vue.prototype.$rule = rule;
  Vue.prototype.$dict = dict;
  Vue.prototype.$auth = auth;
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

//@ts-ignore
declare module 'vue/types/vue' {

  interface Vue {
    $rule: (label:string) => FormRule;
    $dict: Dict;
    $auth: Auth
  }
}
