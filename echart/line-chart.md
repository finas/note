## line-chart

```js
option={
	title:{
		text:'lineChartTile'
	},
	tooltip:{ // 鼠标放置图表上 触发提示
		trigger:'axis'， // 触发类型 item->饼图中使用，axis->折线图中
		triggerOn:'click'， // 点击时触发显示tip default 是mousemove
		formatter:'{a}</br>{c}__{b}', // 格式化提示 {a}(系列名称),{b}(类目值),{c}(数值)
		axisPointer:{
			type:'cross', // 十字准星指定器，启动两个正交的轴
		}
	},
	legend:{ // 图例组件 相当chart的索引 点击触发筛选http://echarts.baidu.com/examples/editor.html?c=area-stack

	},
	grid:[{ //http://echarts.baidu.com/option.html#grid, http://www.echartsjs.com/gallery/editor.html?c=scatter-anscombe-quartet
        left: '3%', // 距离容器左边
		
	}],
	xAxis:{ //轴X
		data:data， //x轴的数据
		position: 'top', // 所在的位置
		type:'value', //  如果为'value' 则series中的data填充到这个轴
		nameGap:,// 
		boundaryGap:true,
		axisline:{ // 线的配置
			lineStyle:{ // 线的样式
				color: 'red' 
			}
		}，
		axisLabel:{ // 标签的配置
			textStyle:{ 
				color:'grey'
			}

		}
	}，
	series:[
		{
			name:'lineName',// 用于tooltip显示和legend的帅选
			type:'line', // 类型为折线图
            areaStyle: {normal: {}}, // 设置为堆叠图 http://echarts.baidu.com/examples/editor.html?c=area-stack)
			stack:'',// 如果是areaStyle 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
			data:[1,2,3,4]
		}
	]
}
```