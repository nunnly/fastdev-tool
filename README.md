# vue 快速开发套件


### 快速开始

基础使用
```javascript
// 引入包, 并且在Vue.prototype上面添加了两个方法, $rule, $dict;
import fastTool from 'fastdev-tool';
Vue.use(fastTool);

```

高级使用
```javascript
import fastTool from 'fastdev-tool';
import {message} from 'ant-design-vue';

// 注入词典
const dict = {
	userName: [{
		key: '1',
		value: 'admin'
	}]
}
Vue.use(fastTool, {
	fetchErrorHandle(e){ // 设置全局的Fetch的捕获的异常
		message.error(e.message);
	}
	dict:dict // 初始化词典 可以做一个外部文件, 然后导入进来
});

```


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

```vue

<select>
	<option v-for="item in $dict.getDict('词典名称')" :key="item.key">{{
		item.value
	}}</option>
</select>

// 配合ant-design-vue使用
<ASelect :options="$dict.getSelectOptions('词典名称')" />


```

### FormRule

```javascript
<AFormItem label="用户名">
    <AInput
      v-decorator="[
        'userName',
        {
          rules: $rule('用户名')
            .required()
            .max(10)
        }
      ]"
    />
</AFormItem>

//或者
rules: {
  userName: this.$rule('用户名').required().max().min().len().eumn([1,2,3])
}

//由于$rule('用户名')返回的是一个FormRule实例, 这个实例是继承自Array的
//所以你可以自由的使用Array的方法, 注意push这类的方法返回的不是this, 所以不能直接使用
// 你也可以自己往FormRule的原型上面添加方法
this.$rule('标签名称').required().concat({
  validator(rule, value, callback){
      // do something
  }
})


```

### config

- fetchErrorHandle 异步捕获异常处理函数

```javascript
// 设置全局的Fetch的捕获的异常, 除了初始化的设置, 也可以手动进行修改
import {config} from 'fastdev-tool';
import { message } from 'ant-design-vue'
config.fetchErrorHandle = function(e){
	message.error(e.message);
}

```

### todoList
 [ ] rule 自定义消息体
