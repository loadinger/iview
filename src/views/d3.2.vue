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
      let tau = 2 * Math.PI;

      let arc = d3.arc()
        .innerRadius(180)
        .outerRadius(240)
        .startAngle(0);

      let svg = d3.select("#svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      // Add the background arc, from 0 to 100% (tau).
      let background = g.append("path")
        .datum({endAngle: tau})
        .style("fill", "#ddd")
        .attr("d", arc);

      // Add the foreground arc in orange, currently showing 12.7%.
      let foreground = g.append("path")
        .datum({endAngle: 0.127 * tau})
        .style("fill", "orange")
        .attr("d", arc);

      /*
      d3.interval(function() {
        foreground.transition()
          .duration(750)
          .attrTween("d", arcTween(Math.random() * tau));
      }, 1500);
      */
      foreground
        .transition()
        .duration(1000)
        .attrTween('d', arcTween(Math.PI * 2 / 3 * 0.75))

      /*
      foreground.transition()
        .duration(1000)
        .attrTween('d', arcTween(Math.random() * tau))
        */

      function arcTween(newAngle) {
        return function(d) {
          let interpolate = d3.interpolate(d.endAngle, newAngle);
          return function(t) {
            d.endAngle = interpolate(t);
            return arc(d);
          };
        };
      }

    }

  }
</script>
