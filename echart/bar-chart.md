## bar-chart

```js
	options = {
		tooltip:{
			trigger:'axix',
			axisPointer:{
				type:'shadow', // bar常用的鼠标放置效果
				shadowStyle:{ // 设置阴影
					shadowColor: 'rgba(0, 0, 0, 0.5)',
				    shadowBlur: 10
				}
			}
		},
		xAxis:[
			{
				axisTick:{
					alignWithLabel:true // 坐标轴刻度与标签对齐
				}
			}
		],
		series:[
			{
				type:'bar',
				stack:'stackName', // https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-waterfall
				itemStyle:{
					normal:{
						color:params=>colorList[params.dataIndex], // color 可以是函数
						barBorderRadius:[50,50,0,0], // 柱子的四个角圆角半径

					}
				}
			}
		]

	}
```