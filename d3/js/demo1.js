const width = 800;
const height = 600;

// 画布与大小
let svg = d3.select('#d3').append('svg')
svg.attr('width', width)
    .attr('height', height)
    .style('fill', '#999');

// 画个正方形
let g = svg.append('g');
let rect = g.append('rect');
rect.attr('width', 160)
    .attr('height', 80)
    .attr('stroke', '#999')
    .attr('stroke-width', 0.5)
    .style('fill', '#efefef')
    

// 在正方形里写文字
let text = g.append('text');
text.text('正方形1')
    .attr('x', 5)
    .attr('y', 10)
    .style('color', '#999')
    .style('font-size', '12');

// 画个正方形
let g2 = svg.append('g');
g2.attr('transform', 'translate(0, 120)');
let rect2 = g2.append('rect');
rect2.attr('width', 160)
    .attr('height', 80)
    .attr('stroke', '#999')
    .attr('stroke-width', 0.5)
    .style('fill', '#efefef')
    

// 在正方形里写文字
let text2 = g2.append('text');
text2.text('正方形2')
    .attr('x', 5)
    .attr('y', 10)
    .style('color', '#999')
    .style('font-size', '12');
    
// 正方形1 --连线--> 正方形2
// 给节点添加补充箭头，线 -- 曲线添加
let line = d3.select('g.node' + d.id).append('line');
line.attr('class', 'line-arrow-down')
  .attr('x1', '0')
  .attr('y1', '0')
  .attr('x2', '0')
  .attr('y2', '5')
  .style('stroke', '#5c9ed7')
  .style('stroke-width', '1px')
  .attr("marker-end", "url(#arrow)")
  .attr('transform', function(d){
    if(d.direction && d.direction < 0) {
      return 'translate(80, 61)';
    } else {
      return 'translate(80, -10)';
    }
  });

// 给节点添加股份比例
let text = d3.select('g.node' + d.id).append('text');
console.log(d);
text.text(d.rate)
  .attr('x', 85)
  .attr('y', function(d){
    if(d.direction && d.direction < 0) {
      return 71;
    } else {
      return -2;
    }
  })
  .style('color', '#4f89f5')
  .style('font-size', '12');
