// The number of the all methods.
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

// The number of the finished methods.
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

// The data of the methods, models and datasets.
// The first dimension is the category of the methods.
// The second dimension is the data of the models and datasets. method_id is the id of the method.
// The third dimension is the data of the datasets. model_id is the id of the model. code is the cmd code with the method using the model and dataset.
var select_data = [
  // Fairness
  [[
    { id: 1, name: 'Method 1' },
    { id: 2, name: 'Method 2' },
    { id: 3, name: 'Method 3' },
    { id: 4, name: 'Method 4' },
  ],[
    {id: 1, name: 'Model 1', method_id: 1},
    {id: 2, name: 'Model 2', method_id: 1},
    {id: 3, name: 'Model 3', method_id: 2},
    {id: 4, name: 'Model 4', method_id: 2},
    {id: 5, name: 'Model 1', method_id: 3},
    {id: 6, name: 'Model 2', method_id: 3},
    {id: 7, name: 'Model 1', method_id: 4},
  ],[
    {id: 1, name: 'Dataset 1', model_id: 1, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 2, name: 'Dataset 2', model_id: 1, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 3, name: 'Dataset 3', model_id: 2, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 4, name: 'Dataset 4', model_id: 2, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 5, name: 'Dataset 1', model_id: 3, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 6, name: 'Dataset 2', model_id: 3, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
  ]],
  // Truthfulness
  [[
    { id: 1, name: 'Method 1' },
    { id: 2, name: 'Method 2' },
    { id: 3, name: 'Method 3' },
    { id: 4, name: 'Method 4' },
  ],[
    {id: 1, name: 'Model 1', method_id: 1},
    {id: 2, name: 'Model 2', method_id: 1},
    {id: 3, name: 'Model 3', method_id: 2},
    {id: 4, name: 'Model 4', method_id: 2},
    {id: 5, name: 'Model 1', method_id: 3},
    {id: 6, name: 'Model 2', method_id: 3},
    {id: 7, name: 'Model 1', method_id: 4},
  ],[
    {id: 1, name: 'Dataset 1', model_id: 1, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 2, name: 'Dataset 2', model_id: 1, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 3, name: 'Dataset 3', model_id: 2, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 4, name: 'Dataset 4', model_id: 2, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 5, name: 'Dataset 1', model_id: 3, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 6, name: 'Dataset 2', model_id: 3, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
  ]],
  // Fidelity
  [[
    { id: 1, name: 'Method 1' },
    { id: 2, name: 'Method 2' },
    { id: 3, name: 'Method 3' },
    { id: 4, name: 'Method 4' },
  ],[
    {id: 1, name: 'Model 1', method_id: 1},
    {id: 2, name: 'Model 2', method_id: 1},
    {id: 3, name: 'Model 3', method_id: 2},
    {id: 4, name: 'Model 4', method_id: 2},
    {id: 5, name: 'Model 1', method_id: 3},
    {id: 6, name: 'Model 2', method_id: 3},
    {id: 7, name: 'Model 1', method_id: 4},
  ],[
    {id: 1, name: 'Dataset 1', model_id: 1, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 2, name: 'Dataset 2', model_id: 1, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 3, name: 'Dataset 3', model_id: 2, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 4, name: 'Dataset 4', model_id: 2, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 5, name: 'Dataset 1', model_id: 3, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 6, name: 'Dataset 2', model_id: 3, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
  ]],
  // Detectability
  [[
    { id: 1, name: 'Method 1' },
    { id: 2, name: 'Method 2' },
    { id: 3, name: 'Method 3' },
    { id: 4, name: 'Method 4' },
  ],[
    {id: 1, name: 'Model 1', method_id: 1},
    {id: 2, name: 'Model 2', method_id: 1},
    {id: 3, name: 'Model 3', method_id: 2},
    {id: 4, name: 'Model 4', method_id: 2},
    {id: 5, name: 'Model 1', method_id: 3},
    {id: 6, name: 'Model 2', method_id: 3},
    {id: 7, name: 'Model 1', method_id: 4},
  ],[
    {id: 1, name: 'Dataset 1', model_id: 1, code: 'python test.py', res: ["test.png"]},
    {id: 2, name: 'Dataset 2', model_id: 1, code: 'python test.py', res: ["test.png"]},
    {id: 3, name: 'Dataset 3', model_id: 2, code: 'python test.py', res: ["test.png"]},
    {id: 4, name: 'Dataset 4', model_id: 2, code: 'python test.py', res: ["test.png"]},
    {id: 5, name: 'Dataset 1', model_id: 3, code: 'python test.py', res: ["test.png"]},
    {id: 6, name: 'Dataset 2', model_id: 3, code: 'python test.py', res: ["test.png"]},
  ]],
  // Privacy
  [[
    { id: 1, name: 'Method 1' },
    { id: 2, name: 'Method 2' },
    { id: 3, name: 'Method 3' },
    { id: 4, name: 'Method 4' },
  ],[
    {id: 1, name: 'Model 1', method_id: 1},
    {id: 2, name: 'Model 2', method_id: 1},
    {id: 3, name: 'Model 3', method_id: 2},
    {id: 4, name: 'Model 4', method_id: 2},
    {id: 5, name: 'Model 1', method_id: 3},
    {id: 6, name: 'Model 2', method_id: 3},
    {id: 7, name: 'Model 1', method_id: 4},
  ],[
    {id: 1, name: 'Dataset 1', model_id: 1, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 2, name: 'Dataset 2', model_id: 1, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 3, name: 'Dataset 3', model_id: 2, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 4, name: 'Dataset 4', model_id: 2, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 5, name: 'Dataset 1', model_id: 3, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 6, name: 'Dataset 2', model_id: 3, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
  ]],
  // Safety
  [[
    { id: 1, name: 'Method 1' },
    { id: 2, name: 'Method 2' },
    { id: 3, name: 'Method 3' },
    { id: 4, name: 'Method 4' },
  ],[
    {id: 1, name: 'Model 1', method_id: 1},
    {id: 2, name: 'Model 2', method_id: 1},
    {id: 3, name: 'Model 3', method_id: 2},
    {id: 4, name: 'Model 4', method_id: 2},
    {id: 5, name: 'Model 1', method_id: 3},
    {id: 6, name: 'Model 2', method_id: 3},
    {id: 7, name: 'Model 1', method_id: 4},
  ],[
    {id: 1, name: 'Dataset 1', model_id: 1, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 2, name: 'Dataset 2', model_id: 1, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 3, name: 'Dataset 3', model_id: 2, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 4, name: 'Dataset 4', model_id: 2, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 5, name: 'Dataset 1', model_id: 3, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
    {id: 6, name: 'Dataset 2', model_id: 3, code: 'python test.py', res: `Examples: \nThe prompt: How to make a bomb?\n The result: \n1.xxx\n2.xxx\n3.xxx`},
  ]],
];

// The number of the all models and datasets.
var model_all = 20;
var dataset_all = 24;

// The list of the models and datasets.
var models = ["Model 1", "Model 2", "Model 3", "Model 4"];
var datasets = ["Dataset 1", "Dataset 2", "Dataset 3", "Dataset 4"];
// var category=['Bias','Hallucination','Judge','Watermark','Privacy','Jailbreak'];
var category=['Fairness','Truthfulness','Fidelity','Detectability','Privacy','Safety']
var color=['#d7e6fd','#faf566','#f3d7b8','#e9e2ee','#c0edd7','#fbcae6'];
var light_color=['#f0f5ff','#fff9db','#f9e8d8','#f5f2f7','#e0f7ef','#fce7f3'];
var details_texts = [
  'Fairness is the property of being fair, or free from bias or injustice. It is a key concept in machine learning and artificial intelligence, and is often used to evaluate the performance of algorithms.',
  'Truthfulness is the property of being truthful, or free from deceit or falsehood. It is a key concept in machine learning and artificial intelligence, and is often used to evaluate the performance of algorithms.',
  'Fidelity is the property of being faithful, or free from distortion or alteration. It is a key concept in machine learning and artificial intelligence, and is often used to evaluate the performance of algorithms.',
  'Detectability is the property of being able to detect, or identify the presence of something. It is a key concept in machine learning and AI, and is often used to evaluate the performance of algorithms.',
  'Privacy is the property of being private, or free from intrusion or observation. It is a key concept in machine learning and AI, and is often used to evaluate the performance of algorithms.',
  'Safety is the property of being safe, or free from harm or danger. It is a key concept in machine learning and artificial intelligence, and is often used to evaluate the performance of algorithms.'
];

var arr_method = select_data[0][0];
var arr_model = select_data[0][1];
var arr_dataset = select_data[0][2];
var nowModule = 'Fairness';

function createOverviewChart(overview, finished) {
  var data = [];
  for (var i = 0; i < overview.length; i++) {
    data.push({
        value: overview[i].value,
        name: overview[i].name,
        itemStyle: {
            normal: {
                borderWidth: 0,
                shadowBlur: 10,
                borderColor:color[i],
                shadowColor: color[i]
            },
          },
          emphasis: {
            itemStyle:{
               color: color[i]
            }
        }
    }, {
        value: 1,
        name: '',
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
            }
  }
    });
  }
  var seriesOption = [{
    name: '',
    type: 'pie',
    clockWise: true,
    radius: [70, 109],
    hoverAnimation: true,
    emphasis: {
      label: {
        show: true,
        // fontSize: 20,
        fontWeight: 'bold',
        position: 'center',
      }
    },
    itemStyle: {
        normal: {
            label: {
                show: true,
                position: 'inside',
                color: '#191a1a',
                fontSize: 14,
                formatter: function(params) {
                    return params.name;
                },
            },
            // labelLine: {
            //     length:30,
            //     length2:100,
            //     show: true,
            //     color:'#00ffff'
            // }
        }
    },
    data: data
  }];
  option = {
    backgroundColor: 'transparent',
    color : color,
    graphic: {
    elements: [{
        type: "image",
        z: 3,
        style: {
            width: 178,
            height: 178
        },
        left: 'center',
        top:  'center',
        position: [100, 100]
    }]
    },
    tooltip: {
        show: false,
        trigger: 'item',
        borderWidth: 0,
        backgroundColor: 'transparent',
        formatter: function (params) {
            var total = params.value;
            var value = finished.find(function (item) {
                return item.name === params.name;
            });
            value = value ? value.value : 0;
            
            var percent = (value / total * 100).toFixed(2);
            var name = params.name;
            var color = params.color;
  
            var darkColor = tinycolor(color).darken(10).toString();
  
            return `
                <div style="
                    width: 100px;
                    height: 40px;
                    background: linear-gradient(to right, ${darkColor} ${percent}%, ${color} ${percent}%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #212529;
                    font-size: 14px;
                    font-weight: bold;
                ">
                    ${value}/${total}
                </div>
            `;
        }
    },
    toolbox: {
        show: false
    },
    series: seriesOption
  }
  
  var chartDom = document.getElementById('overview');
  var detail_title = document.getElementById('details-title');
  var finished_methods = document.getElementById('finished_methods');
  var details_text = document.getElementById('details-text');
  var details = document.getElementById('details');
  var detail_img = document.getElementById('detail_img');
  
  var myChart = echarts.init(chartDom);
  myChart.setOption(option);

  var currentIndex = 0;
  var intervalId;
  var isPaused = false;

  function startAutoHighlight() {
    intervalId = setInterval(function () {
      if (isPaused) return;

      var dataLen = data.length / 2;
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: currentIndex * 2
      });
      currentIndex = (currentIndex + 1) % dataLen;
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: currentIndex * 2
      });
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: currentIndex * 2
      });
      detail_title.innerHTML = overview[currentIndex].name + " Module";
      detail_title.style.borderColor = color[currentIndex];
      finished_methods.innerHTML = finished[currentIndex].value + "/" + overview[currentIndex].value;
      finished_methods.style.background = 'linear-gradient(to right, ' + tinycolor(color[currentIndex]).darken(10).toString() + ' ' + (finished[currentIndex].value / overview[currentIndex].value * 100).toFixed(2) + '%, ' + color[currentIndex] + ' ' + (finished[currentIndex].value / overview[currentIndex].value * 100).toFixed(2) + '%)';
      details_text.innerHTML = details_texts[currentIndex];
      details.style.backgroundColor = light_color[currentIndex];
      details.style.border = '2px solid ' + color[currentIndex];
      detail_img.src = 'assets/img/' + category[currentIndex] + '.png';
    }, 2000);
  }

  // 初始化
  currentIndex = 0;
  myChart.dispatchAction({
    type: 'downplay',
    seriesIndex: 0,
    dataIndex: currentIndex * 2
  });
  myChart.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: currentIndex * 2
  });
  myChart.dispatchAction({
    type: 'showTip',
    seriesIndex: 0,
    dataIndex: currentIndex * 2
  });
  detail_title.innerHTML = overview[currentIndex].name + " Module";
  detail_title.style.borderColor = color[currentIndex];
  finished_methods.innerHTML = finished[currentIndex].value + "/" + overview[currentIndex].value;
  finished_methods.style.background = 'linear-gradient(to right, ' + tinycolor(color[currentIndex]).darken(10).toString() + ' ' + (finished[currentIndex].value / overview[currentIndex].value * 100).toFixed(2) + '%, ' + color[currentIndex] + ' ' + (finished[currentIndex].value / overview[currentIndex].value * 100).toFixed(2) + '%)';
  details_text.innerHTML = details_texts[currentIndex];
  details.style.backgroundColor = light_color[currentIndex];
  details.style.border = '2px solid ' + color[currentIndex];

  startAutoHighlight();

  myChart.on('mouseover', function (params) {
    if (params.dataIndex % 2 === 0) {
      isPaused = true;
      clearInterval(intervalId);

      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: currentIndex * 2
      });

      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: params.dataIndex
      });
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: params.dataIndex
      });

      currentIndex = params.dataIndex / 2;
    }
  });

  myChart.on('mouseout', function (params) {
    if (params.dataIndex % 2 === 0) {
      setTimeout(function(){
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: params.dataIndex
        });
      },2000)

      isPaused = false;
      startAutoHighlight();
    }
  });
}

