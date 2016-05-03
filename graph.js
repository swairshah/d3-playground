var G = new jsnx.Graph();
G.addNodesFrom([1,2,3,4]);
G.addCycle([1,2,3]);

G.addEdge(1,4);

jsnx.draw(G, {
    element: '#canvas',
    withLabels: true,
    'layoutAttr': {
      'charge' : -100,
      'gravity'  : 0.1,
      'linkDistance': 70
    },
    edgeStyle: {
        'stroke-width': 5,
        fill: function(d) {
          return d.data.color;
        }
    },
    nodeAttr: {
        r : 10
    },
    nodeStyle: {
        fill : function(d) { return d.data.color; },
        stroke: 'none'
    },
    stickyDrag : true
}, true);


G.addNode(5);
G.addEdge(5,4);
G.addEdge(1,5);

a = G.node.get(1);
a.color = 'red';

G.removeNode(7);

a = G.node.get(2);
a.color = 'blue';

G.node.get(2).color;
