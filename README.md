# vue 快速开发套件

使用方式
### Fetch
```javascript

@Fetch()
async loadData(){
	const {data} = await axiosInstance({});
	//do some thing 在这里直接写成功函数, 如果异常, 会进入fetchErrorHandle处理

}

```

### Dict

```javascript

```

### FormRule

```javascript


```

### config

- fetchErrorHandle 异步捕获异常处理函数

```javascript
// 设置全局的Fetch的捕获的异常
import { message } from 'ant-design-vue'
config.fetchErrorHandle = function(e){
	message.error(e.message);
}


```