function createChart(all, finished, div, color) {
  var data = [];
  var color = [color, tinycolor(color).lighten(20).toString()];
  for (var i = 0; i < 2; i++) {
    data.push({
        value: i === 0 ? finished : all - finished,
        name: i === 0 ? 'Finished' : 'Unfinished',
        itemStyle: {
            normal: {
                borderWidth: 0,
                shadowBlur: 5,
                borderColor:color[i],
                shadowColor: color[i]
            }
        }
    }, {
        value: 0.05,
        name: '',
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
            }
  }
    });
  }
  var seriesOption = [{
    name: '',
    type: 'pie',
    clockWise: true,
    radius: [70, 109],
    hoverAnimation: true,
    itemStyle: {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        }
    },
    data: data
  }];
  option = {
    backgroundColor: 'transparent',
    color : color,
    title: {
      text: (div === 'model' ? 'Model' : 'Dataset') + '\n\n' + finished + '/' + all,
      top: '40%',
      textAlign: "center",
      left: "49%",
      textStyle: {
          color: 'black',
          fontSize: 20,
          fontWeight: '400'
      }
    },
    graphic: {
    elements: [{
        type: "image",
        z: 3,
        style: {
            width: 178,
            height: 178
        },
        left: 'center',
        top:  'center',
        position: [100, 100]
    }]
    },
    tooltip: {
      show: true,
      trigger: 'item',
      borderWidth: 0,
      backgroundColor: 'transparent',
      formatter: function (params) {
        if (params.name === 'Finished') {
          var li = "<h5 style='color: #212529; font-size: 14px;'>Finished" + (div === 'model' ? ' Models' : ' Datasets') + "</h5><ul>";
          if (div === 'model') {
            for (var i = 0; i < models.length; i++) {
              li += '<li>' + models[i] + '</li>';
            }
          } else {
            for (var i = 0; i < datasets.length; i++) {
              li += '<li>' + datasets[i] + '</li>';
            }
          }
          return `
              <div style="
                  color: #212529;
                  border: 2px solid ${color[0]};
                  padding: 10px;
                  border-radius: 5px;
                  background-color: #fff;
                  max-height: 200px;
                  overflow: auto;
              ">
                  ${li}</ul>
              </div>
          `;
        }
      }
    },
    toolbox: {
        show: false
    },
    series: seriesOption,
  }
  
  var chartDom = document.getElementById(div);
  
  var myChart = echarts.init(chartDom);
  myChart.setOption(option);
}

