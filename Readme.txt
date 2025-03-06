Thanks for https://github.com/TrustGen/TrustGen.github.io.

## TODO
- Intro图片和文字内容
- 替换icon，icon文字和图标
- 

## 修改数据

注：所有修改都在script.js开始部分。

- 每个模块中方法的总数（name为模块名称，value为总数）

  ```javascript
  var overview = [{
    name: 'Fairness',
    value: 20
  },{
    name: 'Truthfulness',
    value: 20
  },{
    name: 'Fidelity',
    value: 30
  },{
    name: 'Detectability',
    value: 30
  },{
    name: 'Privacy',
    value: 30
  },{
    name: 'Safety',
    value: 40
  }];
  ```

- 每个模块已完成的方法个数（name为模块名称，value为个数，已实现自动读取）

  ```javascript
  var finished = [{
    name: 'Fairness',
    value: 5
  },{
    name: 'Truthfulness',
    value: 5
  },{
    name: 'Fidelity',
    value: 5
  },{
    name: 'Detectability',
    value: 10
  },{
    name: 'Privacy',
    value: 5
  },{
    name: 'Safety',
    value: 15
  }];
  ```

- 每个模块中可运行的方法(每个模块由一个数组构成，数组中第一个数组为方法，包括id和name名称；数组中第二个数组为模型，method_id指对应的方法id；数组中第三个数组为数据集，model_id指对应的模型，code指运行代码，res指结果，包含两种情况：①文字：回车写作\n，页面上会直接显示按\n分割的原文字；②图片：用数组表示，图片请放在assets/img/res文件夹中，这里只写文件名。)

  ```javascript
  var select_data = [
    // Fairness
    [[
      { id: 1, name: 'Method 1' },
      { id: 2, name: 'Method 2' },
    	...
    ],[
      {id: 1, name: 'Model 1', method_id: 1},
      {id: 2, name: 'Model 2', method_id: 1},
      ...
    ],[
      {id: 1, name: 'Dataset 1', model_id: 1, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
  	...
    ]],
    // Truthfulness
  	...
    // Fidelity
  	...
    // Detectability
    [[
      { id: 1, name: 'Method 1' },
      { id: 2, name: 'Method 2' },
  	...
    ],[
      {id: 1, name: 'Model 1', method_id: 1},
  	...
    ],[
      {id: 1, name: 'Dataset 1', model_id: 1, code: 'python test.py', res: ["test.png"]},
      {id: 2, name: 'Dataset 2', model_id: 1, code: 'python test.py', res: ["test.png"]},
  	...
    ]],
    // Privacy
  	...
    // Safety
  	...
  ];
  ```

- 所有模型和数据集个数（包括未实现）

  ```javascript
  var model_all = 20;
  var dataset_all = 24;
  ```

- 已实现模型和数据集（已实现自动读取）

  ```javascript
  var models = ["Model 1", "Model 2", "Model 3", "Model 4"];
  var datasets = ["Dataset 1", "Dataset 2", "Dataset 3", "Dataset 4"];
  ```

  
