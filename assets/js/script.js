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

document.addEventListener("DOMContentLoaded", function() {
  // 获取所有需要懒加载的元素
  const lazySections = document.querySelectorAll('.lazy-section');

  // 创建Intersection Observer实例
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // 当元素进入视口时，添加可见类
              entry.target.classList.add('visible');

              // 停止观察该元素，避免重复触发
              observer.unobserve(entry.target);
          }
      });
  }, {
      rootMargin: '0px',
      threshold: 0.1 // 当元素10%进入视口时触发
  });

  // 开始观察所有懒加载元素
  lazySections.forEach(section => {
      observer.observe(section);
  });
});

createOverviewChart(overview, finished);
createChart(20, 5, "model", '#687ad1');
createChart(50, 10, "dataset", '#fee451');

var category=['Bias','Hallucination','Judge','Watermark','Privacy','Jailbreak']
var color=['#4cd5fc','#39e07d','#b17dd1','#ffd09c','#ffffa5','#fe3fff']
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
      document.querySelector(targetId).style.display = 'block';
  });
});
// 设置默认选中的tab为Bias
document.querySelector('.tab a[href="#Bias"]').click();

// document.querySelector('.tab a').click();