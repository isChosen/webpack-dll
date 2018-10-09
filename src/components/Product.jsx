/**
 * @description echarts 并不是全局变量,
 * dll 动态链接库文件的意思是, 依赖会从 dll 中寻找
 * 若 echarts 是全局变量, 就不需要 import 了
 */
import React, { Component } from 'react';
import Echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import Toast from './commons/Toast';

import 'weui';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      showToast: true,
      echartsOpt: {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  }

  componentDidMount() {
    const { echartsOpt } = this.state;
    let myChart = Echarts.init(document.getElementById('echartCont'));
    myChart.setOption(echartsOpt);

    setTimeout(() => {
      this.setState({showToast: false});
    }, 3000);

  }
  render() {
    const { showToast } = this.state;
    let toast = showToast ? <Toast/> : null;
    return (
      <div>
        <div id="echartCont" style={{'width': '350px', 'height': '300px'}}></div>
        { toast }
      </div>
    );
  }
}

export default Product;
