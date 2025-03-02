var overview = [{
  name: 'Bias',
  value: 20
},{
  name: 'Hallucination',
  value: 20
},{
  name: 'Judge',
  value: 30
},{
  name: 'Watermark',
  value: 30
},{
  name: 'Privacy',
  value: 30
},{
  name: 'Jailbreak',
  value: 40
}];

var finished = [{
  name: 'Bias',
  value: 5
},{
  name: 'Hallucination',
  value: 5
},{
  name: 'Judge',
  value: 5
},{
  name: 'Watermark',
  value: 10
},{
  name: 'Privacy',
  value: 5
},{
  name: 'Jailbreak',
  value: 15
}];

var select_data = [
  // Bias
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
    {id: 1, name: 'Dataset 1', model_id: 1},
    {id: 2, name: 'Dataset 2', model_id: 1},
    {id: 3, name: 'Dataset 3', model_id: 2},
    {id: 4, name: 'Dataset 4', model_id: 2},
    {id: 5, name: 'Dataset 1', model_id: 3},
    {id: 6, name: 'Dataset 2', model_id: 3},
  ]],
  // Hallucination
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
    {id: 1, name: 'Dataset 1', model_id: 1},
    {id: 2, name: 'Dataset 2', model_id: 1},
    {id: 3, name: 'Dataset 3', model_id: 2},
    {id: 4, name: 'Dataset 4', model_id: 2},
    {id: 5, name: 'Dataset 1', model_id: 3},
    {id: 6, name: 'Dataset 2', model_id: 3},
  ]],
  // Judge
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
    {id: 1, name: 'Dataset 1', model_id: 1},
    {id: 2, name: 'Dataset 2', model_id: 1},
    {id: 3, name: 'Dataset 3', model_id: 2},
    {id: 4, name: 'Dataset 4', model_id: 2},
    {id: 5, name: 'Dataset 1', model_id: 3},
    {id: 6, name: 'Dataset 2', model_id: 3},
  ]],
  // Watermark
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
    {id: 1, name: 'Dataset 1', model_id: 1},
    {id: 2, name: 'Dataset 2', model_id: 1},
    {id: 3, name: 'Dataset 3', model_id: 2},
    {id: 4, name: 'Dataset 4', model_id: 2},
    {id: 5, name: 'Dataset 1', model_id: 3},
    {id: 6, name: 'Dataset 2', model_id: 3},
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
    {id: 1, name: 'Dataset 1', model_id: 1},
    {id: 2, name: 'Dataset 2', model_id: 1},
    {id: 3, name: 'Dataset 3', model_id: 2},
    {id: 4, name: 'Dataset 4', model_id: 2},
    {id: 5, name: 'Dataset 1', model_id: 3},
    {id: 6, name: 'Dataset 2', model_id: 3},
  ]],
  // Jailbreak
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
    {id: 1, name: 'Dataset 1', model_id: 1},
    {id: 2, name: 'Dataset 2', model_id: 1},
    {id: 3, name: 'Dataset 3', model_id: 2},
    {id: 4, name: 'Dataset 4', model_id: 2},
    {id: 5, name: 'Dataset 1', model_id: 3},
    {id: 6, name: 'Dataset 2', model_id: 3},
  ]],
];

var category=['Bias','Hallucination','Judge','Watermark','Privacy','Jailbreak'];
var color=['#4cd5fc','#39e07d','#b17dd1','#ffd09c','#ffffa5','#fe3fff'];
var light_color=['#e2f8ff','#d3f8e2','#f0e6f6','#fff4e8','#ffffe2','#ffe2ff'];

var arr_method = select_data[0][0];
var arr_model = select_data[0][1];
var arr_dataset = select_data[0][2];

function createOverviewChart(overview, finished) {
  var data = [];
  var color=['#4cd5fc','#39e07d','#b17dd1','#ffd09c','#ffffa5','#fe3fff']
  for (var i = 0; i < overview.length; i++) {
    data.push({
        value: overview[i].value,
        name: overview[i].name,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 10,
                borderColor:color[i],
                shadowColor: color[i]
            }
        }
    }, {
        value: 2,
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
    radius: [80, 109],
    hoverAnimation: true,
    emphasis: {
      label: {
        show: true,
        // fontSize: 20,
        fontWeight: 'bold',
        position: 'center'
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
        show: true,
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
  
            var darkColor = tinycolor(color).darken(20).toString();
  
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
  
  var myChart = echarts.init(chartDom);
  myChart.setOption(option);
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
                borderWidth: 5,
                shadowBlur: 5,
                borderColor:color[i],
                shadowColor: color[i]
            }
        }
    }, {
        value: 0.2,
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
    series: seriesOption
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

function getFirstData(type = 'Bias') {
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
            tab.style.backgroundColor = tinycolor(color[category.indexOf(tab.getAttribute('href').substring(1))]).lighten(10).toString();
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
    document.querySelector('.tab a[href="#Bias"]').click();
}

document.addEventListener("DOMContentLoaded", function() {
  const lazySections = document.querySelectorAll('.lazy-section');
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');

              if (entry.target.classList.contains('container_1')) {
                createOverviewChart(overview, finished);
                createChart(20, 5, "model", '#687ad1');
                createChart(50, 10, "dataset", '#fee451');
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