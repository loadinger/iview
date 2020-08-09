<template>
  <div>
    <h1>D3</h1>
    <svg id="svg"  width="960" height="500" />
  </div>
</template>
<script>

  import * as d3 from 'd3'
  export default {

    mounted () {
      let tau = 2 * Math.PI * 0.75;

      let foregroundArc = d3.arc()
        .innerRadius(180 * 0.97)
        .outerRadius(200 * 1.03)
        .cornerRadius(20)
        .startAngle(0);
      let backgroundArc = d3.arc()
        .innerRadius(180)
        .outerRadius(200)
        .cornerRadius(20)
        .startAngle(0);

      let svg = d3.select("#svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        g = svg.append("g")
        g.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");



      let defs = svg.append("defs")
      let gradient = defs.append("linearGradient")
        .attr("id", "svgGradient")
        .attr("x1", "0%")
        .attr("x2", "0%")
        .attr("y1", "0%")
        .attr("y2", "60%");

      gradient.append("stop")
        .attr('class', 'start')
        .attr("offset", "0%")
        .attr("stop-color", "#ffffc3")
        .attr("stop-opacity", 1);

      gradient.append("stop")
        .attr('class', 'end')
        .attr("offset", "100%")
        .attr("stop-color", "#ffa500")
        .attr("stop-opacity", 1);


      let background = g.append("path")
        .datum({endAngle: tau})
        .style("fill", "#ddd")
        .attr("d", backgroundArc)
        .attr('transform', 'rotate(-135)');

      let foreground = g.append("path")
        .attr('transform', 'rotate(-135)')
        .datum({endAngle: 0 * tau})
        //.style("fill", "orange")
        .style("fill", "url(#svgGradient)")
        .attr("d", foregroundArc);

      foreground
        .transition()
        .duration(1000)
        //.ease(d3.easeElastic)
        .attrTween('d', arcTween(tau * 0.99))


      function arcTween(newAngle) {
        return function(d) {
          let interpolate = d3.interpolate(d.endAngle, newAngle);
          return function(t) {
            d.endAngle = interpolate(t);
            return foregroundArc(d);
          };
        };
      }

    }

  }
</script>
