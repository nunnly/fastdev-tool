import config from './config';

/**
 * @description 主要用于数据请求, 封装之后,
 *              可以在请求数据的async 里面添加try catch, 以及loading状态, 状态提示
 * @returns {function(...[*]=)}
 * @constructor
 */
export function Fetch(handleKey: string = "loading") {
  return function(target: object, key: string, descriptor: any) {
    const fn = descriptor.value;
    descriptor.value = async function(...args: any[]) {
      try {
        this[handleKey] = true;
        return await fn.call(this, ...args);
      } catch (e) {
        config.fetchErrorHandle.call(this, e);
        // message.error(e.message);
      } finally {
        this[handleKey] = false;
      }
    };
  };
}