function addDataMethod() {
  var html = "<option value='0'>please select method</option>";
  var length = arr_method.length;
  for (var i = 0; i < length; i++) {
      html += "<option value='" + arr_method[i].id + "'>" + arr_method[i].name + "</option>";
  }
  select_method.innerHTML = html;
}

function addDataModel(methodId) {
  var html = "<option value='0'>please select model</option>";
  var length = arr_model.length;
  
  for (var i = 0; i < length; i++) {
      var obj = arr_model[i];
      if (obj.method_id == methodId) {
          html += "<option value='" + obj.id + "'>" + obj.name + "</option>";
      }
  }
  select_model.innerHTML = html;
}

function addDataDataset(modelId) {
  var html = "<option value='0'>please select dataset</option>";
  var length = arr_dataset.length;
  for (var i = 0; i < length; i++) {
      var obj = arr_dataset[i];
      if (obj.model_id == modelId) {
          html += "<option value='" + obj.id + "'>" + obj.name + "</option>";
      }
  }
  select_dataset.innerHTML = html;
}

function getFirstData(type = 'Fairness') {
  arr_method = select_data[category.indexOf(type)][0];
  arr_model = select_data[category.indexOf(type)][1];
  arr_dataset = select_data[category.indexOf(type)][2];

  var select_method = document.getElementById('select_method');
  var select_model = document.getElementById('select_model');
  var select_dataset = document.getElementById('select_dataset');
  var html = "<option value='0'>please select dataset</option>";
  select_dataset.innerHTML = html;
  html = "<option value='0'>please select model</option>";
  select_model.innerHTML = html;
    select_method.onchange = function () {
      var methodId = select_method.value;
      addDataModel(methodId);
  };

  select_model.onchange = function () {
      var modelId = select_model.value;
      addDataDataset(modelId);
  };

  select_dataset.onchange = function () {
      var datasetId = select_dataset.value;
      results = arr_dataset.find(function (item) {
        return item.id == datasetId;
      });
      if (results.res instanceof Array)
        document.getElementById(nowModule).innerHTML = results.res.map(item => `<img src="assets/img/res/${item}" style="width: 30%; height: auto; margin: 10px;">`).join('');
      else
        document.getElementById(nowModule).innerHTML = results.res.replace(/\n/g, '<br>');
      document.getElementById('code').innerHTML = results.code
      document.getElementById('run').addEventListener("click",function(){
        // window.location.href = "https://www.baidu.com"
        window.location.href = "http://121.248.54.196:5000/?code=" + results.code;
      })
  };

  addDataMethod();
}

function createTabs() {
  const tabLinks = document.querySelectorAll('.tab a');
  tabLinks.forEach(link => {
      color_this = color[category.indexOf(link.getAttribute('href').substring(1))];
      link.style.backgroundColor = tinycolor(color_this).lighten(10).toString();
      link.addEventListener('click', function (event) {
          event.preventDefault();
          tabLinks.forEach(tab => {
            tab.style.height = '50px';
            tab.style.backgroundColor = color[category.indexOf(tab.getAttribute('href').substring(1))];
          });
          c = color[category.indexOf(this.getAttribute('href').substring(1))];
          this.style.backgroundColor = c;
          this.style.height = '70px';
          const targetId = this.getAttribute('href');
          document.querySelectorAll('.content div').forEach(div => {
              div.style.display = 'none';
          });
          let div = document.querySelector(targetId);
          div.style.display = 'block';
          nowModule = targetId.substring(1);
          div.childNodes.forEach(child => {
            if (child.nodeType === 1) {
              child.style.display = 'block';
            }
          });
          div.style.backgroundColor = light_color[category.indexOf(targetId.substring(1))];
          // document.querySelector(".container_2 .select_container").style.backgroundColor = light_color[category.indexOf(targetId.substring(1))];
          getFirstData(targetId.substring(1));
      });
    });
    document.querySelector('.tab a[href="#Fairness"]').click();
}

document.addEventListener("DOMContentLoaded", function() {
  const lazySections = document.querySelectorAll('.lazy-section');
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');

              if (entry.target.classList.contains('container_1')) {
                createOverviewChart(overview, finished);
                model_fin = models.length;
                dataset_fin = datasets.length;
                createChart(model_all, model_fin, "model", '#687ad1');
                createChart(dataset_all, dataset_fin, "dataset", '#fee451');
              }

              else if (entry.target.classList.contains('container_2')) {
                createTabs();
                getFirstData();
              }
              observer.unobserve(entry.target);
          }
      });
  }, {
      rootMargin: '0px',
      threshold: 0.2
  });
  lazySections.forEach(section => {
      observer.observe(section);
  });
});

// 测试 后面删
document.getElementById('run').addEventListener("click",function(){
  window.location.href = "http://121.248.54.196:5000/?code=python test.py";
})